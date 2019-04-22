export const classes = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard'
]

export const races = [
  'Hill Dwarf',
  'Mountain Dwarf',
  'High Elf',
  'Wood Elf',
  'Dark Elf (Drow)',
  'Lightfoot Halfling',
  'Stout Halfling',
  'Human',
  'Dragonborn',
  'Forest Gnome',
  'Rock Gnome',
  'Half-Elf',
  'Half-Orc',
  'Tiefling'
]

export const backgrounds = [
  'Acolyte',
  'Charlatan',
  'Criminal',
  'Entertainer',
  'Folk Hero',
  'Guild Artisan',
  'Hermit',
  'Nobel',
  'Outlander',
  'Sage',
  'Sailor',
  'Soldier',
  'Urchin'
]

export const alignment = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'Neutral',
  'Chaotic Neutral',
  'Lawful Evil',
  'Neutral Evil',
  'Chaotic Evil'
]

export const attributes = {
  attr_str: { name: 'Strength' },
  attr_dex: { name: 'Dexterity' },
  attr_con: { name: 'Constitution' },
  attr_int: { name: 'Intelligence' },
  attr_wis: { name: 'Wisdom' },
  attr_cha: { name: 'Charisma' }
}

export const skills = [
  {
    name: 'Acrobatics',
    attribute: 1 //Dexterity
  },
  {
    name: 'Animal Handling',
    attribute: 4 //Wisdom
  },
  {
    name: 'Arcana',
    attribute: 3 //Intelligence
  },
  {
    name: 'Athletics',
    attribute: 0 //Strength
  },
  {
    name: 'Deception',
    attribute: 5 //Charisma
  },
  {
    name: 'History',
    attribute: 3 //Intelligence
  },
  {
    name: 'Insight',
    attribute: 4 //Wisdom
  },
  {
    name: 'Intimidation',
    attribute: 5 //Charisma
  },
  {
    name: 'Investigation',
    attribute: 3 //Intelligence
  },
  {
    name: 'Medicine',
    attribute: 4 //Wisdom
  },
  {
    name: 'Nature',
    attribute: 3 //Intelligence
  },
  {
    name: 'Perception',
    attribute: 4 //Wisdom
  },
  {
    name: 'Performance',
    attribute: 5 //Charisma
  },
  {
    name: 'Persuasion',
    attribute: 5 //Charisma
  },
  {
    name: 'Religion',
    attribute: 3 //Intelligence
  },
  {
    name: 'Sleight of Hand',
    attribute: 1 //Dexterity
  },
  {
    name: 'Stealth',
    attribute: 1 //Dexterity
  },
  {
    name: 'Survival',
    attribute: 4 //Wisdom
  }
]

export const currencyDenominations = [
  'copper_pieces',
  'silver_pieces',
  'electrum_pieces',
  'gold_pieces',
  'platinum_pieces'
]

export const getAttribute = (index) => attributes[Object.keys(attributes)[index]].name
