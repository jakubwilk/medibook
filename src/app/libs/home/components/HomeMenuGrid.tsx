import { ReactNode } from 'react'

interface IProps {
  children: ReactNode[]
}

const HomeMenuGrid = ({ children }: IProps) => {
  return <div className={'grid grid-cols-2 gap-6'}>{children}</div>
}

export default HomeMenuGrid
