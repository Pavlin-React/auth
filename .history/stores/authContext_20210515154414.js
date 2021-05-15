import { createContext } from 'react'

const AuthContext = createContext( {
  name: null,
  login: () => {},
  logout: () => {},
  authReady = false
} )

export let AuthContextProvider = (  ) => {
  
  return (
    <AuthContext.Provider>

    </AuthContext.Provider>
  )
}
 
export default AuthContext;