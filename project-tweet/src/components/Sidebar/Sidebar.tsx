import logotwitter from '../../assets/logo-tweet.svg'
import {Bell,  BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'



export default function Sidebar(){
return(
    <aside className='sidebar'>
    <img src={logotwitter} alt="" className='logo' />

    <nav className='main-navigation'>
      <NavLink to="">
        <House weight='fill'/>
        <span>Home</span>
      </NavLink>
      <a href="">
        <Hash/>
        <span>Explore</span>
      </a>
      <a href="">
        <Bell/>
        <span>Notifications</span> 
        </a>
      <a href="">
        <Envelope/>
        <span>Messages</span> 
      </a>
      <a href="">
       <BookmarkSimple/>
        <span> Bookmarks</span>
        </a>
      <a href="">
        <FileText/>
        <span>Lists</span> 
      </a>
      <a href="">
        <User/>
        <span>Profile</span> 
      </a>
      <a href="">
        <DotsThreeCircle/>
        <span>More</span> 
      </a>
    </nav>

    <button className='button-tweet'>
      <Pencil/>
      <span>tweet</span>
    </button>
  </aside>
    )
}
    
    
// NavLink => já vem com uma class automatica, chamada active.
