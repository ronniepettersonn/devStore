'use client'

import { Product } from '@/data/types/product'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface SizeProps {
  size: 'P' | 'M' | 'G' | 'GG' | null
}

interface CartItem {
  productId: number
  quantity: number
  size: string
  title: string
  slug: string
  price: number
  image: string
  description: string
  featured: boolean
}

interface CartContextType {
  items: CartItem[]
  size: SizeProps
  addToCart: (productId: number, size: string) => void
  removeToCart: (productId: number) => void
  addQuantity: (productId: number) => void
  removeQuantity: (productId: number) => void
  addSize: (size: string | null) => string | null
}

const CartConxtext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItem, setCartItem] = useState<CartItem[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [size, setSize] = useState<SizeProps>(null)

  function addSize(size: SizeProps) {
    setSize(size)
  }

  async function getAllProducts() {
    const response = await fetch('/api/products')
    const data = await response.json()

    setProducts(data)
  }

  function addToCart(productId: number, size: string) {
    setCartItem((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return products.map((product) => {
          if (product.id === productId) {
            return {
              productId: product.id,
              quantity: 1,
              title: product.title,
              slug: product.slug,
              price: product.price,
              image: product.image,
              description: product.description,
              featured: product.featured,
              size,
            }
          } else {
            return product
          }
        })
      } else {
        const product = products.find((product) => product.id === productId)

        const newProduct = {
          productId: product?.id,
          quantity: 1,
          title: product?.title,
          slug: product?.slug,
          price: product?.price,
          image: product?.image,
          description: product?.description,
          featured: product?.featured,
          size,
        }

        return [...state, newProduct]
      }

      /*  if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      } */
    })
  }

  function removeToCart(productId: number) {
    setCartItem((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.filter((item) => item.productId !== productId)
      } else {
        return state
      }
    })
  }

  function addQuantity(productId: number) {
    setCartItem((state) => {
      return state.map((item) => {
        if (item.productId === productId) {
          return {
            productId: item.productId,
            quantity: item.quantity + 1,
            title: item.title,
            slug: item.slug,
            price: item.price,
            image: item.image,
            description: item.description,
            featured: item.featured,
            size: item.size,
          }
        } else {
          return item
        }
      })
    })
  }

  function removeQuantity(productId: number) {
    setCartItem((state) => {
      return state.map((item) => {
        if (item.productId === productId) {
          return {
            productId: item.productId,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            title: item.title,
            slug: item.slug,
            price: item.price,
            image: item.image,
            description: item.description,
            featured: item.featured,
            size: item.size,
          }
        } else {
          return item
        }
      })
    })
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <CartConxtext.Provider
      value={{
        items: cartItem,
        addToCart,
        removeToCart,
        addQuantity,
        removeQuantity,
        addSize,
        size,
      }}
    >
      {children}
    </CartConxtext.Provider>
  )
}

export const useCart = () => useContext(CartConxtext)
