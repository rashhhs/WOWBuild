import { Timestamp } from 'src/utils/types'

export enum Expansion {
  Vanilla = 'van',
  BurningCrusade = 'tbc',
  WrathOfTheLichKing = 'wlk',
  Cataclysm = 'cat',
  MistOfPandaria = 'mop',
  WarlordsOfDraenor = 'wod',
  Legion = 'leg',
  BattleForAzeroth = 'bfa',
  Shadowlands = 'sha',
}

export enum Specialitzation {
  Affliction = 'affliction',
  Arcane = 'arcane',
  Arms = 'arms',
  Assassination = 'assassination',
  Balance = 'balance',
  BeastMastery = 'beast_mastery',
  Blood = 'blood',
  Brewmaster = 'brewmaster',
  Demonology = 'demonology',
  Destruction = 'destruction',
  Discipline = 'discipline',
  Enhancement = 'enhancement',
  Elemental = 'elemental',
  Feral = 'feral',
  Fire = 'fire',
  FrostDeathKnight = 'frost_death_knight',
  FrostMage = 'frost_mage',
  Fury = 'fury',
  Guardian = 'guardian',
  Havoc = 'havoc',
  HolyPaladin = 'holy_paladin',
  HolyPriest = 'holy_priest',
  Marksmanship = 'marksmanship',
  Mistweaver = 'mistweaver',
  Outlaw = 'outlaw',
  ProtectionPaladin = 'protection_paladin',
  ProtectionWarrior = 'protection_warrior',
  RestorationDruid = 'restorarion_druid',
  RestorationShaman = 'restoration_shaman',
  Retribution = 'retribution',
  Shadow = 'shadow',
  Subtlety = 'sublety',
  Survival = 'survival',
  Unholy = 'unholy',
  Vengeance = 'vengeance',
  Windwalker = 'windwalker',
}

export type Build = {
  id: string
  name: string
  lastUpdate: Timestamp
  expansion: string
  spec: string
}

export type BuildsContextProps = {
  builds: Build[] | null
}
