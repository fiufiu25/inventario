import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

export default function Categoria() {
    
    const getCategoria=async()=>{
 const res=await fetch("https://dummyjson.com/products/categories")
 return res.json()
    }
  const {data}=useQuery("categorias", getCategoria)

    return (
    
    
    <>
    {data?.map((item,index)=>(
            <div key={index} className=' bg-white p-10 rounded-sm shadow-md   w-[200px]  hover:opacity-80  transition-all duration-75 ' >
              <h5 className=' font-bold text-sm text-center uppercase mb-4'>
                {item}
              </h5>
              <div  className='text-center mt-2'>
              <Link  to={`/home/${item}`}   className="font-semibold bg-orange-500 p-2 rounded-md text-white px-5 cursor-pointer "> Entrar</Link>
              </div>
               
            </div>
        ))}
          <div  className=' bg-white p-10 rounded-sm shadow-md   w-[200px]  hover:opacity-80  transition-all duration-75 ' >
              <h5 className=' font-bold text-sm text-center uppercase'>
                todo
              </h5>
              <div  className='text-center mt-2'>
              <button  className="font-semibold bg-orange-500 p-2 rounded-md text-white px-5 cursor-pointer "> Entrar</button>
              </div>
               
            </div>

    </>
        
    
  
  )
}
