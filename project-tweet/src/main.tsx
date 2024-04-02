import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Sparkle } from 'phosphor-react'
import Tweet from './components/Tweet'
import Sidebar from './components/Sidebar/Sidebar'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
<div className='layout'>
    <Sidebar/>
  <div className='content'>
    <main className='timeline'>
      <div className='timeline-header'>
        Home
        <Sparkle/>
      </div>

        <form className='new-tweet-form'>
         <label htmlFor="tweet">
          <img src="https://github.com/Nattanjunior.png" alt="Natan Junior" />
          <textarea id='tweet' placeholder="What's happening"/>
           
           
          <button type='submit'>tweet</button>         
          </label>  
        
        </form>    

        <div className="separator" />

        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>

    </main>
  </div>
</div>
    
  </React.StrictMode>,
)


// ReactDOM.createRoot: procura um elemento para mostrar em tela.
// React.StrictMode: nós da aviso sobre erros 