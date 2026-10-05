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
// Updated for WoW Forever reworked racials:
//   Human:    Will to Survive (stun remove), Perception, Sword Spec (2% crit), Human Spirit (5% spirit)
//   Dwarf:    Stoneform (poison/disease + phys dmg red), Mace Spec (1% crit), Big Game Hunter (5% beast dmg)
//   Night Elf: Elune's Light (10% crit 15s CD!), Shadowmeld, Quickness (1% dodge + 2% run)
//   Gnome:    Escape Artist, Eureka! (reduced cost + 10% dmg/heal next 3), Expansive Mind (5% mana/rage/energy)
//   Orc:      Blood Fury (10% AP+SP 15s), Shatter Curse (curse immune + magic dmg red), Axe Spec (1% crit), Hardiness (20% stun red)
//   Undead:   WotF, Cannibalize (HP+Mana), Touch of the Grave (passive drain), Underwater Breathing
//   Tauren:   War Stomp (2s AoE stun), Cultivation (grow herbs), Plainsrunning (move speed), Endurance (5% HP + 1% hit)
//   Troll:    Berserking (10% haste 10s), Rapid Regeneration (50% HP regen), Beast Slaying (5% beast dmg), Regen (10% in combat)
export const recommendedRace = {
  alliance: {
    // Warrior: Human Will to Survive + Sword 2% crit for DPS; Human stun remove for tank too
    warrior:  { default: "human",    tank: "human",     dps: "nightelf" },   // NE Elune's Light 10% crit burst; Human stun break for tank
    // Paladin: Human Sword 2% crit + Will to Survive; Dwarf Stoneform for tank
    paladin:  { default: "human",    tank: "dwarf",     healer: "human" },   // Dwarf Stoneform poison/disease cleanse for tank
    // Hunter: NE Elune's Light 10% crit burst is huge; Dwarf Stoneform for PvP survivability
    hunter:   { default: "nightelf", dps: "nightelf" },                      // Elune's Light + Shadowmeld for traps
    // Rogue: NE Elune's Light 10% crit + Shadowmeld double stealth; Human Perception + Sword 2% crit
    rogue:    { default: "nightelf", dps: "nightelf" },                      // Elune's Light crit burst + Shadowmeld; Human close 2nd
    // Priest: Dwarf Chastise + Desperate Prayer + Stoneform for healer; Gnome Eureka for Shadow
    priest:   { default: "dwarf",    healer: "dwarf",   dps: "gnome" },      // Gnome Eureka 10% dmg on next 3 spells
    // Shaman: Dwarf Stoneform great for tank/healer survivability; Dwarf only option anyway
    shaman:   { default: "dwarf",    tank: "dwarf",     healer: "dwarf", dps: "dwarf" },
    // Mage: Gnome Eureka! (10% dmg next 3 spells) + Expansive Mind 5% mana + Escape Artist
    mage:     { default: "gnome",    dps: "gnome" },                         // Eureka! is insane for mage burst
    // Warlock: Gnome Eureka! + Expansive Mind; strong for all warlock specs
    warlock:  { default: "gnome",    dps: "gnome" },                         // Eureka! + Escape Artist
    // Druid: Night Elf only option on Alliance
    druid:    { default: "nightelf", tank: "nightelf",  healer: "nightelf", dps: "nightelf" },
  },
  horde: {
    // Warrior: Orc Blood Fury 10% AP + Hardiness 20% stun red for DPS; Tauren 5% HP + War Stomp + 1% hit for tank
    warrior:  { default: "orc",      tank: "tauren",    dps: "orc" },
    // Paladin: Undead WotF + Touch of the Grave for Ret; Tauren War Stomp + 5% HP for Prot
    paladin:  { default: "undead",   tank: "tauren",    healer: "undead",  dps: "undead" },
    // Hunter: Orc Blood Fury 10% AP; Troll Berserking 10% haste + Rapid Regen
    hunter:   { default: "orc",      dps: "troll" },                         // Troll haste for ranged; Orc raw AP
    // Rogue: Orc Hardiness 20% stun red + Blood Fury; Undead WotF for PvP
    rogue:    { default: "orc",      dps: "orc" },                           // Hardiness + Blood Fury; Undead close 2nd
    // Priest: Troll Berserking 10% haste for healer throughput; Undead WotF + Shadow for DPS
    priest:   { default: "undead",   healer: "troll",   dps: "undead" },
    // Shaman: Orc Blood Fury 10% AP+SP; Tauren War Stomp + HP for tank; Troll haste for healer
    shaman:   { default: "orc",      tank: "tauren",    healer: "troll",   dps: "orc" },
    // Mage: Troll Berserking 10% haste for casting; Orc Blood Fury 10% SP; Undead WotF PvP
    mage:     { default: "troll",    dps: "troll" },                         // Berserking haste + Rapid Regen; Undead for PvP
    // Warlock: Orc Blood Fury 10% SP + Shatter Curse (ironic anti-lock racial); Undead WotF
    warlock:  { default: "orc",      dps: "orc" },                           // Blood Fury SP; Undead for PvP
    // Druid: Tauren only option on Horde
    druid:    { default: "tauren",   tank: "tauren",    healer: "tauren",  dps: "tauren" },
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
