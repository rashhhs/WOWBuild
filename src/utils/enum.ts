import { Generic } from 'src/utils/types'

export const inEnum = (enumObject: Generic, value: string) =>
  Object.values(enumObject).includes(value)
