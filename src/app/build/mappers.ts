import { BackendBuild, Build } from './types'

import { Expansion, Specialitzation } from 'src/app/core/config/types'
import {
  SpecialitzationIcons,
  LARGE_ICONS_URL,
  ExpansionIcon,
  BASE_IMAGE_URL,
  EXPANSION_FLAGS_URL,
} from 'src/utils/Images'

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
