import { Context, createContext } from 'react'
import { Names } from './enums'

export interface i18nTypes {
  [key: string]: string
}
export type i18nValueType = Record<string, Record<string, string>>
export const i18n: i18nValueType = {
  en: {
    hello: 'Hello',
    [Names.Dedoo]: 'Dee-Do',
    [Names.Baitarn]: 'Bai-Tarn',
    [Names.Token]: 'Token',
    [Names.Titan]: 'Titan',
  },
  th: {
    hello: 'สวัสดี',
    [Names.Dedoo]: 'ดีโด้',
    [Names.Baitarn]: 'ใบตาล',
    [Names.Token]: 'โคเค้น',
    [Names.Titan]: 'ไทท่าน',
  },
}
export const i18nContext: Context<Record<string, string>> = createContext(
  i18n.th
)
