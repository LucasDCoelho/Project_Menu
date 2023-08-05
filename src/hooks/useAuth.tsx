import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AuthContext from "@/context/AuthContext";

import { User } from "@/types/Authenticate";
import React from "react";

export const AuthProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter()

  console.log("user in AuthProvider:", user);
  console.log("isLoading in AuthProvider:", isLoading);
  console.log("isAuthenticated in AuthProvider:", isAuthenticated);

  const signIn = async (email: string, password: string) => {
    console.log(email);
    console.log(password);

    try {
      const response = await fetch("https://64ccde422eafdcdc851a64ca.mockapi.io/User");
      if (!response.ok) {
        throw new Error("Falha no fetch user")
      }
      const data: User[] = await response.json();
      const user = data.find((userData: User) => userData.email === email)

      if (!(email === user?.email || password === user?.password)) {
        setError("Falha no email ou senha!")
      }

      if (user) {
        setIsAuthenticated(true)
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        router.push(`/dashboard/${user.id}`)
      }
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
    console.log("Oi")
  }

  const signOut = async () => {
    console.log("Signout called");
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem("user")
    console.log("User removed from localStorage");
    router.push("/login")
  }

  console.log("user in AuthProvider:", user);
  console.log("isLoading in AuthProvider:", isLoading);
  console.log("isAuthenticated in AuthProvider:", isAuthenticated);

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false)
  }, [])

  const contextValue = {
    signIn,
    signOut, 
    user,
    isAuthenticated,
    isLoading,
    error,
  };

  console.log('contextValue',contextValue)

  return (
    <AuthContext.Provider value={contextValue}>
     {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    console.log("useAuth precisa estar com o um Provider");
  }

  console.log("user:", context.user);
  console.log("isLoading:", context.isLoading);
  console.log("isAuthenticated:", context.isAuthenticated);

  return context
}