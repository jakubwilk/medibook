import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
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
            text={t('home:menu.login')}
            icon={<MeetingRoom {...iconProps} />}
            description={t('home:menu.loginDescription')}
          />
          <HomeMenuButton
            href={'/register'}
            text={t('home:menu.register')}
            description={t('home:menu.registerDescription')}
            icon={<NoteAdd {...iconProps} />}
          />
          <HomeMenuButton
            href={'/verify'}
            text={t('home:menu.verify')}
            icon={<Inventory {...iconProps} />}
            description={t('home:menu.verifyDescription')}
            className={'col-span-2'}
            isFullWidth
          />
        </HomeMenuGrid>
      </div>
    </PageWithBars>
  )
}

export default Home
