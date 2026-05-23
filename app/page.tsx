import { Search } from "lucide-react"
import Header from "./_components/Header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"

const page = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Guilherme</h2>
        <p>Sabado, 23 de Maio</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <Search />
          </Button>
        </div>

        <div className="relative h-[150px] w-full mt-6">
        <Image src="/Banner Pizza.png" alt="Banner de Pizza" fill className="object-cover rounded-xl"/>
        </div>
      </div>
      
    </div>
  )
}

export default page
