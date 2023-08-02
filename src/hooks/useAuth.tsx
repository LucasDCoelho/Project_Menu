import { useContext, useState } from "react";
import AuthContext from "@/context/AuthContext";

import { User } from "@/types/Authenticate";

const AuthProvider=({
  children
}: {
  children: React.ReactNode
}) => {
  const [ user, setUser ] = useState<User | null>(null)

  const signIn = async () =>{
    await fetch("https://64c7bfcda1fe0128fbd540b5.mockapi.io/")
    .then((res)=>{
      console.log(res.json())
    })
    .catch((error)=> {
      console.error(error)
    })
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext)
  
  if(!context){
    console.log("useAuth precisa estar com o um Provider");
  }

  return context
}