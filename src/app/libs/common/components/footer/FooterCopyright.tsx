import { Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { clsx } from 'clsx'

import { important } from '../../utils'

const useStyles = makeStyles((theme: Theme) => ({
  copyright: {
    fontSize: important('0.85rem'),
    letterSpacing: important('0.5px'),
    fontWeight: important(theme.typography.fontWeightLight as number),
    color: theme.palette.grey[800],
    marginBottom: important(0),
  },
}))

const FooterCopyright = () => {
  const classes = useStyles()

  const appVersion = process.env['REACT_APP_VERSION']
  const appName = 'Underwolf Studio'
  const copyrightText = `${appName} © v.${appVersion}`

  return (
    <Typography className={clsx('uppercase', classes.copyright)} paragraph>
      {copyrightText}
    </Typography>
  )
}

export default FooterCopyright
