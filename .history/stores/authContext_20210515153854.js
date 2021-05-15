import { createContext } from 'react'

const AuthContext = createContext( {
  name: null,
  login: () => {},
  logout: () => {},
  authReady = false
} )

export let AuthContextProvider = () => {
  <AuthContext></AuthContext>
}
 
export default AuthContext;