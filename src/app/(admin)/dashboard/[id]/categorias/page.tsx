import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function CategoriasPage(){
  return(
    <>
      <Table className="px-10"> 
        <TableCaption>Lista de categorias</TableCaption>
        <TableHeader >
          <TableRow >
            <TableHead>Categoria</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Condimentos</TableCell>
            <TableCell>Faltando</TableCell>
            <TableCell className="text-center">Check | Denied</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}