import { useContext } from 'react'

import { SpellsContext } from 'src/app/core/contexts/Spells'

export const useSpell = () => useContext(SpellsContext)

export const useSpells = () => {
  const { spells } = useSpell()

  return spells
}
