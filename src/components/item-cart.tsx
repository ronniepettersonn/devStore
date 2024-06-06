'use client'

import { useCart } from '@/context/cart-context'
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function ItemCart() {
  const { items, removeToCart, addQuantity, removeQuantity } = useCart()

  function handleRemoveToCart(productId: number) {
    removeToCart(productId)
  }

  return (
    <>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-xl font-semibold">Seu carrinho está vazio</p>

          <Link
            href={'/'}
            className="mt-8 flex h-12 px-16 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
          >
            Retornar para loja
          </Link>
        </div>
      ) : (
        items.map((item) => {
          return (
            <div
              key={item.productId}
              className="overflow-hidden flex max-h-[200px] items-center border border-zinc-800 rounded-lg pr-8"
            >
              <Link href={`/product/${item.slug}`} className="">
                <div className="group relative rounded-lg bg-zinc-900 overflow-hidden">
                  <Image
                    src={item.image}
                    width={200}
                    height={200}
                    quality={100}
                    alt=""
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>

              <div className="flex flex-col ml-8 max-w-[150px]">
                <h2 className="text-xl font-semibold">{item.title}</h2>

                <p className="text-zinc-400">Tamanho: {item.size}</p>
              </div>

              <div className="flex items-center justify-around flex-1">
                <div className="ml-8 flex items-center gap-2">
                  <button
                    disabled={item.quantity === 1}
                    className="disabled:cursor-not-allowed"
                    onClick={() => removeQuantity(item.productId)}
                  >
                    <ChevronDown />
                  </button>
                  <input
                    type="number"
                    className="bg-zinc-900 p-4 max-w-[70px] text-center text-lg rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    maxLength={2}
                    value={item.quantity}
                    readOnly
                  />
                  <button onClick={() => addQuantity(item.productId)}>
                    <ChevronUp />
                  </button>
                </div>

                <div className="">
                  <p className="text-zinc-400">Preço</p>
                  <p className="text-lg font-semibold">
                    {item.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>

                <div>
                  <p className="text-zinc-400">Total</p>
                  <p className="text-lg font-semibold">
                    {(item.price * item.quantity).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="ml-8 text-red-500"
                onClick={() => handleRemoveToCart(item.productId)}
              >
                <X />
              </button>
            </div>
          )
        })
      )}
    </>
  )
}
