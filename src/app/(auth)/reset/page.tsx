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
          security="text"
          placeholder="Digite sua nova senha"
        />
      </Input.Root>

      <Input.Root>
        <Input.Label text="Repita nova senha" />
        <Input.Field
          security="text"
          placeholder="Repita sua nova senha"
        />
      </Input.Root>

      <Link.Root>
        <Link.Linked link="/login" content="Voltar para login" />
      </Link.Root>

      <Button
        text="Entrar"
        type="submit"
      />
    </Form>
  );
}