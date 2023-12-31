

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Form } from "@/components/Form";
import { Link } from "@/components/Link";


export default function LostPage() {

  return (
    <Form title="Recuperar senha">
      <Input.Root>
        <Input.Label text="Informe seu email" />
        <Input.Field
          security="email"
          placeholder="Digite o email cadastrado"
        />
      </Input.Root>


      <Link.Root>
        <Link.Linked link="/login" content="Voltar" />
      </Link.Root>

      <Button
        text="Enviar"
        type="submit"
        className="text-cyan-50 bg-cyan-500 w-full mt-4 py-1 rounded-sm font-semibold"
      />
    </Form>
  );
}