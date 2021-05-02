import { Generic } from 'src/utils/types'

export const mockHook = (children?: Generic) => jest.fn(() => children)

export const mockView = (children?: Generic) => jest.fn

export const MOCK_REACT_NAVIGATION_USE_ROUTE = {
  params: {
    id: 'mockId',
  },
}

export const MOCK_SAFE_AREA_VIEW = { bottom: 0, left: 0, right: 0, top: 20 }
