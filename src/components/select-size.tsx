'use client'

import { useCart } from '@/context/cart-context'
import { useEffect } from 'react'

interface SelectSizeProps {
  productId: number
}

export function SelectSize({ productId }: SelectSizeProps) {
  const { addSize, items, size } = useCart()

  const product = items.find((item) => item.productId === productId)

  useEffect(() => {
    if (product?.size && product.productId === productId) addSize(product?.size)

    if (items.length === 0) {
      addSize(null)
    }

    if (!items.some((item) => item.productId === productId)) {
      addSize(null)
    } else {
      addSize(String(product?.size))
    }
  }, [items])

  return (
    <div className="flex gap-2">
      <button
        type="button"
        className={`flex h-9 w-14 items-center justify-center rounded-full border ${size === 'P' ? 'border-green-400 bg-green-800' : 'border-zinc-700 bg-zinc-800'}  text-sm font-semibold`}
        onClick={() => {
          addSize((state) => (state === 'P' ? null : 'P'))
        }}
      >
        P
      </button>

      <button
        type="button"
        className={`${size === 'M' ? 'border-green-400 bg-green-800' : 'border-zinc-700 bg-zinc-800'} flex h-9 w-14 items-center justify-center rounded-full border  text-sm font-semibold`}
        onClick={() => {
          addSize((state) => (state === 'M' ? null : 'M'))
        }}
      >
        M
      </button>

      <button
        type="button"
        className={`${size === 'G' ? 'border-green-400 bg-green-800' : 'border-zinc-700 bg-zinc-800'} flex h-9 w-14 items-center justify-center rounded-full border  text-sm font-semibold`}
        onClick={() => {
          addSize((state) => (state === 'G' ? null : 'G'))
        }}
      >
        G
      </button>

      <button
        type="button"
        className={`${size === 'GG' ? 'border-green-400 bg-green-800' : 'border-zinc-700 bg-zinc-800'} flex h-9 w-14 items-center justify-center rounded-full border  text-sm font-semibold`}
        onClick={() => {
          addSize((state) => (state === 'GG' ? null : 'GG'))
        }}
      >
        GG
      </button>
    </div>
  )
}
