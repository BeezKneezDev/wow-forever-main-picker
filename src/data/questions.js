// Questions follow the spreadsheet flow:
// 1. Melee or Ranged
// 2. Spellcaster, Physical, or Combination
// 3. Role
// 4. Content Types (multi-select) → conditional PVP/PVE sub-questions
// 5. Exclusions
//
// Class keys: warrior, paladin, hunter, rogue, priest, shaman, mage, warlock, druid

const questions = [
  // ── FUNDAMENTAL QUESTIONS ──
  {
    id: "combat-range",
    category: "Fundamentals",
    text: "Melee or Ranged?",
    type: "single",
    answers: [
      {
        text: "Melee",
        classScores: { warrior: 4, rogue: 4, paladin: 3, shaman: 2, druid: 2 },
        profScores: {},
        specScores: { warrior_arms: 2, warrior_fury: 2, warrior_protection: 1, rogue_assassination: 2, rogue_combat: 2, rogue_subtlety: 2, paladin_retribution: 2, paladin_protection: 1, shaman_enhancement: 2, druid_feral: 2, hunter_survival: 3 },
      },
      {
        text: "Ranged",
        classScores: { mage: 4, warlock: 4, hunter: 4, priest: 3, shaman: 2, druid: 2 },
        profScores: {},
        specScores: { mage_fire: 2, mage_frost: 2, mage_arcane: 2, warlock_affliction: 2, warlock_demonology: 2, warlock_destruction: 2, hunter_beastmastery: 2, hunter_marksmanship: 3, priest_shadow: 2, shaman_elemental: 2, druid_balance: 2 },
      },
      {
        text: "Both / No Preference",
        classScores: { druid: 3, shaman: 2, paladin: 2 },
        profScores: {},
        specScores: { druid_feral: 1, druid_balance: 1, shaman_elemental: 1, shaman_enhancement: 1 },
      },
    ],
  },
  {
    id: "power-source",
    category: "Fundamentals",
    text: "Spellcaster, Physical, or a Combination?",
    type: "single",
    answers: [
      {
        text: "Spellcaster",
        classScores: { mage: 5, warlock: 5, priest: 4, shaman: 2, druid: 2 },
        profScores: { tailoring: 1, enchanting: 1 },
      },
      {
        text: "Physical",
        classScores: { warrior: 5, rogue: 5, hunter: 4 },
        profScores: { blacksmithing: 1, leatherworking: 1 },
      },
      {
        text: "Combination",
        classScores: { paladin: 5, shaman: 4, druid: 4, hunter: 1 },
        profScores: {},
      },
    ],
  },
  {
    id: "role",
    category: "Fundamentals",
    text: "What role do you want to fill?",
    type: "single",
    answers: [
      {
        text: "Tank",
        classScores: { warrior: 5, druid: 3, paladin: 3, shaman: 2 },
        profScores: { blacksmithing: 1, mining: 1 },
        flags: { role: "tank" },
        specScores: { warrior_protection: 10, paladin_protection: 10, druid_feral: 6, shaman_enhancement: 6 },
      },
      {
        text: "Healer",
        classScores: { priest: 5, paladin: 3, shaman: 3, druid: 3 },
        profScores: { alchemy: 1, tailoring: 1 },
        flags: { role: "healer" },
        specScores: { priest_discipline: 5, priest_holy: 5, paladin_holy: 10, shaman_restoration: 10, druid_restoration: 10 },
      },
      {
        text: "DPS",
        classScores: { rogue: 3, mage: 3, warlock: 3, hunter: 3, warrior: 2, shaman: 1, druid: 1 },
        profScores: {},
        flags: { role: "dps" },
        specScores: { warrior_arms: 1, warrior_fury: 1, paladin_retribution: 1, hunter_beastmastery: 1, hunter_marksmanship: 1, hunter_survival: 1, rogue_assassination: 1, rogue_combat: 1, rogue_subtlety: 1, priest_shadow: 1, shaman_elemental: 1, shaman_enhancement: 1, mage_arcane: 1, mage_fire: 1, mage_frost: 1, warlock_affliction: 1, warlock_demonology: 1, warlock_destruction: 1, druid_balance: 1, druid_feral: 1 },
      },
      {
        text: "Hybrid / Flexible",
        classScores: { druid: 5, paladin: 4, shaman: 4 },
        profScores: {},
        flags: { role: "hybrid" },
        specScores: { druid_feral: 2, druid_balance: 1, druid_restoration: 1, paladin_retribution: 1, paladin_protection: 1, paladin_holy: 1, shaman_elemental: 1, shaman_enhancement: 1, shaman_restoration: 1 },
      },
    ],
  },

  // ── FACTION ──
  {
    id: "faction",
    category: "Faction",
    text: "Which faction?",
    type: "single",
    answers: [
      {
        text: "Alliance",
        classScores: {},
        profScores: {},
        flags: { faction: "alliance" },
      },
      {
        text: "Horde",
        classScores: {},
        profScores: {},
        flags: { faction: "horde" },
      },
      {
        text: "No Preference",
        classScores: {},
        profScores: {},
        flags: { faction: "any" },
      },
    ],
  },

  // ── CONTENT TYPES (multi-select) ──
  {
    id: "content-types",
    category: "Content",
    text: "Pick your preferred content types:",
    type: "multi",
    answers: [
      {
        text: "PvP",
        classScores: { rogue: 2, mage: 2, warrior: 1, hunter: 1 },
        profScores: { engineering: 2 },
        flags: { pvp: true },
      },
      {
        text: "PvE",
        classScores: { warrior: 1, priest: 1, mage: 1, warlock: 1, rogue: 1 },
        profScores: { alchemy: 1, enchanting: 1 },
        flags: { pve: true },
      },
      {
        text: "Leveling",
        classScores: { hunter: 3, warlock: 2, druid: 1 },
        profScores: { skinning: 1 },
      },
      {
        text: "Hardcore",
        classScores: { hunter: 2, paladin: 2, warlock: 1, druid: 1 },
        profScores: { alchemy: 1, herbalism: 1 },
      },
      {
        text: "Roleplay",
        classScores: { paladin: 1, warlock: 1, priest: 1, druid: 1 },
        profScores: {},
      },
      {
        text: "Farming / Professions",
        classScores: { hunter: 2, mage: 2, druid: 1 },
        profScores: { mining: 1, herbalism: 1, skinning: 1 },
      },
    ],
  },

  // ── PVP SUB-QUESTIONS (conditional, only if PvP selected) ──
  {
    id: "pvp-types",
    category: "PvP",
    text: "What kind of PvP?",
    type: "multi",
    condition: { questionId: "content-types", hasAnswer: "PvP" },
    answers: [
      {
        text: "1vX / Dueling",
        classScores: { rogue: 3, mage: 3, warlock: 2, hunter: 2, shaman: 1 },
        profScores: { engineering: 1 },
        specScores: { rogue_subtlety: 3, mage_frost: 3, warlock_affliction: 2 },
      },
      {
        text: "Small Group / Arena-style",
        classScores: { shaman: 2, priest: 2, warrior: 2, mage: 2, druid: 1 },
        profScores: {},
      },
      {
        text: "Raid vs. Raid / World PvP",
        classScores: { warrior: 2, mage: 2, priest: 2, shaman: 2, warlock: 1 },
        profScores: { engineering: 1 },
      },
      {
        text: "Battlegrounds",
        classScores: { warrior: 2, druid: 2, priest: 2, mage: 1, hunter: 1, paladin: 1 },
        profScores: {},
      },
      {
        text: "Ganking / Griefing",
        classScores: { rogue: 4, hunter: 2, mage: 2 },
        profScores: { engineering: 2 },
        specScores: { rogue_subtlety: 4 },
      },
    ],
  },

  // ── PVE SUB-QUESTIONS (conditional, only if PvE selected) ──
  {
    id: "pve-types",
    category: "PvE",
    text: "What kind of PvE?",
    type: "multi",
    condition: { questionId: "content-types", hasAnswer: "PvE" },
    answers: [
      {
        text: "Dungeons",
        classScores: { warrior: 2, priest: 1, mage: 2, paladin: 1, druid: 1 },
        profScores: { blacksmithing: 1 },
      },
      {
        text: "PUG Raiding",
        classScores: { warrior: 1, priest: 2, mage: 2, warlock: 2, hunter: 1 },
        profScores: { alchemy: 1 },
      },
      {
        text: "Guild Raiding",
        classScores: { warrior: 2, priest: 2, rogue: 1, mage: 1, warlock: 1 },
        profScores: { alchemy: 1, enchanting: 1 },
      },
      {
        text: "Speedrunning / Parse Culture",
        classScores: { warrior: 3, rogue: 3, mage: 2 },
        profScores: { engineering: 2, alchemy: 1 },
        specScores: { warrior_fury: 3, rogue_combat: 3, mage_fire: 2 },
      },
    ],
  },

  // ── GAMEPLAY FEEL / TEXTURE ──
  {
    id: "stealth",
    category: "Gameplay Feel",
    text: "How important is stealth to you?",
    type: "single",
    answers: [
      {
        text: "Essential — I want to pick every fight on my terms",
        classScores: { rogue: 5, druid: 2 },
        profScores: {},
        specScores: { rogue_subtlety: 4, druid_feral: 2 },
      },
      {
        text: "Nice to have sometimes",
        classScores: { druid: 2, rogue: 1 },
        profScores: {},
        specScores: { rogue_subtlety: 1, druid_feral: 1 },
      },
      {
        text: "Don't care about it at all",
        classScores: { warrior: 1, mage: 1, warlock: 1, priest: 1, hunter: 1, paladin: 1, shaman: 1 },
        profScores: {},
      },
    ],
  },
  {
    id: "pets",
    category: "Gameplay Feel",
    text: "How do you feel about pets and minions?",
    type: "single",
    answers: [
      {
        text: "Love it — I want a loyal beast companion",
        classScores: { hunter: 5 },
        profScores: {},
        specScores: { hunter_beastmastery: 5 },
      },
      {
        text: "Summoning demons sounds awesome",
        classScores: { warlock: 5 },
        profScores: {},
        specScores: { warlock_demonology: 5 },
      },
      {
        text: "I like dropping totems and utility",
        classScores: { shaman: 5 },
        profScores: {},
        specScores: { shaman_elemental: 2, shaman_enhancement: 2, shaman_restoration: 2 },
      },
      {
        text: "No thanks — just me and my abilities",
        classScores: { warrior: 2, rogue: 2, mage: 2, priest: 1, paladin: 1, druid: 1 },
        profScores: {},
        specScores: { hunter_marksmanship: 2, hunter_survival: 2 },
      },
    ],
  },
  {
    id: "solo-play",
    category: "Gameplay Feel",
    text: "How important is being able to solo content?",
    type: "single",
    answers: [
      {
        text: "Very — I need to be fully self-sufficient",
        classScores: { hunter: 4, warlock: 3, druid: 2, paladin: 1 },
        profScores: { herbalism: 1, alchemy: 1 },
      },
      {
        text: "I mostly group but want to solo when needed",
        classScores: { paladin: 2, shaman: 2, mage: 2, druid: 1 },
        profScores: {},
      },
      {
        text: "Don't care — I'll always be with others",
        classScores: { warrior: 3, priest: 2, rogue: 1 },
        profScores: {},
      },
    ],
  },
  {
    id: "dots-vs-crits",
    category: "Gameplay Feel",
    text: "DoTs or big crits?",
    type: "single",
    answers: [
      {
        text: "Big fat crits — I live for those massive numbers",
        classScores: { mage: 4, rogue: 3, warrior: 2, shaman: 2 },
        profScores: {},
        specScores: { mage_fire: 4, rogue_subtlety: 3, warrior_arms: 2, shaman_elemental: 2, warlock_destruction: 3 },
      },
      {
        text: "DoTs — I want to watch their health slowly drain away",
        classScores: { warlock: 5, priest: 3, druid: 2 },
        profScores: {},
        specScores: { warlock_affliction: 5, priest_shadow: 4, druid_balance: 2, druid_restoration: 1 },
      },
      {
        text: "A mix of both",
        classScores: { druid: 2, shaman: 2, hunter: 2, priest: 1 },
        profScores: {},
      },
      {
        text: "Steady consistent damage",
        classScores: { hunter: 3, warrior: 1, mage: 1 },
        profScores: {},
        specScores: { hunter_marksmanship: 3, hunter_beastmastery: 2, warrior_fury: 2, mage_arcane: 2 },
      },
      {
        text: "I'd rather keep people alive than do damage",
        classScores: { priest: 3, paladin: 3, shaman: 2, druid: 2 },
        profScores: {},
        specScores: { priest_holy: 2, priest_discipline: 2, paladin_holy: 2, shaman_restoration: 2, druid_restoration: 2 },
      },
    ],
  },
  {
    id: "target-style",
    category: "Gameplay Feel",
    text: "Single target, cleave, or AoE?",
    type: "single",
    answers: [
      {
        text: "Single target — I want to melt one target as fast as possible",
        classScores: { rogue: 4, warrior: 3, warlock: 2, hunter: 2 },
        profScores: {},
        specScores: { rogue_assassination: 4, warrior_arms: 3, warlock_destruction: 2, hunter_marksmanship: 3 },
      },
      {
        text: "Cleave — hitting 2-3 targets at once feels great",
        classScores: { warrior: 3, shaman: 2, druid: 2, paladin: 1 },
        profScores: {},
        specScores: { warrior_fury: 4, warrior_protection: 1, shaman_enhancement: 2, rogue_combat: 3, druid_feral: 2 },
      },
      {
        text: "AoE — I want to pull the whole room and blast it down",
        classScores: { mage: 5, warlock: 2, priest: 1, druid: 1 },
        profScores: {},
        specScores: { mage_frost: 4, mage_fire: 2, warlock_affliction: 2, priest_shadow: 1 },
      },
      {
        text: "A bit of everything depending on the situation",
        classScores: { druid: 2, shaman: 2, hunter: 1, mage: 1 },
        profScores: {},
      },
    ],
  },
  {
    id: "mobility",
    category: "Gameplay Feel",
    text: "How much do you care about mobility and movement?",
    type: "single",
    answers: [
      {
        text: "A lot — I want to be fast and hard to catch",
        classScores: { druid: 4, rogue: 2, hunter: 2, mage: 1 },
        profScores: {},
        specScores: { druid_feral: 3, druid_balance: 1 },
      },
      {
        text: "I'd rather stand my ground and be tough",
        classScores: { warrior: 3, paladin: 3 },
        profScores: {},
      },
      {
        text: "I'm fine being a turret if I hit hard enough",
        classScores: { mage: 2, warlock: 3, priest: 1, shaman: 1 },
        profScores: {},
        specScores: { mage_arcane: 2, warlock_destruction: 2 },
      },
    ],
  },
  {
    id: "utility",
    category: "Gameplay Feel",
    text: "How important is bringing group utility and buffs?",
    type: "single",
    answers: [
      {
        text: "Very — I want to be the backbone of any group",
        classScores: { paladin: 3, shaman: 3, priest: 2, druid: 2 },
        profScores: {},
      },
      {
        text: "Some is nice, but I'm here to do my job",
        classScores: { mage: 2, warlock: 2, hunter: 1, warrior: 1 },
        profScores: {},
      },
      {
        text: "I don't care — I bring damage or heals, that's enough",
        classScores: { rogue: 3, warrior: 2, mage: 1 },
        profScores: {},
      },
    ],
  },
  {
    id: "complexity",
    category: "Gameplay Feel",
    text: "How complex do you want your rotation / gameplay to be?",
    type: "single",
    answers: [
      {
        text: "Simple and effective — less buttons, more impact",
        classScores: { hunter: 2, paladin: 2, warrior: 1 },
        profScores: {},
        specScores: { hunter_beastmastery: 2, paladin_retribution: 2 },
      },
      {
        text: "Moderate — a few key decisions each fight",
        classScores: { mage: 2, warlock: 2, priest: 1, rogue: 1 },
        profScores: {},
      },
      {
        text: "Complex — I want to juggle lots of abilities",
        classScores: { druid: 3, shaman: 3, rogue: 2 },
        profScores: {},
        specScores: { druid_feral: 3, shaman_enhancement: 2, rogue_subtlety: 2 },
      },
    ],
  },

  // ── PROFESSIONS ──
  {
    id: "gold-making",
    category: "Professions",
    text: "How do you want to spend your profession time?",
    type: "single",
    answers: [
      {
        text: "Crafting weapons and armor to gear up myself and guildies",
        classScores: {},
        profScores: { blacksmithing: 4, leatherworking: 3, tailoring: 2, mining: 2, skinning: 1 },
      },
      {
        text: "Gathering nodes out in the world — it's meditative",
        classScores: {},
        profScores: { mining: 4, herbalism: 4, skinning: 3 },
      },
      {
        text: "Brewing potions, flasks, and combat elixirs",
        classScores: {},
        profScores: { alchemy: 5, herbalism: 3 },
      },
      {
        text: "Gadgets, bombs, teleports, and toys — Engineering all the way",
        classScores: {},
        profScores: { engineering: 5, mining: 3 },
      },
      {
        text: "Disenchanting loot and selling enchants",
        classScores: {},
        profScores: { enchanting: 5, tailoring: 2 },
      },
      {
        text: "Camp buffs and utility — I want the best camp setup",
        classScores: {},
        profScores: { engineering: 3, blacksmithing: 2, herbalism: 2, tailoring: 2, alchemy: 1 },
      },
      {
        text: "Whatever's optimal for my class",
        classScores: {},
        profScores: {},
        flags: { profPref: "optimal" },
      },
    ],
  },

  // ── EXCLUSIONS ──
  {
    id: "exclusions",
    category: "Exclusions",
    text: "Any classes you want to rule out?",
    type: "exclude",
    answers: [
      { text: "Warrior", excludeClass: "warrior" },
      { text: "Paladin", excludeClass: "paladin" },
      { text: "Hunter", excludeClass: "hunter" },
      { text: "Rogue", excludeClass: "rogue" },
      { text: "Priest", excludeClass: "priest" },
      { text: "Shaman", excludeClass: "shaman" },
      { text: "Mage", excludeClass: "mage" },
      { text: "Warlock", excludeClass: "warlock" },
      { text: "Druid", excludeClass: "druid" },
    ],
  },
];

export default questions;
