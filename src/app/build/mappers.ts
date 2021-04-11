import {
  BackendBuild,
  BackendBuildDetail,
  BackendClassSpecificBuild,
  BackendConvenantLegendary,
  BackendSoulbinds,
  Build,
  BuildDetail,
  ClassSpecificBuild,
  Conduit,
  CovenantLegendary,
  Skill,
  SkillPvp,
  Soulbinds,
} from './types'

import {
  Ability as FrostAbility,
  Talent as FrostTalent,
  PvpTalent as FrostPvpTalent,
} from 'src/app/core/config/classes/deathKnight/frost/types'
import { Runeforging } from 'src/app/core/config/classes/deathKnight/types'
import {
  ClassSpecifics,
  Covenant,
  Legendary,
  Specialization,
} from 'src/app/core/config/classes/types'
import { Expansion, Weapon } from 'src/app/core/config/types'
import {
  SpecialitzationIcons,
  LARGE_ICONS_URL,
  ExpansionIcon,
  BASE_IMAGE_URL,
  EXPANSION_FLAGS_URL,
} from 'src/utils/Images'
import { inEnum } from 'src/utils/enum'

const getSpecIcon = (build: BackendBuild): string => {
  //TODO (R) Add Placeholder
  let imageName = ''
  switch (build.spec) {
    case Specialization.Affliction:
      imageName = SpecialitzationIcons.Affliction
      break
    case Specialization.Arcane:
      imageName = SpecialitzationIcons.Arcane
      break
    case Specialization.Arms:
      imageName = SpecialitzationIcons.Arms
      break
    case Specialization.Assassination:
      imageName = SpecialitzationIcons.Assassination
      break
    case Specialization.Balance:
      imageName = SpecialitzationIcons.Balance
      break
    case Specialization.BeastMastery:
      imageName = SpecialitzationIcons.BeastMastery
      break
    case Specialization.Blood:
      imageName = SpecialitzationIcons.Blood
      break
    case Specialization.Brewmaster:
      imageName = SpecialitzationIcons.Brewmaster
      break
    case Specialization.Demonology:
      //TODO (R): Find the icon
      imageName = SpecialitzationIcons.Demonology
      break
    case Specialization.Destruction:
      imageName = SpecialitzationIcons.Destruction
      break
    case Specialization.Discipline:
      imageName = SpecialitzationIcons.Discipline
      break
    case Specialization.Elemental:
      imageName = SpecialitzationIcons.Elemental
      break
    case Specialization.Enhancement:
      imageName = SpecialitzationIcons.Enhancement
      break
    case Specialization.Feral:
      imageName = SpecialitzationIcons.Feral
      break
    case Specialization.Fire:
      imageName = SpecialitzationIcons.Fire
      break
    case Specialization.FrostDeathKnight:
      imageName = SpecialitzationIcons.FrostDeathKnight
      break
    case Specialization.FrostMage:
      imageName = SpecialitzationIcons.FrostMage
      break
    case Specialization.Fury:
      imageName = SpecialitzationIcons.Fury
      break
    case Specialization.Guardian:
      imageName = SpecialitzationIcons.Guardian
      break
    case Specialization.Havoc:
      imageName = SpecialitzationIcons.Havoc
      break
    case Specialization.HolyPaladin:
      imageName = SpecialitzationIcons.HolyPaladin
      break
    case Specialization.HolyPriest:
      imageName = SpecialitzationIcons.HolyPriest
      break
    case Specialization.Marksmanship:
      imageName = SpecialitzationIcons.Markmanship
      break
    case Specialization.Mistweaver:
      imageName = SpecialitzationIcons.Mistweaver
      break
    case Specialization.Outlaw:
      imageName = SpecialitzationIcons.Outlaw
      break
    case Specialization.ProtectionPaladin:
      imageName = SpecialitzationIcons.ProtectionPaladin
      break
    case Specialization.ProtectionWarrior:
      imageName = SpecialitzationIcons.ProtectionWarrior
      break
    case Specialization.RestorationDruid:
      imageName = SpecialitzationIcons.RestorationDruida
      break
    case Specialization.RestorationShaman:
      imageName = SpecialitzationIcons.RestorationShaman
      break
    case Specialization.Retribution:
      imageName = SpecialitzationIcons.Retribution
      break
    case Specialization.Shadow:
      imageName = SpecialitzationIcons.Shadow
      break
    case Specialization.Subtlety:
      imageName = SpecialitzationIcons.Subtlety
      break
    case Specialization.Survival:
    //TODO (R): Find the icon
    case Specialization.Vengeance:
      imageName = SpecialitzationIcons.Vengeance
      break
    case Specialization.Windwalker:
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
    soulbinds: mapSoulbinds(data.soulbinds),
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

export const mapCovenantLegendary = (value: BackendConvenantLegendary): CovenantLegendary => {
  return {
    covenant: {
      utility: value.covenant.utility as Covenant,
      class: value.covenant.class as Covenant,
    },
    legendary: value.legendary as Legendary,
  }
}

export const mapSoulbinds = (values: BackendSoulbinds): Soulbinds => {
  return {
    ...values,
    values: values.values as Conduit[],
  }
}

const isFrostTalent = (values: string[]) => inEnum(FrostTalent, values[0])

const isFrostAbility = (values: string[]) => inEnum(FrostAbility, values[0])

const isFrostPvpTalent = (values: string[]) => inEnum(FrostPvpTalent, values[0])
