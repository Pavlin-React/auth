import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext( {
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
} )

export let AuthContextProvider = ( { children } ) => {

  let [ user, setUser ] = useState( null )

  useEffect( () =>  )
  
  return (
    <AuthContext.Provider value={ user }>
      { children }
    </AuthContext.Provider>
  )
}
 
export default AuthContext;