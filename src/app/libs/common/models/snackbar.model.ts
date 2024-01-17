export enum SnackbarTypeEnum {
  // eslint-disable-next-line no-unused-vars
  SUCCESS = 'success',
  // eslint-disable-next-line no-unused-vars
  ERROR = 'error',
}

export const AUTO_HIDE_SNACKBAR = 5000

export interface ISnackbarContextType {
  isOpen: boolean
  snackbarType: SnackbarTypeEnum | null
  snackbarContent: string
  handleOpenSnackbar: (type: SnackbarTypeEnum, content: string) => void
  handleCloseSnackbar: () => void
}
