// WoW Forever (Classic+) class and race data
// All 9 classes available to both factions
// 6 new race/class combos: Human Hunter, Dwarf Shaman, Gnome Priest,
//   Orc Mage, Troll Warlock, Undead Paladin
// 113 new talents, 277 rewritten across 27 trees

export const wowIcon = (name) =>
  `https://wow.zamimg.com/images/wow/icons/large/${name}.jpg`;

export const classes = {
  warrior: {
    name: "Warrior",
    color: "#C79C6E",
    icon: wowIcon("classicon_warrior"),
    art: "https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt0832522d9b547a53/5ee3e474d217327180733d15/WBKV55DJH5K41457037487603.png",
    description: "Arms, Fury, and Protection. Reworked Fury and Prot trees.",
    roles: ["Tank", "Melee DPS"],
  },
  paladin: {
    name: "Paladin",
    color: "#F58CBA",
    icon: wowIcon("classicon_paladin"),
    art: "https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltd4a13696f25f2dee/5ee790ac63a2d9709383091f/B4ZGRYVOJPMG1457037522384.png",
    description: "Holy, Protection, and Retribution. Now available to both factions.",
    roles: ["Tank", "Healer", "Melee DPS"],
  },
  hunter: {
    name: "Hunter",
    color: "#ABD473",
    icon: wowIcon("classicon_hunter"),
    art: "https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blte9b3a54a09ad5261/5ee3e413a9170407eeb4b779/6A2J0J2L8BJZ1457037543035.png",
    description: "Beast Mastery, Marksmanship, and Survival. Humans can now be Hunters.",
    roles: ["Ranged DPS"],
  },
  rogue: {
    name: "Rogue",
    color: "#FFF569",
    icon: wowIcon("classicon_rogue"),
    art: "https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blta8928c12b08cb16e/5ee3e4a4a9170407eeb4b797/8ZSQAA28ZKK01457037509493.png",
    description: "Assassination, Combat, and Subtlety. Stealth and burst from the shadows.",
    roles: ["Melee DPS"],
  },
  priest: {
    name: "Priest",
    color: "#FFFFFF",
    icon: wowIcon("classicon_priest"),
    art: "https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt099018964a6c16a5/5ee78c01e35f99710ac79039/JTJ38GJ85HYS1457037516092.png",
    description: "Discipline, Holy, and Shadow. Gnomes can now be Priests.",
    roles: ["Healer", "Ranged DPS"],
  },
  shaman: {
    name: "Shaman",
    color: "#0070DE",
    icon: wowIcon("classicon_shaman"),
    art: "https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt3449d556e0726126/5ee79283e8f74907ecce029d/AKCSYJTTPW3R1457037502556.png",
    description: "Elemental, Enhancement, and Restoration. Can tank in Forever. Dwarf Shamans bring it to Alliance.",
    roles: ["Tank", "Healer", "Ranged DPS", "Melee DPS"],
  },
  mage: {
    name: "Mage",
    color: "#69CCF0",
    icon: wowIcon("classicon_mage"),
    art: "https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blte2fbb62dd8f59369/6356ffc6f17951383bcfba62/mage-art.png",
    description: "Arcane, Fire, and Frost. Orcs can now be Mages.",
    roles: ["Ranged DPS"],
  },
  warlock: {
    name: "Warlock",
    color: "#9482C9",
    icon: wowIcon("classicon_warlock"),
    art: "https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt5966b0c7ee968577/5ee3e8c2a7c560086afc4009/PFZ6V66EDO9R1457037494021.png",
    description: "Affliction, Demonology, and Destruction. Most reworked class — almost all talents changed.",
    roles: ["Ranged DPS"],
  },
  druid: {
    name: "Druid",
    color: "#FF7D0A",
    icon: wowIcon("classicon_druid"),
    art: "https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltea68e0ee6cea6b57/5ee3e39b18f34d710497c59f/A63L7JLCCRX61457037549861.png",
    description: "Balance, Feral Combat, and Restoration. The ultimate hybrid.",
    roles: ["Tank", "Healer", "Melee DPS", "Ranged DPS"],
  },
};

