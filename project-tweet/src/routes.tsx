// criação de rotas
import { createBrowserRouter } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Status from "./pages/Status";
import Default from "./layouts/Default";

export const router = createBrowserRouter([

{
 path: '/',
 element: <Default/>, // sidebar
 children: [ // quais rotas da minha aplicação vão ter o sidebar na esquerda.

 {
    path: '/', // caminho da rota
    element: <Timeline/>  // oque vai aparecer na tela
 },

 {
    path: '/tweet', 
    element: <Status/>  
 }
],
}


])


// nested rodes
// rotas encadeadas: é uma forma de reaproveitar partes de interface/layouts entre várias páginas.