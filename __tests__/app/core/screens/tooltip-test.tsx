import { render } from '@testing-library/react-native'
import React from 'react'

import * as spell from '../../../__assets__/spell.json'

import { mapSpell } from 'src/app/core/config/mappers'
import Tooltip from 'src/app/core/screens/Tooltip'

describe('Tooltip', () => {
  it('Rows are null or empty if the spell doesnt has the corresponding content', () => {
    const { queryByTestId } = render(<Tooltip spell={mapSpell(spell)} />)

    //the spell has no cast & yards
    expect(queryByTestId('view-container-cast-yards')).toBeNull()

    //spell has cooldown but not charges
    expect(queryByTestId('view-container-charges-cooldown')).toBeTruthy()
    expect(queryByTestId('text-spell-charges')?.props.children).toBe('')
    expect(queryByTestId('text-spell-cooldown')?.props.children).toBe('invented cooldown')
  })
})
