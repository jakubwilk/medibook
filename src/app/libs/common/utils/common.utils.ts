export const important = (value: number | string) => {
  return `${value} !important`
}

export const handleEmptyException = () => {
  throw new Error()
}
