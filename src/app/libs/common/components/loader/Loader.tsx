import { CircularProgress } from '@mui/material'

interface IProps {
  isFullPage: boolean
}

const Loader = ({ isFullPage = false }: IProps) => {
  if (isFullPage) {
    return (
      <div
        className={
          'w-full h-full absolute top-0 left-0 z-[100] flex items-center justify-center bg-white'
        }
      >
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className={'relative w-full h-full flex items-center justify-center bg-white'}>
      <CircularProgress />
    </div>
  )
}

export default Loader
