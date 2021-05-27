import {
  BackendSpell,
  BackendSpellExtraInfo,
  Spell,
  SpellExtraInfo,
} from 'src/app/core/config/types'
import { BASE_IMAGE_URL, LARGE_ICONS_URL } from 'src/utils/Images'

const mapSpellExtra = (extraInfo?: BackendSpellExtraInfo): SpellExtraInfo | null => {
  return extraInfo
    ? {
        title: extraInfo?.title ?? null,
        image: extraInfo?.image ? `${BASE_IMAGE_URL}${LARGE_ICONS_URL}${extraInfo.image}` : null,
        description: extraInfo.description,
      }
    : null
}

export const mapSpell = (backendSpell: BackendSpell): Spell => {
  return {
    id: backendSpell.id,
    title: backendSpell.title,
    image: `${BASE_IMAGE_URL}${LARGE_ICONS_URL}${backendSpell.image}`,
    type: backendSpell?.type ?? null,
    type2: backendSpell?.type2 ?? null,
    cost: backendSpell?.cost ?? null,
    cast: backendSpell?.cast ?? null,
    yards: backendSpell?.yards ?? null,
    charges: backendSpell?.charges ?? null,
    cooldown: backendSpell?.cooldown ?? null,
    rclass: backendSpell?.rclass ?? null,
    rlevel: backendSpell?.rlevel ?? null,
    description: backendSpell.description,
    extraInfo: mapSpellExtra(backendSpell.extraInfo),
  }
}
