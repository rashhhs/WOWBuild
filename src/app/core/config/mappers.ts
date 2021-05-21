import { BackendSpell, Spell } from 'src/app/core/config/types'

export const mapSpell = (backendSpell: BackendSpell): Spell => {
  return {
    id: backendSpell.id,
    title: backendSpell.title,
    image: backendSpell.image,
    type: backendSpell?.type ?? null,
    type2: backendSpell?.type2 ?? null,
    cost: backendSpell?.cost ?? null,
    yards: backendSpell?.yards ?? null,
    charges: backendSpell?.charges ?? null,
    cooldown: backendSpell?.cooldown ?? null,
    rclass: backendSpell?.rclass ?? null,
    rlevel: backendSpell?.rlevel ?? null,
    description: backendSpell.description,
    extraInfo: backendSpell?.extraInfo ?? null,
  }
}
