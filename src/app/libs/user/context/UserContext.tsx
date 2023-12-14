import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

import { IUserContext } from '../models'

interface IProps {
  children: ReactNode
}

export const UserContext = createContext<IUserContext>({ user: null, setUser: () => {} })

const UserContextProvider = ({ children }: IProps) => {
  const [user, setUser] = useState(null)

  const setCurrentUser = useCallback((user: any) => {
    setUser(user)
  }, [])

  const values: IUserContext = useMemo(
    () => ({
      user,
      setUser: setCurrentUser,
    }),
    [user, setCurrentUser],
  )

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContextProvider
