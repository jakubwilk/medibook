import { ReactNode } from 'react'

interface IProps {
  children: ReactNode[]
}

const HomeMenuGrid = ({ children }: IProps) => {
  return (
    <div className={'flex flex-col md:grid md:grid-cols-2 gap-6 py-8 px-4'}>
      {children}
    </div>
  )
}

export default HomeMenuGrid
