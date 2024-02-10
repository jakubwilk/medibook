import { useEffect, useMemo } from 'react'
import { Location, useLocation, useNavigate } from 'react-router-dom'
import { isEmpty, isNil } from 'lodash'

import { Loader, ROUTES } from '../libs/common'
import { IVisits, Visits } from '../libs/visits'

type TVisitsPageState = {
  data: Array<IVisits>
}

const VisitsPage = () => {
  const { state } = useLocation() as Location<TVisitsPageState>
  const navigate = useNavigate()

  const hasNoState = useMemo(() => isNil(state) && isEmpty(state), [state])

  useEffect(() => {
    if (hasNoState) {
      navigate(ROUTES.HOME)
    }
  }, [hasNoState, navigate])

  if (hasNoState) {
    return <Loader isFullPage />
  }

  return <Visits data={state.data} />
}

export default VisitsPage
