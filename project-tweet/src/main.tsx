import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import logotwitter from './assets/logo-tweet.svg'
import {Bell,  BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from 'phosphor-react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
<div className='layout'>
  <aside className='sidebar'>
    <img src={logotwitter} alt="" className='logo' />

    <nav className='main-navigation'>
      <a href="" className='active'>
        <House weight='fill'/>
        Home
        </a>
      <a href="">
        <Hash/>
        Explore
        </a>
      <a href="">
        <Bell/>
        Notifications
        </a>
      <a href="">
        <Envelope/>
        Messages
      </a>
      <a href="">
       <BookmarkSimple/>
        Bookmarks
        </a>
      <a href="">
        <FileText/>
        Lists
      </a>
      <a href="">
        <User/>
        Profile
      </a>
      <a href="">
        <DotsThreeCircle/>
        More
      </a>
    </nav>

    <button className='button-tweet'>tweet</button>
  </aside>

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
           
           
          <button type='submit'>weet</button>         
          </label>  
        
        </form>    

    </main>
  </div>
</div>
    
  </React.StrictMode>,
)


// ReactDOM.createRoot: procura um elemento para mostrar em tela.
// React.StrictMode: nós da aviso sobre erros 