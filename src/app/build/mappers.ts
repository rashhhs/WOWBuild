import {
  BackendBuild,
  BackendBuildDetail,
  BackendClassSpecificBuild,
  Build,
  BuildDetail,
  ClassSpecificBuild,
  Covenant,
  CovenantLegendary,
  Skill,
  SkillPvp,
} from './types'

import {
  Ability as FrostAbility,
  Talent as FrostTalent,
  PvpTalent as FrostPvpTalent,
} from 'src/app/core/config/classes/deathKnight/frost/types'
import { Runeforging } from 'src/app/core/config/classes/deathKnight/types'
import { ClassSpecifics, Specialitzation } from 'src/app/core/config/classes/types'
import { Expansion, Weapon } from 'src/app/core/config/types'
import {
  SpecialitzationIcons,
  LARGE_ICONS_URL,
  ExpansionIcon,
  BASE_IMAGE_URL,
  EXPANSION_FLAGS_URL,
} from 'src/utils/Images'
import { inEnum } from 'src/utils/enum'
import { Generic } from 'src/utils/types'

const getSpecIcon = (build: BackendBuild): string => {
  //TODO (R) Add Placeholder
  let imageName = ''
  switch (build.spec) {
    case Specialitzation.Affliction:
      imageName = SpecialitzationIcons.Affliction
      break
    case Specialitzation.Arcane:
      imageName = SpecialitzationIcons.Arcane
      break
    case Specialitzation.Arms:
      imageName = SpecialitzationIcons.Arms
      break
    case Specialitzation.Assassination:
      imageName = SpecialitzationIcons.Assassination
      break
    case Specialitzation.Balance:
      imageName = SpecialitzationIcons.Balance
      break
    case Specialitzation.BeastMastery:
      imageName = SpecialitzationIcons.BeastMastery
      break
    case Specialitzation.Blood:
      imageName = SpecialitzationIcons.Blood
      break
    case Specialitzation.Brewmaster:
      imageName = SpecialitzationIcons.Brewmaster
      break
    case Specialitzation.Demonology:
      //TODO (R): Find the icon
      imageName = SpecialitzationIcons.Demonology
      break
    case Specialitzation.Destruction:
      imageName = SpecialitzationIcons.Destruction
      break
    case Specialitzation.Discipline:
      imageName = SpecialitzationIcons.Discipline
      break
    case Specialitzation.Elemental:
      imageName = SpecialitzationIcons.Elemental
      break
    case Specialitzation.Enhancement:
      imageName = SpecialitzationIcons.Enhancement
      break
    case Specialitzation.Feral:
      imageName = SpecialitzationIcons.Feral
      break
    case Specialitzation.Fire:
      imageName = SpecialitzationIcons.Fire
      break
    case Specialitzation.FrostDeathKnight:
      imageName = SpecialitzationIcons.FrostDeathKnight
      break
    case Specialitzation.FrostMage:
      imageName = SpecialitzationIcons.FrostMage
      break
    case Specialitzation.Fury:
      imageName = SpecialitzationIcons.Fury
      break
    case Specialitzation.Guardian:
      imageName = SpecialitzationIcons.Guardian
      break
    case Specialitzation.Havoc:
      imageName = SpecialitzationIcons.Havoc
      break
    case Specialitzation.HolyPaladin:
      imageName = SpecialitzationIcons.HolyPaladin
      break
    case Specialitzation.HolyPriest:
      imageName = SpecialitzationIcons.HolyPriest
      break
    case Specialitzation.Marksmanship:
      imageName = SpecialitzationIcons.Markmanship
      break
    case Specialitzation.Mistweaver:
      imageName = SpecialitzationIcons.Mistweaver
      break
    case Specialitzation.Outlaw:
      imageName = SpecialitzationIcons.Outlaw
      break
    case Specialitzation.ProtectionPaladin:
      imageName = SpecialitzationIcons.ProtectionPaladin
      break
    case Specialitzation.ProtectionWarrior:
      imageName = SpecialitzationIcons.ProtectionWarrior
      break
    case Specialitzation.RestorationDruid:
      imageName = SpecialitzationIcons.RestorationDruida
      break
    case Specialitzation.RestorationShaman:
      imageName = SpecialitzationIcons.RestorationShaman
      break
    case Specialitzation.Retribution:
      imageName = SpecialitzationIcons.Retribution
      break
    case Specialitzation.Shadow:
      imageName = SpecialitzationIcons.Shadow
      break
    case Specialitzation.Subtlety:
      imageName = SpecialitzationIcons.Subtlety
      break
    case Specialitzation.Survival:
    //TODO (R): Find the icon
    case Specialitzation.Vengeance:
      imageName = SpecialitzationIcons.Vengeance
      break
    case Specialitzation.Windwalker:
      imageName = SpecialitzationIcons.Windwalker
      break
  }
  return `${BASE_IMAGE_URL}${LARGE_ICONS_URL}${imageName}`
}

