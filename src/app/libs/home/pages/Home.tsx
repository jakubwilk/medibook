import { PageWithBars } from '../../common/components'
import { HomeMenuGrid } from '../components'
import HomeMenuButton from '../components/HomeMenuButton'

const Home = () => {
  return (
    <PageWithBars>
      <div className={'h-full min-h-[inherit] flex items-center justify-center'}>
        <HomeMenuGrid>
          <HomeMenuButton
            href={'/login'}
            text={'Logowanie'}
            icon={null}
            description={'Zaloguj sie do panelu pacjenta'}
          />
          <HomeMenuButton
            href={'/register'}
            text={'Rejestracja'}
            description={'Umów się na nową wizytę'}
            icon={null}
          />
          <HomeMenuButton
            href={'/verify'}
            text={'Weryfikacja'}
            icon={null}
            description={'Sprawdź swoje wizyty bez potrzeby logowania'}
            className={'col-span-2'}
            isFullWidth
          />
        </HomeMenuGrid>
      </div>
    </PageWithBars>
  )
}

export default Home
