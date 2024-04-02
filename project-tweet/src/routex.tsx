// criação de rotas
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
{
    path: '/', // caminho da rota
    element:  <h1>Home</h1>   // oque vai aparecer 
},

{
    path: '/tweet', // caminho da rota
    element:  <h1>tweeter</h1>   // oque vai aparecer 
}
])