// WoW Forever professions — 600+ new recipes, camp buffs, Legacy Talents
// S-Tier: Engineering, Alchemy, Enchanting
// A-Tier: Leatherworking, Blacksmithing, Tailoring, Mining, Herbalism
// B-Tier: Skinning
// Healing Potions moved to First Aid
export const professions = {
  mining:         { name: "Mining",         icon: wowIcon("trade_mining"),         type: "Gathering", tier: "A" },
  herbalism:      { name: "Herbalism",      icon: wowIcon("trade_herbalism"),      type: "Gathering", tier: "A", camp: "Incense Candle (Intellect)" },
  skinning:       { name: "Skinning",       icon: wowIcon("inv_misc_pelt_wolf_01"), type: "Gathering", tier: "B" },
  alchemy:        { name: "Alchemy",        icon: wowIcon("trade_alchemy"),        type: "Crafting",  tier: "S", camp: "Combat potions & offensive effects" },
  blacksmithing:  { name: "Blacksmithing",  icon: wowIcon("trade_blacksmithing"),  type: "Crafting",  tier: "A", camp: "Sharpening Wheel (Strength)" },
  leatherworking: { name: "Leatherworking", icon: wowIcon("trade_leatherworking"), type: "Crafting",  tier: "A" },
  tailoring:      { name: "Tailoring",      icon: wowIcon("trade_tailoring"),      type: "Crafting",  tier: "A", camp: "Faction Banner (Spirit)" },
  enchanting:     { name: "Enchanting",     icon: wowIcon("trade_engraving"),      type: "Crafting",  tier: "S" },
  engineering:    { name: "Engineering",    icon: wowIcon("trade_engineering"),    type: "Crafting",  tier: "S", camp: "Repair vendor" },
};

