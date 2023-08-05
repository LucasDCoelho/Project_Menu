"use client"
import { useEffect, useState } from "react";

import { User } from "@/types/Authenticate";

import { useAuth } from "@/hooks/useAuth";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Form } from "@/components/Form";
import { Link } from "@/components/Link";

export default function PageLogin() {
  const [ email, setEmail ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")
  const [ visiblePassword, setVisiblePassword ] = useState(false)
  const { signIn, error } = useAuth()



  const toggleVisible = ()=>{
    setVisiblePassword(!visiblePassword)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    signIn(email, password)
  }


  return (
    <Form title="Seja Bem vindo" submit={handleSubmit} >
      <Input.Root>
        <Input.Label text="Email" />
        <Input.Field
          security="email"
          placeholder="Digite seu email"
          value={email}
          change={(e) => setEmail(e.target.value)}
          
        />
      </Input.Root>

      <Input.Root>
        <Input.Label text="Senha" />
        <Input.Field
          security={!visiblePassword ? `password` : `text`}
          placeholder="*******"
          value={password}
          change={(e) => setPassword(e.target.value)}
        />
        <Input.Action toggleClick={toggleVisible}/>
      </Input.Root>
      
      {error ? <p className="text-sm text-red-300">{error}</p> : ""}

      <Link.Root>
        <Link.Linked link="/lost" content="Esqueci minha senha" />
      </Link.Root>

      <Button
        text="Entrar"
        type="submit"
      />
    </Form>
  );
}