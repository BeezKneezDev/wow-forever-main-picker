import {
  classes,
  professions,
  raceClassMap,
  recommendedRace,
  classProfSynergy,
  specs,
} from "../data/classData";

export default function Results({
  classScores,
  profScores,
  specScores = {},
  faction,
  flags,
  exclusions = new Set(),
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
    // Default to horde, but check if there's a race preference
    const racePref = flags.racePref;
    if (racePref && raceClassMap[racePref]) {
      finalFaction = raceClassMap[racePref].faction;
    } else {
      finalFaction = "horde";
    }
  }

  // Determine race — use role-aware recommendation
  const roleFlag = flags.role; // "tank", "healer", "dps", "hybrid"
  const raceEntry = recommendedRace[finalFaction]?.[topClassKey];
  let raceKey = raceEntry?.default;
  if (raceEntry) {
    if (roleFlag === "tank" && raceEntry.tank) raceKey = raceEntry.tank;
    else if (roleFlag === "healer" && raceEntry.healer) raceKey = raceEntry.healer;
    else if (roleFlag === "dps" && raceEntry.dps) raceKey = raceEntry.dps;
  }

  // If we have a race preference flag and it's valid, override
  const racePref = flags.racePref;
  if (
    racePref &&
    raceClassMap[racePref] &&
    raceClassMap[racePref].faction === finalFaction &&
    raceClassMap[racePref].classes.includes(topClassKey)
  ) {
    raceKey = racePref;
  }

  const race = raceClassMap[raceKey];

  // Determine professions
  const profScoresCopy = { ...profScores };
  const synergy = classProfSynergy[topClassKey] || [];
  synergy.forEach((p) => {
    profScoresCopy[p] = (profScoresCopy[p] || 0) + 3;
  });

  if (flags.profPref === "optimal") {
    synergy.forEach((p) => {
      profScoresCopy[p] = (profScoresCopy[p] || 0) + 5;
    });
  }

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
        <div className="result-icon" style={{ fontSize: "3rem" }}>
          {topClass.icon}
        </div>
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
          <div className="result-icon">{race?.icon}</div>
          <p>{race?.name}</p>
        </div>
      </div>

      <div className="result-card profs-result">
        <h3>Recommended Professions</h3>
        <div className="prof-row">
          <div className="prof-pick">
            <span className="prof-icon">{prof1.icon}</span>
            <span>{prof1.name}</span>
            <span className="prof-type">{prof1.type}</span>
            {prof1.tier && <span className={`prof-tier tier-${prof1.tier.toLowerCase()}`}>{prof1.tier}-Tier</span>}
          </div>
          <div className="prof-pick">
            <span className="prof-icon">{prof2.icon}</span>
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
                <span className="top-icon">{cls.icon}</span>
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