const getExpansionImage = (build: BackendBuild): string => {
  let iconName = ''
  switch (build.expansion) {
    case Expansion.BurningCrusade:
      iconName = ExpansionIcon.BurningCrusade
      break
    case Expansion.WrathOfTheLichKing:
      iconName = ExpansionIcon.WrathOfTheLichKing
      break
    case Expansion.Cataclysm:
      iconName = ExpansionIcon.Cataclysm
      break
    case Expansion.MistOfPandaria:
      iconName = ExpansionIcon.MistOfPandaria
      break
    case Expansion.WarlordsOfDraenor:
      iconName = ExpansionIcon.WarlordsOfDraenor
      break
    case Expansion.Legion:
      iconName = ExpansionIcon.Legion
      break
    case Expansion.BattleForAzeroth:
      iconName = ExpansionIcon.BattleForAzeroth
      break
    case Expansion.Shadowlands:
      iconName = ExpansionIcon.Shadowlands
      break
  }
  return `${BASE_IMAGE_URL}${EXPANSION_FLAGS_URL}${iconName}`
}

export const mapBuilds = (data: BackendBuild[]): Build[] => {
  return data.map(build => {
    return {
      ...build,
      specImage: getSpecIcon(build),
      expansionImage: getExpansionImage(build),
    }
  })
}

export const mapBuildDetail = (id: string, data: BackendBuildDetail): BuildDetail => {
  return {
    ...data,
    id: id,
    classSpecifics: mapClassSpecifics(data.classSpecifics),
    mechanics: {
      ...data.mechanics,
      values: mapSkill(data.mechanics.values),
    },
    skills: {
      ...data.skills,
      values: mapSkill(data.skills.values),
    },
    talents: {
      ...data.talents,
      values: mapSkill(data.talents.values),
      pvp: mapPvpTalent(data.talents.pvp),
    },
    covenantLegendary: mapCovenantLegendary(data.covenantLegendary),
  }
}

//TODO (R): Take a look on the value property when the solution will be more complex, because maybe cannot be handle
//TODO (R): Finish with other classes
export const mapClassSpecifics = (data: BackendClassSpecificBuild[]): ClassSpecificBuild[] => {
  return data.map(b => {
    let value

    switch (b.type) {
      case ClassSpecifics.Weapon:
        value = b.value as Weapon[]
        break
      case ClassSpecifics.Runeforge:
        value = b.value as Runeforging[]
        break
      default:
        value = b.value as Weapon[]
        break
    }

    return {
      type: b.type as ClassSpecifics,
      value: value,
    }
  })
}

//TODO (R): Finish with other classes
export const mapSkill = (values: string[]): Skill[] => {
  if (isFrostAbility(values) || isFrostTalent(values)) {
    return values as Skill[]
  }

  return []
}

//TODO (R): Finish with other classes
export const mapPvpTalent = (values: string[]): SkillPvp[] => {
  return isFrostPvpTalent(values) ? (values as SkillPvp[]) : []
}

//TODO (R): Finish with real types for legendaries & covenants not strings
export const mapCovenantLegendary = (value: CovenantLegendary): CovenantLegendary => {
  return value
}

const isFrostTalent = (values: string[]) => inEnum(FrostTalent, values[0])

const isFrostAbility = (values: string[]) => inEnum(FrostAbility, values[0])

const isFrostPvpTalent = (values: string[]) => inEnum(FrostPvpTalent, values[0])
