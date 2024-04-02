import logotwitter from '../../assets/logo-tweet.svg'
import {Bell,  BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'
import './Sidebar.css'
export default function Sidebar(){
return(
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
    )
}
    
    
