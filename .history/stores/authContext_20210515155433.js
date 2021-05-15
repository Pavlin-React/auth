import { createContext } from 'react'

const AuthContext = createContext( {
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
} )

export let AuthContextProvider = ( { children } ) => {

  let []
  
  return (
    <AuthContext.Provider value='hellooo'>
      { children }
    </AuthContext.Provider>
  )
}
 
export default AuthContext;