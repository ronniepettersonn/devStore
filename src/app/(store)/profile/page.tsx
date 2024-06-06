'use client'

import {
  Check,
  CheckCircle2,
  CreditCard,
  MapPin,
  Pencil,
  ShoppingBag,
  User,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Profile() {
  const [editUser, setEditUser] = useState(false)
  const [editEmail, setEditEmail] = useState(false)
  const [menuSelected, setMenuSelected] = useState('Informações gerais')

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold leading-tight mb-12 mt-12 ">Perfil</h1>

      <div className="grid max-h-[860px] grid-cols-5 gap-12 align-top">
        <nav className="flex flex-col gap-2">
          <button
            className={`py-6 px-6 ${menuSelected === 'Informações gerais' ? 'bg-violet-500' : 'hover:bg-zinc-900'}  rounded-lg flex gap-4`}
            onClick={() => setMenuSelected('Informações gerais')}
          >
            <User fill="white" />
            Informações gerais
          </button>
          <button
            className={`py-6 px-6 ${menuSelected === 'Metodos de pagamento' ? 'bg-violet-500' : 'hover:bg-zinc-900'}  rounded-lg flex gap-4`}
            onClick={() => setMenuSelected('Metodos de pagamento')}
          >
            <CreditCard />
            Metodos de pagamento
          </button>
          <button
            className={`py-6 px-6 ${menuSelected === 'Endereços' ? 'bg-violet-500' : 'hover:bg-zinc-900'}  rounded-lg flex gap-4`}
            onClick={() => setMenuSelected('Endereços')}
          >
            <MapPin />
            Endereços
          </button>
          <button
            className={`py-6 px-6 ${menuSelected === 'Pedidos' ? 'bg-violet-500' : 'hover:bg-zinc-900'}  rounded-lg flex gap-4`}
            onClick={() => setMenuSelected('Pedidos')}
          >
            <ShoppingBag />
            Pedidos
          </button>
        </nav>

        <div className="col-span-4 flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center w-full">
            <div className="relative">
              <Image
                src={'http://github.com/ronniepettersonn.png'}
                alt=""
                height={152}
                width={152}
                quality={100}
                className="rounded-full"
              />
              <button className="bg-violet-500 p-3 rounded-full absolute right-0 bottom-0">
                <Pencil size={16} />
              </button>
            </div>

            <div className="mt-4 text-center">
              <span className="text-3xl font-semibold">Ronnie Pettersonn</span>
              <p className="text-sm text-zinc-400">petterson28@hotmail.com</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16 w-full">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h2 className="text-xl font-semibold">Informações Básicas</h2>
                <p className="text-zinc-400 mt-2">
                  Verifique seu e-mail de cadastro
                </p>

                <div className="border-[0.1px] border-zinc-800/50 mt-4 mb-4 " />

                <div className="flex gap-4">
                  <label
                    htmlFor=""
                    className="text-zinc-400 w-[70px] flex items-center"
                  >
                    Usuario
                  </label>
                  <div className="relative flex w-full">
                    <input
                      type="text"
                      className="bg-transparent px-4 py-2 flex-1 focus:outline-none focus:outline-2 focus:outline-violet-500 focus:rounded-md"
                      defaultValue={'Ronnie Pettersonn'}
                      disabled={!editUser}
                    />

                    <button
                      className="absolute right-[10px] top-0 bottom-0"
                      onClick={() => setEditUser(!editUser)}
                    >
                      {editUser ? (
                        <Check size={24} color="#22c55e" />
                      ) : (
                        <Pencil size={18} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="border-[0.1px] border-zinc-800/50 mt-4 mb-4" />

                <div className="flex gap-4">
                  <label
                    htmlFor=""
                    className="text-zinc-400 w-[70px] flex items-center"
                  >
                    Email
                  </label>
                  <div className="relative flex w-full">
                    <input
                      type="email"
                      className="bg-transparent px-4 py-2 flex-1 focus:outline-none focus:outline-2 focus:outline-violet-500 focus:rounded-md "
                      defaultValue={'petterson28@hotmail.com'}
                      disabled={!editEmail}
                    />

                    <button
                      className="absolute right-[10px] top-0 bottom-0"
                      onClick={() => setEditEmail(!editEmail)}
                    >
                      {editEmail ? (
                        <Check size={24} color="#22c55e" />
                      ) : (
                        <Pencil size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <h2 className="text-xl font-semibold">Senha</h2>

                <p className="text-zinc-400 mt-2">
                  Sua senha ajuda a proteger sua conta
                </p>

                <div className="border-[0.1px] border-zinc-800/50 mt-4 mb-4 " />

                <div className="flex gap-4">
                  <input
                    type="password"
                    className="bg-transparent "
                    value={'RonniePettersonn'}
                  />
                </div>
                <p className="text-zinc-600 mt-2 text-sm font-semibold">
                  Alterada em 25.05.2024
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col w-full">
              <h2 className="text-2xl font-semibold ">Pedidos</h2>

              <div className="grid grid-cols-3 gap-8">
                <div className="bg-zinc-900 rounded-lg p-4 mt-4">
                  <p className="text-zinc-400 flex gap-2">
                    <CheckCircle2 fill="#a1a1aa" stroke="#18181b" />
                    Completo
                  </p>

                  <div className="mt-16">
                    <h1 className="text-5xl font-semibold mb-4">32</h1>

                    <span className="text-zinc-400">
                      Comprado nos último 30 dias
                    </span>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-4 mt-4">
                  <p className="text-zinc-400 flex gap-2">
                    <CheckCircle2 fill="#a1a1aa" stroke="#18181b" />
                    Completo
                  </p>

                  <div className="mt-16">
                    <h1 className="text-5xl font-semibold mb-4">32</h1>

                    <span className="text-zinc-400">
                      Comprado nos último 30 dias
                    </span>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-4 mt-4">
                  <p className="text-zinc-400 flex gap-2">
                    <CheckCircle2 fill="#a1a1aa" stroke="#18181b" />
                    Completo
                  </p>

                  <div className="mt-16">
                    <h1 className="text-5xl font-semibold mb-4">32</h1>

                    <span className="text-zinc-400">
                      Comprado nos último 30 dias
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
