import { ItemCart } from '@/components/item-cart'
import { TotalCart } from '@/components/total-cart'

export default function Cart() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold leading-tight mb-12 mt-12">Carrinho</h1>

      <div className="relative grid max-h-[860px] grid-cols-3 gap-12 align-top">
        <div className="col-span-2 flex flex-col gap-4">
          <ItemCart />
        </div>

        <TotalCart />
      </div>
    </div>
  )
}
