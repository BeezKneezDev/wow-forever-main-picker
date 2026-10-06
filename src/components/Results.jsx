import {
  classes,
  professions,
  raceClassMap,
  recommendedRace,
  classProfSynergy,
  classArmorType,
  armorProfPenalties,
  classPowerType,
  specs,
} from "../data/classData";

export default function Results({
  classScores,
  profScores,
  specScores = {},
  faction,
  flags,
  exclusions = new Set(),
  raceExclusions = new Set(),
}) {
  // Filter out excluded classes only (no more faction locks)
  const validClasses = Object.entries(classScores)
    .filter(([key]) => !exclusions.has(key))
    .sort(([, a], [, b]) => b - a);

  if (validClasses.length === 0) {
    return (
      <div className="results">
        <h1>No Classes Left!</h1>
        <p>You excluded everything. Try again with fewer exclusions.</p>
      </div>
    );
  }

  const [topClassKey, topClassScore] = validClasses[0];
  const topClass = classes[topClassKey];

  // Determine recommended spec for the winning class
  const classSpecs = specs[topClassKey] || [];
  const specPrefix = topClassKey + "_";
  const specEntries = classSpecs.map((s) => ({
    ...s,
    score: specScores[specPrefix + s.key] || 0,
  }));
  specEntries.sort((a, b) => b.score - a.score);
  const topSpec = specEntries[0] || null;

  // Determine faction — if "any", pick based on best race for the class
  let finalFaction = faction;
  if (!finalFaction || finalFaction === "any") {
    const racePref = flags.racePref;
    if (racePref && raceClassMap[racePref]) {
      finalFaction = raceClassMap[racePref].faction;
    } else {
      finalFaction = "horde";
    }
  }

  // Determine race — use role-aware recommendation, respecting exclusions
  const roleFlag = flags.role;
  const raceEntry = recommendedRace[finalFaction]?.[topClassKey];

  function pickRace(entry) {
    if (!entry) return null;
    // Build candidate list in priority order based on role
    const candidates = [];
    if (roleFlag === "tank" && entry.tank) candidates.push(entry.tank);
    else if (roleFlag === "healer" && entry.healer) candidates.push(entry.healer);
    else if (roleFlag === "dps" && entry.dps) candidates.push(entry.dps);
    candidates.push(entry.default);
    // Also add all other role options as fallbacks
    for (const r of [entry.tank, entry.healer, entry.dps, entry.default]) {
      if (r && !candidates.includes(r)) candidates.push(r);
    }
    // Return first non-excluded candidate
    for (const c of candidates) {
      if (!raceExclusions.has(c)) return c;
    }
    // Last resort: any race of this faction that can play this class and isn't excluded
    const fallback = Object.entries(raceClassMap).find(
      ([key, data]) =>
        data.faction === finalFaction &&
        data.classes.includes(topClassKey) &&
        !raceExclusions.has(key)
    );
    return fallback ? fallback[0] : entry.default;
  }

  let raceKey = pickRace(raceEntry);

  // If we have a race preference flag and it's valid and not excluded, override
  const racePref = flags.racePref;
  if (
    racePref &&
    raceClassMap[racePref] &&
    raceClassMap[racePref].faction === finalFaction &&
    raceClassMap[racePref].classes.includes(topClassKey) &&
    !raceExclusions.has(racePref)
  ) {
    raceKey = racePref;
  }

  const race = raceClassMap[raceKey];

  // ── Profession scoring pipeline ──
  // 1. Start with quiz-accumulated profScores
  const profScoresCopy = { ...profScores };

  // 2. Apply armor-type penalties based on winning class
  const armorInfo = classArmorType[topClassKey];
  if (armorInfo) {
    const penalties = armorProfPenalties[armorInfo.armor] || {};
    Object.entries(penalties).forEach(([prof, penalty]) => {
      profScoresCopy[prof] = (profScoresCopy[prof] || 0) + penalty;
    });
  }

  // 3. Boost winning class's matching craft prof
  if (armorInfo?.craftProf) {
    profScoresCopy[armorInfo.craftProf] = (profScoresCopy[armorInfo.craftProf] || 0) + 3;
  }

  // 4. Caster/physical power-type boost
  const powerType = classPowerType[topClassKey];
  if (powerType === "caster") {
    profScoresCopy.tailoring = (profScoresCopy.tailoring || 0) + 2;
    profScoresCopy.enchanting = (profScoresCopy.enchanting || 0) + 2;
  } else if (powerType === "physical") {
    profScoresCopy.blacksmithing = (profScoresCopy.blacksmithing || 0) + 1;
    profScoresCopy.leatherworking = (profScoresCopy.leatherworking || 0) + 1;
  }

  // 5. Class synergy bonuses (+3)
  const synergy = classProfSynergy[topClassKey] || [];
  synergy.forEach((p) => {
    profScoresCopy[p] = (profScoresCopy[p] || 0) + 3;
  });

  // 6. Optimal flag bonus (+5) — triggered by explicit choice OR min-maxers
  if (flags.profPref === "optimal") {
    synergy.forEach((p) => {
      profScoresCopy[p] = (profScoresCopy[p] || 0) + 5;
    });
  }

  // 7. Min-max intensity bonus
  if (flags.intensity === "minmax") {
    profScoresCopy.engineering = (profScoresCopy.engineering || 0) + 3;
  }

  // 8. Play pattern adjustments
  if (flags.playPattern === "solo-main") {
    // Gathering is more valuable when you have one character
    profScoresCopy.mining = (profScoresCopy.mining || 0) + 1;
    profScoresCopy.herbalism = (profScoresCopy.herbalism || 0) + 1;
  } else if (flags.playPattern === "main-plus-alts") {
    // With alts to gather, crafting is better on main
    profScoresCopy.mining = (profScoresCopy.mining || 0) - 1;
    profScoresCopy.herbalism = (profScoresCopy.herbalism || 0) - 1;
    profScoresCopy.skinning = (profScoresCopy.skinning || 0) - 1;
  }

  // 9. Floor all scores at 0, sort, pick top 2
  Object.keys(profScoresCopy).forEach((k) => {
    if (profScoresCopy[k] < 0) profScoresCopy[k] = 0;
  });

  const sortedProfs = Object.entries(profScoresCopy).sort(
    ([, a], [, b]) => b - a
  );

  const prof1Key = sortedProfs[0][0];
  const prof2Key = sortedProfs[1][0];
  const prof1 = professions[prof1Key];
  const prof2 = professions[prof2Key];

  const topThree = validClasses.slice(0, 3);

  return (
    <div className="results">
      <h1>Your WoW Forever Main</h1>

      <div className="result-card main-result">
        {topClass.art && (
          <div className="class-art-container">
            <img className="class-art" src={topClass.art} alt={topClass.name} />
          </div>
        )}
        <img className="result-icon-img main-icon" src={topClass.icon} alt={topClass.name} />
        <h2 style={{ color: topClass.color }}>{topClass.name}</h2>
        <p className="result-desc">{topClass.description}</p>
        <div className="result-roles">
          {topClass.roles.map((r) => (
            <span key={r} className="role-tag">
              {r}
            </span>
          ))}
        </div>
      </div>

      {topSpec && (
        <div className="result-card spec-result">
          <h3>Recommended Spec</h3>
          {topSpec.icon && <img className="result-icon-img spec-icon-img" src={topSpec.icon} alt={topSpec.name} />}
          <h2 style={{ color: topClass.color }}>{topSpec.name}</h2>
          <p className="result-desc">{topSpec.description}</p>
          <span className="spec-score">{topSpec.score} pts</span>
        </div>
      )}

      <div className="result-row">
        <div className="result-card">
          <h3>{finalFaction === "alliance" ? "Alliance" : "Horde"}</h3>
          <div className="result-icon">
            {finalFaction === "alliance" ? "\uD83E\uDDB5" : "\uD83D\uDCA2"}
          </div>
        </div>

        <div className="result-card">
          <h3>Race</h3>
          {race?.icon && <img className="result-icon-img race-icon-img" src={race.icon} alt={race.name} />}
          <p>{race?.name}</p>
        </div>
      </div>

      <div className="result-card profs-result">
        <h3>Recommended Professions</h3>
        <div className="prof-row">
          <div className="prof-pick">
            <img className="prof-icon-img" src={prof1.icon} alt={prof1.name} />
            <span>{prof1.name}</span>
            <span className="prof-type">{prof1.type}</span>
            {prof1.tier && <span className={`prof-tier tier-${prof1.tier.toLowerCase()}`}>{prof1.tier}-Tier</span>}
          </div>
          <div className="prof-pick">
            <img className="prof-icon-img" src={prof2.icon} alt={prof2.name} />
            <span>{prof2.name}</span>
            <span className="prof-type">{prof2.type}</span>
            {prof2.tier && <span className={`prof-tier tier-${prof2.tier.toLowerCase()}`}>{prof2.tier}-Tier</span>}
          </div>
        </div>
      </div>

      <div className="result-card">
        <h3>Top 3 Classes</h3>
        <div className="top-three">
          {topThree.map(([key, score], i) => {
            const cls = classes[key];
            return (
              <div key={key} className={`top-class ${i === 0 ? "first" : ""}`}>
                <span className="top-rank">#{i + 1}</span>
                <img className="top-icon-img" src={cls.icon} alt={cls.name} />
                <span className="top-name" style={{ color: cls.color }}>
                  {cls.name}
                </span>
                <span className="top-score">{score} pts</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
