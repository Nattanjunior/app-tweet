import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

interface tweetsprops{
  content: string
}

export default function Tweet(props: tweetsprops){
return(
<a href='#' className='tweet'>
  <img src="https://github.com/Nattanjunior.png" alt="Natan Junior" />

  <div className='tweet-content'>
    <div className='tweet-content-header'>
      <strong>Natan Junior</strong> 
      <span>@nattanjunior1</span>
    </div>

    <p>
      {props.content}
    </p>


    <div className='tweet-content-footer'>
     <button type='button'>
        <ChatCircle/>
        20
      </button>

      <button type='button'>
        <ArrowsClockwise/>
        20
      </button>

      <button type='button'>
       <Heart/>
        20
      </button>
      
    </div>
  </div>
</a>
)}


