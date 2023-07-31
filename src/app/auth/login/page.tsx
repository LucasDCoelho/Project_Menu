import { Input } from "@/components/Input";


export function PageLogin() {
  return (
    <div className="w-1/2 bg-cyan-600 h-full flex justify-center items-center">
      <div>
        <h2 className="text-2xl text-cyan-50">Seja Bem-vindo</h2>

        <Input.Root>
          <Input.Label text="Email"/>
          <Input.Field />
        </Input.Root>

        <Input.Root>
          <Input.Label text="Senha"/>
          <Input.Field />
        </Input.Root>

      </div>
    </div>
  );
}