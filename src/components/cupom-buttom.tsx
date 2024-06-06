'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function CupomButtom() {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggleCuponInput() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col mt-4 text-zinc-400 gap-4">
      <span className="flex justify-between " onClick={handleToggleCuponInput}>
        <p>Tem um cupom de desconto?</p>

        <ChevronDown
          className={`${isOpen ? 'rotate-180' : ''} transition-all duration-500`}
        />
      </span>

      <input
        type="text"
        className={`flex-1 bg-zinc-900 text-sm outline-none placeholder:text-zinc-500 py-4 px-6 text-zinc-50 rounded-full ${isOpen ? '' : 'hidden '} transition-all duration-500`}
        placeholder="Digite aqui o seu cupom"
      />
    </div>
  )
}
