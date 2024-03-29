import React, { createContext, ReactNode, useEffect, useState } from 'react'

import { mapSpell } from 'src/app/core/config/mappers'
import { Spell, SpellsContextProps } from 'src/app/core/config/types'
import {
  abominationLimb,
  avalanche,
  breathSindragosa,
  chillStreak,
  coldHeart,
  deathchill,
  deathsDue,
  empowerRune,
  everfrost,
  frostscythe,
  frostStrike,
  frostwyrmFury,
  gatheringStorm,
  howlingBlast,
  hypothermicPresence,
  icecap,
  icyTalons,
  inexorableAssault,
  killingMachine,
  mightFrozenWastes,
  murderousEfficiency,
  necroticAura,
  obliterate,
  obliteration,
  pillarFrost,
  remorselessWinter,
  rime,
  runicEmpowerment,
  swarmingMist,
} from 'src/assets/mockups/Spells/spells'
import { Generic } from 'src/utils/types'

export const SpellsContext = createContext<Partial<SpellsContextProps>>({})

export const SpellsProvider = ({ children }: { children: ReactNode }) => {
  const [spells, setSpells] = useState<Generic<string, Spell> | null>(null)

  useEffect(() => {
    fetchSpells()
  }, [])

  //TODO: Fetch from Backend
  const fetchSpells = () => {
    setSpells({
      [abominationLimb.id]: mapSpell(abominationLimb),
      [avalanche.id]: mapSpell(avalanche),
      [breathSindragosa.id]: mapSpell(breathSindragosa),
      [coldHeart.id]: mapSpell(coldHeart),
      [chillStreak.id]: mapSpell(chillStreak),
      [deathchill.id]: mapSpell(deathchill),
      [deathsDue.id]: mapSpell(deathsDue),
      [empowerRune.id]: mapSpell(empowerRune),
      [everfrost.id]: mapSpell(everfrost),
      [frostStrike.id]: mapSpell(frostStrike),
      [frostscythe.id]: mapSpell(frostscythe),
      [frostwyrmFury.id]: mapSpell(frostwyrmFury),
      [gatheringStorm.id]: mapSpell(gatheringStorm),
      [howlingBlast.id]: mapSpell(howlingBlast),
      [hypothermicPresence.id]: mapSpell(hypothermicPresence),
      [icecap.id]: mapSpell(icecap),
      [icyTalons.id]: mapSpell(icyTalons),
      [inexorableAssault.id]: mapSpell(inexorableAssault),
      [killingMachine.id]: mapSpell(killingMachine),
      [mightFrozenWastes.id]: mapSpell(mightFrozenWastes),
      [murderousEfficiency.id]: mapSpell(murderousEfficiency),
      [necroticAura.id]: mapSpell(necroticAura),
      [obliterate.id]: mapSpell(obliterate),
      [obliteration.id]: mapSpell(obliteration),
      [pillarFrost.id]: mapSpell(pillarFrost),
      [remorselessWinter.id]: mapSpell(remorselessWinter),
      [rime.id]: mapSpell(rime),
      [runicEmpowerment.id]: mapSpell(runicEmpowerment),
      [swarmingMist.id]: mapSpell(swarmingMist),
    })
  }

  return <SpellsContext.Provider value={{ spells, fetchSpells }}>{children}</SpellsContext.Provider>
}

export default SpellsProvider
