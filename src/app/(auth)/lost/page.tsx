

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Form } from "@/components/Form";
import { Link } from "@/components/Link";


export default function LostPage() {

  return (
    <Form title="Recuperar senha">
      <Input.Root>
        <Input.Label text="Email" />
        <Input.Field
          security="email"
          placeholder="Digite seu email"
        />
      </Input.Root>


      <Link.Root>
        <Link.Linked link="/login" content="Voltar" />
      </Link.Root>

      <Button
        text="Enviar"
        type="submit"
      />
    </Form>
  );
}