import Image from 'next/image'
import Shop from './shop'
import Cart from './cart'
import CartProvider from './cartProvider'

export default function Home() {
  return (
    <div>
      <h1 className='mt-10 mb-4 text-center text-[32px] text-black/80 font-bold'>
        Context Api
      </h1>
      <h1 className=' text-center text-[24px] text-black/80 font-bold'>
        Cart Functionality
      </h1>
      <CartProvider>
      <Shop/>
      <div className='mt-10 mb-10'></div>
      <hr/>
      <Cart/>
      </CartProvider>
    </div>
  )
}
