"use client"
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Form } from "@/components/Form";
import { Link } from "@/components/Link";
import { useState } from "react";

export default function ResetPage() {
  const [ visiblePassword, setVisiblePassword ] = useState(false)
  const [ visiblePassword2, setVisiblePassword2 ] = useState(false)

  const toggleVisible = ()=>{
    setVisiblePassword(!visiblePassword)
  }
  const toggleVisible2 = ()=>{
    setVisiblePassword2(!visiblePassword2)
  }
  return (
    <Form title="Redefinir Senha" >
      <Input.Root>
        <Input.Label text="Nova senha" />
        <Input.Field
          security={!visiblePassword ? `password` : `text`}
          placeholder="Digite sua nova senha"
        />
        <Input.Action toggleClick={toggleVisible}/>
      </Input.Root>

      <Input.Root>
        <Input.Label text="Confirme senha" />
        <Input.Field
          security={!visiblePassword2 ? `password` : `text`}
          placeholder="Confime sua senha"
        />
        <Input.Action toggleClick={toggleVisible2}/>
      </Input.Root>

      <Link.Root>
        <Link.Linked link="/login" content="Voltar para login" />
      </Link.Root>

      <Button
        text="Enviar"
        type="submit"
      />
    </Form>
  );
}