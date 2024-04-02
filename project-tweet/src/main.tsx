import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import Tweet from './components/Tweet'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Separator from './components/Separator/Separator'
import { RouterProvider } from 'react-router-dom'
import { router } from './routex'



// forEach => não tem retorno.
// map => tem retorno.

const tweets = [
  'deu certo!',
  'estou tweetando!!',
  'teste'
]

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode >
  <div className='layout'>
    <Sidebar/>

   <div className='content'>
      <main className='timeline'>
       <Header title='Home'/>

        <RouterProvider router={router} />

       <form className='new-tweet-form'>
        <label htmlFor="tweet">
         <img src="https://github.com/Nattanjunior.png" alt="Natan Junior" />
         <textarea id='tweet' placeholder="What's happening"/>        
        </label>  
        <button type='submit'>tweet</button> 
      
       </form>    

        <Separator/>

        {tweets.map(tweet=>{ // propriedade key deve ser usada no primeiro elemento, para identificar os elementos.
          return <Tweet key={tweet} content={tweet}/>
        })}
 
      </main>
    </div>
  </div> 
    
</React.StrictMode>,
)


// ReactDOM.createRoot: procura um elemento para mostrar em tela.
// React.StrictMode: nós da aviso sobre erros 