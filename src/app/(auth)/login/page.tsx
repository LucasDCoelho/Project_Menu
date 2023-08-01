"use client"
import { useState } from "react";


import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Form } from "@/components/Form";
import { Link } from "@/components/Link";


export default function PageLogin() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
    <Form title="Seja Bem vindo">
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
          security="password"
          placeholder="*******"
          value={password}
          change={(e) => setPassword(e.target.value)}
        />
      </Input.Root>


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