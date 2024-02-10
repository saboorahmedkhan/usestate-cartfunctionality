"use client";
import React,{useContext} from 'react'
import { CartContext } from './context';

const Shop = () => {
    const obj = useContext(CartContext)
    const arr = [
        {name:"Tops",id:1},
        {name:"Pants",id:2},
        {name:"T-Shirts",id:3}
]
  return (
    <div className='ml-10'>
        <h1 className='ml-10 text-left mb-4'>Shopping</h1>
        <ol>
            {
                arr.map((val,i)=>{
                    return (
                        <li key={i}>
                            <span className='mr-5'>{val.id}</span>{val.name} 
                            <span className='ml-5' onClick={()=>obj.add({name:val.name,id:val.id})}>Add to Cart</span></li>
                    )
                })
            }
                
        </ol>
    </div>
  )
}

export default Shop