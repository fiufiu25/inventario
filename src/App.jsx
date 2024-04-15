import React, { useState } from 'react'

import Menu from './components/menu'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import Crudinventario from './components/CrudInventario'
export default function App() {
  const [active,setActive]=useState(false)
  return (
    <div  className={`${active?'contenedorPrincipal':'contenedorPrincipalActivo'}`}>
<div>
<Menu active={active} setActive={setActive}/>
</div>


    
   <Routes>
    <Route index element={<Home/>}/>
    <Route  path='/home/:categoria' element={<Crudinventario/>}/>
   </Routes>
 

   
         </div>
  )
}
