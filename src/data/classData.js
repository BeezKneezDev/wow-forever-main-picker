// WoW Forever (Classic+) class and race data
// All 9 classes available to both factions
// 6 new race/class combos: Human Hunter, Dwarf Shaman, Gnome Priest,
//   Orc Mage, Troll Warlock, Undead Paladin
// 113 new talents, 277 rewritten across 27 trees

export const classes = {
  warrior: {
    name: "Warrior",
    color: "#C79C6E",
    icon: "\u2694\uFE0F",
    description: "Arms, Fury, and Protection. Reworked Fury and Prot trees.",
    roles: ["Tank", "Melee DPS"],
  },
  paladin: {
    name: "Paladin",
    color: "#F58CBA",
    icon: "\uD83D\uDEE1\uFE0F",
    description: "Holy, Protection, and Retribution. Now available to both factions.",
    roles: ["Tank", "Healer", "Melee DPS"],
  },
  hunter: {
    name: "Hunter",
    color: "#ABD473",
    icon: "\uD83C\uDFF9",
    description: "Beast Mastery, Marksmanship, and Survival. Humans can now be Hunters.",
    roles: ["Ranged DPS"],
  },
  rogue: {
    name: "Rogue",
    color: "#FFF569",
    icon: "\uD83D\uDDE1\uFE0F",
    description: "Assassination, Combat, and Subtlety. Stealth and burst from the shadows.",
    roles: ["Melee DPS"],
  },
  priest: {
    name: "Priest",
    color: "#FFFFFF",
    icon: "\u2728",
    description: "Discipline, Holy, and Shadow. Gnomes can now be Priests.",
    roles: ["Healer", "Ranged DPS"],
  },
  shaman: {
    name: "Shaman",
    color: "#0070DE",
    icon: "\u26A1",
    description: "Elemental, Enhancement, and Restoration. Can tank in Forever. Dwarf Shamans bring it to Alliance.",
    roles: ["Tank", "Healer", "Ranged DPS", "Melee DPS"],
  },
  mage: {
    name: "Mage",
    color: "#69CCF0",
    icon: "\uD83D\uDD25",
    description: "Arcane, Fire, and Frost. Orcs can now be Mages.",
    roles: ["Ranged DPS"],
  },
  warlock: {
    name: "Warlock",
    color: "#9482C9",
    icon: "\uD83D\uDC7F",
    description: "Affliction, Demonology, and Destruction. Most reworked class — almost all talents changed.",
    roles: ["Ranged DPS"],
  },
  druid: {
    name: "Druid",
    color: "#FF7D0A",
    icon: "\uD83C\uDF3F",
    description: "Balance, Feral Combat, and Restoration. The ultimate hybrid.",
    roles: ["Tank", "Healer", "Melee DPS", "Ranged DPS"],
  },
};

export const professions = {
  mining: { name: "Mining", icon: "\u26CF\uFE0F", type: "Gathering" },
  herbalism: { name: "Herbalism", icon: "\uD83C\uDF3F", type: "Gathering" },
  skinning: { name: "Skinning", icon: "\uD83E\uDE93", type: "Gathering" },
  alchemy: { name: "Alchemy", icon: "\u2697\uFE0F", type: "Crafting" },
  blacksmithing: { name: "Blacksmithing", icon: "\uD83D\uDD28", type: "Crafting" },
  leatherworking: { name: "Leatherworking", icon: "\uD83E\uDDE5", type: "Crafting" },
  tailoring: { name: "Tailoring", icon: "\uD83E\uDEA1", type: "Crafting" },
  enchanting: { name: "Enchanting", icon: "\uD83D\uDCAB", type: "Crafting" },
  engineering: { name: "Engineering", icon: "\u2699\uFE0F", type: "Crafting" },
};

