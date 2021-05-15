import { createContext } from 'react'

const AuthContext = createContext( {
  name: null,
  login: () => {},
  logout: () => {},
  authReady = false
} )

export let AuthContextProvider = ( { children } ) => {
  
  return (
    <AuthContext.Provider>
      { children }
    </AuthContext.Provider>
  )
}
 
export default AuthContext;