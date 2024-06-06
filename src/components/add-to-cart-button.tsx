'use client'

import { useCart } from '@/context/cart-context'
import { useEffect, useState } from 'react'

interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [isExists, setIsExists] = useState(false)
  const { addToCart, items, removeToCart, size } = useCart()

  function handleAddProductToCart() {
    addToCart(productId, String(size))
  }

  function handleRemoveProductToCart() {
    removeToCart(productId)
  }

  useEffect(() => {
    const productExists = items.some((item) => item.productId === productId)

    if (productExists) {
      setIsExists(true)
    } else {
      setIsExists(false)
    }
  }, [items])

  return (
    <>
      {isExists ? (
        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-red-600 font-semibold text-white"
          onClick={handleRemoveProductToCart}
        >
          Remover do carrinho
        </button>
      ) : (
        <button
          type="button"
          className="disabled:cursor-not-allowed disabled:bg-zinc-500 mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
          onClick={handleAddProductToCart}
          disabled={size === null}
        >
          Adicionar ao carrinho
        </button>
      )}
    </>
  )
}