// WoW Forever race/class combos (includes 6 new combos marked with *)
export const raceClassMap = {
  // Alliance
  human: {
    name: "Human",
    faction: "alliance",
    classes: ["warrior", "paladin", "hunter", "rogue", "priest", "mage", "warlock"], // *hunter new
    icon: "\uD83D\uDC64",
  },
  dwarf: {
    name: "Dwarf",
    faction: "alliance",
    classes: ["warrior", "paladin", "hunter", "rogue", "priest", "shaman"], // *shaman new
    icon: "\u26CF\uFE0F",
  },
  nightelf: {
    name: "Night Elf",
    faction: "alliance",
    classes: ["warrior", "hunter", "rogue", "priest", "druid"],
    icon: "\uD83C\uDF19",
  },
  gnome: {
    name: "Gnome",
    faction: "alliance",
    classes: ["warrior", "rogue", "priest", "mage", "warlock"], // *priest new
    icon: "\u2699\uFE0F",
  },
  // Horde
  orc: {
    name: "Orc",
    faction: "horde",
    classes: ["warrior", "hunter", "rogue", "shaman", "warlock", "mage"], // *mage new
    icon: "\uD83D\uDCA2",
  },
  undead: {
    name: "Undead",
    faction: "horde",
    classes: ["warrior", "rogue", "priest", "mage", "warlock", "paladin"], // *paladin new
    icon: "\uD83D\uDC80",
  },
  tauren: {
    name: "Tauren",
    faction: "horde",
    classes: ["warrior", "hunter", "shaman", "druid"],
    icon: "\uD83D\uDC02",
  },
  troll: {
    name: "Troll",
    faction: "horde",
    classes: ["warrior", "hunter", "rogue", "priest", "mage", "shaman", "warlock"], // *warlock new
    icon: "\uD83E\uDE84",
  },
};

// Recommended race per class per faction, with role-specific overrides
export const recommendedRace = {
  alliance: {
    warrior:  { default: "human",    tank: "human",    dps: "human" },      // sword/mace spec, perception
    paladin:  { default: "human",    tank: "human",    healer: "human" },   // sword/mace spec
    hunter:   { default: "dwarf",    dps: "nightelf" },                     // dwarf gun spec + stoneform; NE shadowmeld
    rogue:    { default: "human",    dps: "human" },                        // perception, sword spec
    priest:   { default: "dwarf",    healer: "dwarf",  dps: "human" },      // fear ward
    shaman:   { default: "dwarf",    tank: "dwarf", healer: "dwarf", dps: "dwarf" }, // stoneform
    mage:     { default: "gnome",    dps: "gnome" },                        // escape artist, int
    warlock:  { default: "gnome",    dps: "gnome" },                        // escape artist, int
    druid:    { default: "nightelf", tank: "nightelf", healer: "nightelf", dps: "nightelf" },
  },
  horde: {
    warrior:  { default: "orc",     tank: "tauren",   dps: "orc" },        // tauren war stomp + HP for tank; orc stun resist + blood fury
    paladin:  { default: "undead",  tank: "undead",   healer: "undead" },   // WotF
    hunter:   { default: "orc",     dps: "troll" },                         // orc pet dmg; troll berserking
    rogue:    { default: "undead",  dps: "orc" },                           // WotF for PvP; orc stun resist
    priest:   { default: "undead",  healer: "troll",   dps: "undead" },     // WotF; troll berserking for heals
    shaman:   { default: "orc",     tank: "tauren", healer: "troll", dps: "orc" }, // tauren HP + war stomp for tank
    mage:     { default: "undead",  dps: "troll" },                         // WotF for PvP; troll berserking
    warlock:  { default: "undead",  dps: "orc" },                           // WotF; orc pet dmg
    druid:    { default: "tauren",  tank: "tauren",    healer: "tauren", dps: "tauren" },
  },
};

// Optimal profession pairings per class
export const classProfSynergy = {
  warrior: ["blacksmithing", "mining"],
  paladin: ["blacksmithing", "mining"],
  hunter: ["leatherworking", "skinning"],
  rogue: ["engineering", "mining"],
  priest: ["tailoring", "enchanting"],
  shaman: ["leatherworking", "skinning"],
  mage: ["tailoring", "enchanting"],
  warlock: ["tailoring", "enchanting"],
  druid: ["alchemy", "herbalism"],
};
