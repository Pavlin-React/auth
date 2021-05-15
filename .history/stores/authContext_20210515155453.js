import { createContext, useState } from 'react'

const AuthContext = createContext( {
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
} )

export let AuthContextProvider = ( { children } ) => {

  let [user, setUser] = useState
  
  return (
    <AuthContext.Provider value='hellooo'>
      { children }
    </AuthContext.Provider>
  )
}
 
export default AuthContext;