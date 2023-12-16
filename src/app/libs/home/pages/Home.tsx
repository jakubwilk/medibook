import { useMemo } from 'react'
import { Inventory, MeetingRoom, NoteAdd } from '@mui/icons-material'
import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { PageWithBars } from '../../common/components'
import { HomeMenuGrid } from '../components'
import HomeMenuButton from '../components/HomeMenuButton'

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: theme.palette.primary.main,
  },
}))

const Home = () => {
  const classes = useStyles()

  const iconProps = useMemo(
    () => ({
      className: classes.icon,
      sx: {
        fontSize: 48,
      },
    }),
    [classes.icon],
  )

  return (
    <PageWithBars>
      <div className={'h-full min-h-[inherit] flex items-center justify-center'}>
        <HomeMenuGrid>
          <HomeMenuButton
            href={'/login'}
            text={'Logowanie'}
            icon={<MeetingRoom {...iconProps} />}
            description={'Zaloguj sie do panelu pacjenta'}
          />
          <HomeMenuButton
            href={'/register'}
            text={'Nowa wizyta'}
            description={'Umów sie na jednorazową wizytę bez rejestracji'}
            icon={<NoteAdd {...iconProps} />}
          />
          <HomeMenuButton
            href={'/verify'}
            text={'Weryfikacja'}
            icon={<Inventory {...iconProps} />}
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
