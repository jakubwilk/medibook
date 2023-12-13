import { ReactNode } from 'react'

interface IProps {
  menu?: ReactNode[]
  displaySupportMenu?: boolean
}

const Navbar = ({ menu, displaySupportMenu }: IProps) => {
  console.log('menu', menu)
  console.log('displaySupportMenu', displaySupportMenu)

  return (
    <header className={'h-[70px] w-full'}>
      <div className={'container mx-auto'}>
        <p>{'Navbar'}</p>
      </div>
    </header>
  )
}

export default Navbar
