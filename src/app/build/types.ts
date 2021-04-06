import {
  Ability as FrostAbility,
  PvpTalent as FrostPvpTalent,
  Talent as FrostTalent,
} from '../core/config/classes/deathKnight/frost/types'

import { Runeforging } from 'src/app/core/config/classes/deathKnight/types'
import { ClassSpecifics } from 'src/app/core/config/classes/types'
import { Weapon } from 'src/app/core/config/types'
import { Timestamp } from 'src/utils/types'

export type BackendBuild = {
  id: string
  name: string
  lastUpdate: Timestamp
  expansion: string
  spec: string
}

export type Build = {
  id: string
  name: string
  lastUpdate: Timestamp
  expansion: string
  expansionImage: string
  spec: string
  specImage: string
}

export type BackendBuildDetail = {
  name: string
  spec: string
  profile: BuildProfile
  classSpecifics: BackendClassSpecificBuild[]
  mechanics: BackendMechanics
  skills: BackendSkills
  talents: BackendTalents
  covenantLegendary: CovenantLegendary
  soulbinds: Soulbinds
}

export type BuildDetail = {
  id: string
  name: string
  spec: string
  profile: BuildProfile
  classSpecifics: ClassSpecificBuild[]
  mechanics: Mechanics
  skills: Skills
  talents: Talents
  covenantLegendary: CovenantLegendary
  soulbinds: Soulbinds
}

export type BuildProfile = {
  name: string
  race: string
  reign: string
  secondaryStats: SecondaryStats
}

export type SecondaryStats = {
  order: string[]
  mastery: string | null
  haste: string | null
  versatility: string | null
  critic: string | null
}

export type BackendClassSpecificBuild = {
  type: string
  value: string | string[]
}

export type ClassSpecificBuild = {
  type: ClassSpecifics
  value: Weapon[] | Runeforging[]
}

export type BackendSkills = {
  values: string[]
  extra: ExtraContent[]
}

export type BackendMechanics = BackendSkills

export type BackendTalents = BackendSkills & {
  pvp: string[]
}

export type Skills = {
  values: Skill[]
  extra: ExtraContent[]
}

export type Mechanics = Skills

export type Talents = Skills & {
  pvp: SkillPvp[]
}

export type Skill = FrostTalent | FrostAbility

export type SkillPvp = FrostPvpTalent

export type ExtraContent = {
  title: string
  content: string
}

//TODO (R): Type Legendaries with powers etc..
export type CovenantLegendary = {
  covenant: Covenant
  legendary: string
}

export type Covenant = {
  utility: string
  class: string
}

//TODO (R): Type Soulbinds
export type Soulbinds = {
  who: string
  values: string[]
}

export type BuildsContextProps = {
  builds: Build[] | null
  build: BuildDetail | null

  fetchBuildDetail: (id: string) => void
  clearBuildDetail: () => void
}
