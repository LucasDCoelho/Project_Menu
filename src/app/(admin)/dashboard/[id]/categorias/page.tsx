"use client"
import { useState } from "react";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check, Trash2 } from "lucide-react";



export default function CategoriasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <div className="flex justify-between px-8 my-8">
        <h2 className="text-2xl">Categorias</h2>

        <Button
          type="button"
          className="bg-cyan-600 px-3 py-2 rounded text-cyan-50 hover:bg-cyan-500"
          onClick={() => { setIsModalOpen(!isModalOpen) }}
        >
          Nova Categoria
        </Button>

        {isModalOpen ? (
          <>
            <div
              className="w-[80%] h-full fixed bg-cyan-600 top-0 left-0 bg-opacity-10"
              onClick={() => { setIsModalOpen(!isModalOpen) }}
            ></div>
            <div
              className={`top-0 right-0 bg-cyan-700 fixed h-full w-1/5 p-6`}
            >
              <div className="flex justify-between">
                <h3 className="text-md text-cyan-50 font-semibold">CRIAR</h3>
                <Button
                  type="button"
                  onClick={() => { setIsModalOpen(!isModalOpen) }}
                  className="text-cyan-50 hover:bg-cyan-50 hover:rounded-full w-7 h-7 hover:text-cyan-700"
                >X</Button>
              </div>
              <div
                className="flex flex-col justify-center text-cyan-50 mt-10"
              >
                <Label 
                  htmlFor="text"
                  className="text-md font-bold "
                >
                  Categoria
                </Label>
                <Input 
                  type="text" 
                  placeholder="Digite a categoria" 
                  className="text-cyan-600 mt-2 mb-5"

                />

                <Label 
                  htmlFor="text"
                  className="text-md font-bold"
                >
                  Status
                </Label>
                <Input type="text" placeholder="Digite o status" className="text-cyan-600 mt-2"/>

                <Button
                  className="bg-cyan-200 px-3 py-2 rounded text-cyan-800 hover:bg-cyan-300 mt-6"
                  
                >
                  Criar
                </Button>
              </div>
            </div>
          </>
        ) : null}

      </div>
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
            <TableCell className="text-center">
              <Button
                className="bg-green-500 hover:bg-green-400 mr-2"
              >
                <Check/>
              </Button> 

              <Button
                variant={"destructive"}
              >
                <Trash2/>
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>



    </>
  );
}