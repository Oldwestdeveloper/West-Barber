import { Search } from "lucide-react"
import Header from "./_components/Header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

const page = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        {/* texto */}
        <h2 className="text-xl font-bold">Olá, Guilherme</h2>
        <p>Sabado, 23 de Maio</p>

        {/* busca */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <Search />
          </Button>
        </div>
        {/* banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/Banner Pizza.png"
            alt="Banner de Pizza"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="mt-6 flex justify-between overflow-hidden rounded-xl bg-card text-sm text-card-foreground ring-1 ring-foreground/10">
          {/* Esquerda */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold text-xl">Corte de Cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              </Avatar>
              <p className="text-sm">Barbearia OWD</p>
            </div>
          </div>

          {/* DIREITA */}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">05</p>
            <p className="text-sm">20:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
