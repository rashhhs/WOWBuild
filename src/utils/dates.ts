import { Timestamp } from './types'

export const dateToString = (date: Timestamp) => {
  if (date.toString().length < 13) {
    return unixToDate(date).toLocaleDateString()
  }
  return new Date(date).toLocaleDateString()
}

export const unixToDate = (date: Timestamp) => {
  if (date.toString().length < 13) {
    return new Date(date * 1000)
  }
  return new Date(date)
}
