import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { flexRender, useReactTable,getCoreRowModel ,getPaginationRowModel} from '@tanstack/react-table'
import { useParams } from 'react-router'
export default function Crudinventario( ) {
    const {categoria}=useParams()
    console.log(categoria)
  const [data,setData]=useState([])
  console.log(data)
 useEffect(()=>{
traerDatos()
 },[])
  const traerDatos=async()=>{
    try {
        const res=await fetch( `https://dummyjson.com/products/category/${categoria}`)
        const datos=await res.json()
        console.log("apiii",datos)
     
     setData(datos?.products)
    } catch (error) {
        console.log(error)
    }
  
  }
  
const columns =[
{
  header:"ID",
  accessorKey:"id"
},
{
  header:"TITLE",
  accessorKey:"title"
},
{
  header:"CATEGORIA",
  accessorKey:"category"
},
{
  header:"PRECIO",
  accessorKey:"price"
},

]

  
//const getApi= async()=>{
 //const res=await fetch("https://dummyjson.com/products")
 //console.log("olaa",res.json())
  //return await res.json()
//}

  //  const {data,isLoading}=useQuery("articulo", getApi)
    //console.log(data?.products[0])
   // const datos=data?.products

    const table = useReactTable({data,columns,getCoreRowModel:getCoreRowModel(),getPaginationRowModel:getPaginationRowModel()})
  return (
  <>
  <div>
    <table>
      <thead>
      {
      table.getHeaderGroups().map(headerGroup=>(
      <tr key={headerGroup.id}>
        {
          headerGroup.headers.map(header=>(
            <th key={header.id}>
              {header.column.columnDef.header}
            </th>
          ))
        }
        <th>
          ACCIONES
        </th>
      </tr>
      ))
      }
      </thead>
      <tbody>

      {table.getRowModel().rows.map((row)=>(
          <tr key={row.id}>
{
  row.getVisibleCells().map((cell)=>(
<td key={cell.id}>
{
  flexRender(cell.column.columnDef.cell,cell.getContext())
}

</td>

  ))
}
<td>
  <button className=' rounded-md p-2 mr-2 bg-red-600 text-white shadow-md  font-semibold'>eliminar</button>
  <button className=' rounded-md p-2 bg-blue-600 text-white shadow-md  font-semibold'>editar</button>
</td>
          </tr>
        ))
      }
      </tbody>
  {/* <tfoot>
<tr>
  <td>
    
  </td>
</tr>
      </tfoot> */}

    </table>
    <button onClick={()=>table.setPageIndex(0)}>   primer pagina</button>
        <button onClick={()=>table.previousPage()}> primer anterior</button>
            <button onClick={()=>table.nextPage()}> primer siguiente</button>
                <button onClick={()=>table.setPageIndex(table.getPageCount()-1)}> ultima pagina</button>
  </div>
  </>

  )
}
