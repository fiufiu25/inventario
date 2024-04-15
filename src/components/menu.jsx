import React, { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardSharp, IoGridOutline, IoHomeOutline, IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5";
import CerrarLogin from "./CerrarLogin";
export default function Menu({active,setActive}) {
    const [click , setClick]=useState(0)
    
   
  const elemet = [
    {
      icono: <IoHomeOutline size={25}  />,
      title: "Home",
      path: "/home",
    },
    {
      icono: <IoGridOutline  size={25}  />,
      title: "Inventario",
      path: "/Inventario",
    },
 
    {
        icono:<IoNewspaperOutline size={25}/> 
        
        
        ,
        title:"Reportes",
        path:"/reportes"
    },
   
    {
        icono: <IoSettingsOutline size={25}/> ,
        title:"Configuracion",
        path:"/configuracion"
    },

  ];
  return (
    <div className={`${active?"containerMenuActive":"containerMenu"}`}>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:20,marginTop:20}}>
    {
        active?(
            <img src="https://img.freepik.com/foto-gratis/lindo-conejito-dibujos-animados-generado-ai_23-2150288879.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1701302400&semt=ais" width={50} height={50} style={{borderRadius:"50px"}}/>
        ):
        (
            <img src="https://img.freepik.com/foto-gratis/lindo-conejito-dibujos-animados-generado-ai_23-2150288879.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1701302400&semt=ais" width={100} height={100} style={{borderRadius:"50px"}}/>
        )
    }
</div>

<ul className="menu">
      {elemet.map((item,index) => (
        <li className="items" key={index}  style={{borderLeft:click===index?"3px solid red":"3px solid transparent",transition:"all 0.2s"}}>
          <a href="#" onClick={()=> setClick(index)} className={`${click===index?"linkActive":"link"}`} >
          <div >{item.icono}</div>
          <h6 className={`${active?"itemTitleactive":"itemTitle"}`} >{item.title}</h6>
          </a>
       

        </li>
      
      ))}
     
    <hr></hr>
    </ul>
    <div className="closeMenu"> 
    {
        active?(
            <IoChevronForwardSharp onClick={()=>setActive(!active)} />
            
        ):(
            <IoChevronBackOutline onClick={()=>setActive(!active)} />
        )
    }
     
      
      </div>
      <CerrarLogin active={active}/>
    </div>
    
  );
}
