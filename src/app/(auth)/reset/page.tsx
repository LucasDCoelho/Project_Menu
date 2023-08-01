import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Form } from "@/components/Form";
import { Link } from "@/components/Link";

export default function ResetPage() {
  return (
    <Form title="Redefinir Senha" >
      <Input.Root>
        <Input.Label text="Nova senha" />
        <Input.Field
          security="password"
          placeholder="Digite sua nova senha"
        />
      </Input.Root>

      <Input.Root>
        <Input.Label text="Confirme senha" />
        <Input.Field
          security="password"
          placeholder="Confime sua senha"
        />
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