import { useContext, useMemo } from 'react'
import { isNil } from 'lodash'

import { UserContext } from '../context'
import { IUserContext } from '../models'

const useUserContext = () => {
  const { user, setUser } = useContext<IUserContext>(UserContext)

  const isUser = useMemo(() => !isNil(user), [user])

  return { user, isUser, setUser }
}

export default useUserContext
