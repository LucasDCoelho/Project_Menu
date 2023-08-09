import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ProdutosPage(){
  return(
    <>
      <Table className="px-10"> 
        <TableCaption>Lista de Produtos</TableCaption>
        <TableHeader >
          <TableRow >
            <TableHead>Produto</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Espaguete</TableCell>
            <TableCell>Em Preparo</TableCell>
            <TableCell className="text-center">Check | Denied</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}