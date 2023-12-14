export enum FontSizeEnum {
  // eslint-disable-next-line no-unused-vars
  DEFAULT = '100%',
  // eslint-disable-next-line no-unused-vars
  LARGER = '115%',
  // eslint-disable-next-line no-unused-vars
  VERY_LARGE = '130%',
}

export interface IFontSizeContext {
  currentSize: FontSizeEnum
  setCurrentSize: (val: FontSizeEnum) => void
}