// WoW Forever race/class combos (includes 6 new combos marked with *)
export const raceClassMap = {
  // Alliance
  human: {
    name: "Human",
    faction: "alliance",
    classes: ["warrior", "paladin", "hunter", "rogue", "priest", "mage", "warlock"], // *hunter new
    icon: wowIcon("race_human_male"),
  },
  dwarf: {
    name: "Dwarf",
    faction: "alliance",
    classes: ["warrior", "paladin", "hunter", "rogue", "priest", "shaman"], // *shaman new
    icon: wowIcon("race_dwarf_male"),
  },
  nightelf: {
    name: "Night Elf",
    faction: "alliance",
    classes: ["warrior", "hunter", "rogue", "priest", "druid"],
    icon: wowIcon("race_nightelf_male"),
  },
  gnome: {
    name: "Gnome",
    faction: "alliance",
    classes: ["warrior", "rogue", "priest", "mage", "warlock"], // *priest new
    icon: wowIcon("race_gnome_male"),
  },
  // Horde
  orc: {
    name: "Orc",
    faction: "horde",
    classes: ["warrior", "hunter", "rogue", "shaman", "warlock", "mage"], // *mage new
    icon: wowIcon("race_orc_male"),
  },
  undead: {
    name: "Undead",
    faction: "horde",
    classes: ["warrior", "rogue", "priest", "mage", "warlock", "paladin"], // *paladin new
    icon: wowIcon("race_scourge_male"),
  },
  tauren: {
    name: "Tauren",
    faction: "horde",
    classes: ["warrior", "hunter", "shaman", "druid"],
    icon: wowIcon("race_tauren_male"),
  },
  troll: {
    name: "Troll",
    faction: "horde",
    classes: ["warrior", "hunter", "rogue", "priest", "mage", "shaman", "warlock"], // *warlock new
    icon: wowIcon("race_troll_male"),
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
    // Paladin: Undead only option on Horde — WotF + Touch of the Grave + Cannibalize (HP+Mana)
    paladin:  { default: "undead",   tank: "undead",    healer: "undead",  dps: "undead" },
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

// WoW Forever specs — 27 specs across 9 classes
// Includes reworked talents: Survival melee, Prot Paladin Seal of Fury,
// Enhancement tanking, 113 new talents, 277 rewritten
export const specs = {
  warrior: [
    { key: "arms", name: "Arms", icon: wowIcon("ability_warrior_savageblow"), description: "Melee DPS — burst windows and single-target execution." },
    { key: "fury", name: "Fury", icon: wowIcon("ability_warrior_innerrage"), description: "Melee DPS — dual-wield sustained damage and cleave." },
    { key: "protection", name: "Protection", icon: wowIcon("inv_shield_06"), description: "Tank — shield-based mitigation and threat generation." },
  ],
  paladin: [
    { key: "holy", name: "Holy", icon: wowIcon("spell_holy_holybolt"), description: "Healer — strong single-target and raid healing." },
    { key: "protection", name: "Protection", icon: wowIcon("spell_holy_devotionaura"), description: "Tank — reworked with Seal of Fury for threat." },
    { key: "retribution", name: "Retribution", icon: wowIcon("spell_holy_auraoflight"), description: "Melee DPS — holy power burst and utility." },
  ],
  hunter: [
    { key: "beastmastery", name: "Beast Mastery", icon: wowIcon("ability_hunter_beasttaming"), description: "Ranged DPS — pet-focused with beast synergy." },
    { key: "marksmanship", name: "Marksmanship", icon: wowIcon("ability_marksmanship"), description: "Ranged DPS — precise shots, Lone Wolf option." },
    { key: "survival", name: "Survival", icon: wowIcon("ability_hunter_swiftstrike"), description: "Melee DPS — reworked melee with traps and pet." },
  ],
  rogue: [
    { key: "assassination", name: "Assassination", icon: wowIcon("ability_rogue_eviscerate"), description: "Melee DPS — poisons, Mutilate, and bleeds." },
    { key: "combat", name: "Combat", icon: wowIcon("ability_backstab"), description: "Melee DPS — sustained cleave and Blade Flurry." },
    { key: "subtlety", name: "Subtlety", icon: wowIcon("ability_stealth"), description: "Melee DPS — stealth burst and Shadow Dance." },
  ],
  priest: [
    { key: "discipline", name: "Discipline", icon: wowIcon("spell_holy_wordfortitude"), description: "Healer — shields, Penance, and damage-to-healing." },
    { key: "holy", name: "Holy", icon: wowIcon("spell_holy_guardianspirit"), description: "Healer — throughput healing and raid cooldowns." },
    { key: "shadow", name: "Shadow", icon: wowIcon("spell_shadow_shadowwordpain"), description: "Ranged DPS — DoTs, Shadow Word: Pain, and Mind Blast." },
  ],
  shaman: [
    { key: "elemental", name: "Elemental", icon: wowIcon("spell_nature_lightning"), description: "Ranged DPS — Lava Burst crits and Lightning." },
    { key: "enhancement", name: "Enhancement", icon: wowIcon("spell_nature_lightningshield"), description: "Melee DPS — can tank in Forever, Windfury procs." },
    { key: "restoration", name: "Restoration", icon: wowIcon("spell_nature_magicimmunity"), description: "Healer — Riptide, Chain Heal, and totems." },
  ],
  mage: [
    { key: "arcane", name: "Arcane", icon: wowIcon("spell_holy_magicalsentry"), description: "Ranged DPS — Arcane Blast stacking and mana management." },
    { key: "fire", name: "Fire", icon: wowIcon("spell_fire_firebolt02"), description: "Ranged DPS — Pyroblast crits and burst combos." },
    { key: "frost", name: "Frost", icon: wowIcon("spell_frost_frostbolt02"), description: "Ranged DPS — AoE control, Blizzard, and shatter combos." },
  ],
  warlock: [
    { key: "affliction", name: "Affliction", icon: wowIcon("spell_shadow_deathcoil"), description: "Ranged DPS — DoTs, drain, and multi-target pressure." },
    { key: "demonology", name: "Demonology", icon: wowIcon("spell_shadow_metamorphosis"), description: "Ranged DPS — empowered demons and pet synergy." },
    { key: "destruction", name: "Destruction", icon: wowIcon("spell_shadow_rainoffire"), description: "Ranged DPS — direct burst damage and Shadow Bolt." },
  ],
  druid: [
    { key: "balance", name: "Balance", icon: wowIcon("spell_nature_starfall"), description: "Ranged DPS — Eclipse procs, Starfire and Wrath." },
    { key: "feral", name: "Feral", icon: wowIcon("ability_racial_bearform"), description: "Melee DPS or Tank — stealth, bleeds, Bear Form tanking." },
    { key: "restoration", name: "Restoration", icon: wowIcon("spell_nature_healingtouch"), description: "Healer — HoTs, Wild Growth, and Swiftmend." },
  ],
};

// Optimal profession pairings per class in WoW Forever
// Engineering is S-tier for everyone (gadgets, teleports, PvP tools, camp repair)
// Blacksmithing now crafts Mail + Plate
export const classProfSynergy = {
  warrior: ["engineering", "mining"],        // Engi gadgets + camp repair; BS/Mining close 2nd for plate + Strength camp buff
  paladin: ["engineering", "mining"],        // Engi gadgets; BS/Mining also strong for plate
  hunter:  ["engineering", "mining"],        // Engi is king for hunters (gadgets + ammo); LW/Skinning for gear
  rogue:   ["engineering", "mining"],        // Grenades, gadgets, PvP tools — engi is essential for rogues
  priest:  ["tailoring", "enchanting"],      // Both S/A-tier, self-enchant, Spirit camp buff, no gathering needed
  shaman:  ["engineering", "mining"],        // Engi gadgets; LW/Skinning for gear if prefer crafting armor
  mage:    ["tailoring", "enchanting"],      // Enchanting S-tier, Tailoring camp Spirit buff, self-sufficient
  warlock: ["tailoring", "enchanting"],      // Same as mage; Alchemy/Herb also strong (Int camp buff)
  druid:   ["alchemy", "herbalism"],         // Alchemy S-tier, Herb camp Int buff, self-sufficient farming
};

// What armor type each class wears and the craft prof that makes it
export const classArmorType = {
  warrior:  { armor: "plate",   craftProf: "blacksmithing" },
  paladin:  { armor: "plate",   craftProf: "blacksmithing" },
  hunter:   { armor: "mail",    craftProf: "leatherworking" },
  rogue:    { armor: "leather", craftProf: "leatherworking" },
  priest:   { armor: "cloth",   craftProf: "tailoring" },
  shaman:   { armor: "mail",    craftProf: "leatherworking" },
  mage:     { armor: "cloth",   craftProf: "tailoring" },
  warlock:  { armor: "cloth",   craftProf: "tailoring" },
  druid:    { armor: "leather", craftProf: "leatherworking" },
};

// Penalties for picking a craft prof that doesn't match your armor type
export const armorProfPenalties = {
  plate:   { tailoring: -4, leatherworking: -2 },
  mail:    { tailoring: -4, blacksmithing: -2 },
  leather: { tailoring: -3, blacksmithing: -4 },
  cloth:   { blacksmithing: -5, leatherworking: -4 },
};

// Physical vs caster vs hybrid — drives profession affinity
export const classPowerType = {
  warrior: "physical", paladin: "physical", hunter: "physical",
  rogue: "physical", priest: "caster", shaman: "hybrid",
  mage: "caster", warlock: "caster", druid: "hybrid",
};
