import React, { createContext, ReactNode, useEffect, useState } from 'react'

import { mapSpell } from 'src/app/core/config/mappers'
import { Spell, SpellsContextProps } from 'src/app/core/config/types'
import * as avalanche from 'src/assets/mockups/Spells/avalanche.json'
import * as coldHeart from 'src/assets/mockups/Spells/cold-heart.json'
import * as everfrost from 'src/assets/mockups/Spells/everfrost.json'
import * as gatheringStorm from 'src/assets/mockups/Spells/gathering-storm.json'
import * as icecap from 'src/assets/mockups/Spells/icecap.json'
import * as icyTalons from 'src/assets/mockups/Spells/icy-talons.json'
import * as inexorableAssault from 'src/assets/mockups/Spells/inexorable-assault.json'
import * as killingMachine from 'src/assets/mockups/Spells/killing-machine.json'
import * as mightFrozenWastes from 'src/assets/mockups/Spells/might-of-the-frozen-wastes.json'
import * as murderousEfficiency from 'src/assets/mockups/Spells/murderous-efficiency.json'
import * as obliteration from 'src/assets/mockups/Spells/obliteration.json'
import * as rime from 'src/assets/mockups/Spells/rime.json'
import * as runicEmpowerment from 'src/assets/mockups/Spells/runic-empowerment.json'
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
      [avalanche.id]: mapSpell(avalanche),
      [coldHeart.id]: mapSpell(coldHeart),
      [everfrost.id]: mapSpell(everfrost),
      [gatheringStorm.id]: mapSpell(gatheringStorm),
      [icecap.id]: mapSpell(icecap),
      [icyTalons.id]: mapSpell(icyTalons),
      [inexorableAssault.id]: mapSpell(inexorableAssault),
      [killingMachine.id]: mapSpell(killingMachine),
      [mightFrozenWastes.id]: mapSpell(mightFrozenWastes),
      [murderousEfficiency.id]: mapSpell(murderousEfficiency),
      [obliteration.id]: mapSpell(obliteration),
      [rime.id]: mapSpell(rime),
      [runicEmpowerment.id]: mapSpell(runicEmpowerment),
    })
  }

  return <SpellsContext.Provider value={{ spells, fetchSpells }}>{children}</SpellsContext.Provider>
}

export default SpellsProvider
