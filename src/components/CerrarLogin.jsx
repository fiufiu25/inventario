import React from 'react'
import style from'./cerrarLogin.module.css';
import { IoHelpCircleOutline } from "react-icons/io5";
export default function CerrarLogin({active}) {
    console.log(active)
  return (
    <div  className={style.conteinerSesion} style={{display:active?"none":"block",transition:"300ms"}}>
     
         <div className=' flex justify-center items-center -mt-12'>
         <IoHelpCircleOutline size={70} />
         </div>
        <div >
            
            <h4 className={style.title} >Cerrar sesión</h4>
            <button className={style.button}> Cerrar...</button>
        
      </div>
      <div className={style.circle}/>
      <div className={style.circle1}/>
    </div>
  )
}
