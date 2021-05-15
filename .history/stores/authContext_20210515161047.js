import { createContext, useEffect, useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext( {
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
} )

export let AuthContextProvider = ( { children } ) => {

  let [ user, setUser ] = useState( null )

  useEffect( () => {
    netlifyIdentity.init()
  }, [] )

  let context = {  }
  
  return (
    <AuthContext.Provider value={ user }>
      { children }
    </AuthContext.Provider>
  )
}
 
export default AuthContext;