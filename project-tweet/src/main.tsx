import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'



// forEach => não tem retorno.
// map => tem retorno.



ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode >
<RouterProvider router={router} /> 
</React.StrictMode>,
)


// ReactDOM.createRoot: procura um elemento para mostrar em tela.
// React.StrictMode: nós da aviso sobre erros 
//  <RouterProvider router={router} /> : esse componente é quem vai exibir o conteudo das rotas.