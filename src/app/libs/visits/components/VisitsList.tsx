import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import { IVisits } from '../models'

interface IProps {
  data: Array<IVisits>
}

const VisitsList = ({ data }: IProps) => {
  const { t } = useTranslation('visits')

  return (
    <Fragment>
      {data.map(({ id, doctor, examination, room, date }: IVisits) => {
        return <div key={id}>{t(examination)}</div>
      })}
    </Fragment>
  )
}

export default VisitsList
