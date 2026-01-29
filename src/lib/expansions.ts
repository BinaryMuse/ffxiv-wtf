export const expansions = {
  arr: {
    name: 'A Realm Reborn',
    shortName: 'ARR',
    color: '#1a1a2e',
  },
  hw: {
    name: 'Heavensward',
    shortName: 'HW',
    color: '#16213e',
  },
  sb: {
    name: 'Stormblood',
    shortName: 'SB',
    color: '#4a1942',
  },
  shb: {
    name: 'Shadowbringers',
    shortName: 'ShB',
    color: '#1a1a2e',
  },
  ew: {
    name: 'Endwalker',
    shortName: 'EW',
    color: '#1e3a5f',
  },
  dt: {
    name: 'Dawntrail',
    shortName: 'DT',
    color: '#2d5016',
  },
} as const;

export type ExpansionKey = keyof typeof expansions;

export const mechanicTypes = {
  tankbuster: {
    name: 'Tankbuster',
    abbrev: 'TB',
    color: '#e74c3c',
    description: 'Heavy single-target damage on tank',
  },
  raidwide: {
    name: 'Raidwide',
    abbrev: 'RW',
    color: '#9b59b6',
    description: 'Party-wide damage',
  },
  stack: {
    name: 'Stack',
    abbrev: 'STK',
    color: '#f39c12',
    description: 'Stack together to split damage',
  },
  spread: {
    name: 'Spread',
    abbrev: 'SPR',
    color: '#3498db',
    description: 'Spread apart to avoid overlapping',
  },
  gaze: {
    name: 'Gaze',
    abbrev: 'GAZ',
    color: '#27ae60',
    description: 'Look away from source',
  },
  knockback: {
    name: 'Knockback',
    abbrev: 'KB',
    color: '#1abc9c',
    description: 'Knockback from source',
  },
  cleave: {
    name: 'Cleave',
    abbrev: 'CLV',
    color: '#e67e22',
    description: 'Frontal or cone attack',
  },
  aoe: {
    name: 'AoE',
    abbrev: 'AOE',
    color: '#95a5a6',
    description: 'Ground indicator to avoid',
  },
  enrage: {
    name: 'Enrage',
    abbrev: 'ENR',
    color: '#c0392b',
    description: 'Wipe if not defeated in time',
  },
} as const;

export type MechanicType = keyof typeof mechanicTypes;
