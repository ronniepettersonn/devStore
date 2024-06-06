'use client'

import { useCart } from '@/context/cart-context'
import { CupomButtom } from './cupom-buttom'

export function TotalCart() {
  const { items } = useCart()

  const total = items.reduce((total, item) => {
    return Number(total) + Number(item.quantity) * Number(item.price)
  }, 0)

  return (
    <div className="h-fit flex flex-col justify-start px-12 py-12 rounded-lg border border-zinc-800">
      <h1 className="text-2xl font-bold leading-tight mb-8">Total</h1>

      <span className="flex justify-between">
        <p className="text-lg font-semibold">Sub-total</p>

        <p className="text-lg leading-relaxed text-zinc-400">R$ {total}</p>
      </span>

      <span className="flex justify-between mt-4">
        <p className="text-lg font-semibold">Frete</p>

        <p className="text-lg leading-relaxed text-zinc-400">R$ 0</p>
      </span>

      <span className="flex justify-between mt-4">
        <p className="text-lg font-semibold">Total</p>

        <p className="text-lg leading-relaxed text-zinc-400">R$ {total}</p>
      </span>

      <CupomButtom />

      <button
        type="button"
        disabled={items.length === 0}
        className="disabled:cursor-not-allowed disabled:bg-zinc-600 mt-16 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      >
        Check-Out
      </button>
    </div>
  )
}
