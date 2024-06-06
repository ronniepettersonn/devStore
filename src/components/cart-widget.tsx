'use client'

import { useCart } from '@/context/cart-context'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export function CartWidget() {
  const { items } = useCart()

  return (
    <Link
      href={`${items.length === 0 ? '' : '/cart'}`}
      className="flex items-center gap-2 hover:underline"
    >
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </Link>
  )
}
