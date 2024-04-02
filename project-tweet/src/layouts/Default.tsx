
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Default(){
 return(
 <div className='layout'>
  <Sidebar/>

  <div className='content'>
    <Outlet/> 
  </div>
 </div> 
    
 )
}

// Outlet => para cada conteudo especifico de cada page, eu quero que apareça.