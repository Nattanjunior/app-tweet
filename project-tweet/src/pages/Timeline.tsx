import { FormEvent, useState,KeyboardEvent } from "react"
import Header from "../components/Header/Header"
import Separator from "../components/Separator/Separator"
import Tweet from "../components/Tweet"
import './Timeline.css'


export default function Timline(){
 const [newtweet, setNewtweet] = useState("")
 const [tweets, setTweets] = useState([
  'estou tweetando!!',
])

 function createNewTweet(event: FormEvent){
  event.preventDefault() // prevenindo o comportamento padrão do form 

  setTweets([newtweet,...tweets]) // tweets está guardando oque eu já tenho enquanto o newtweets, está adicionando um novo elemento no fim do array, ou pode ser no inicio tambem.
  setNewtweet("")
 }

 function handleHotkeySubmit(event: KeyboardEvent){
  if(event.key === 'Enter' && event.ctrlKey || event.metaKey){
    setTweets([newtweet,...tweets]) 
    setNewtweet("")
  }
}

    return(
        <main className='timeline'>
        <Header title='Home'/>
 
        <form  onSubmit={createNewTweet}  className='new-tweet-form'>
         <label htmlFor="tweet">
          <img src="https://github.com/Nattanjunior.png" alt="Natan Junior" />
          <textarea 
           id='tweet' 
           placeholder="What's happening"
           value={newtweet}
           onKeyDown={handleHotkeySubmit}
           onChange={(event)=>{
            setNewtweet(event.target.value)
           }}
           />        
         </label>  
         <button type='submit'>tweet</button> 
       
        </form>    
 
         <Separator/>
 
         {tweets.map(tweet=>{ // propriedade key deve ser usada no primeiro elemento, para identificar os elementos.
           return <Tweet key={tweet} content={tweet}/>
         })}
  
       </main>
    )
}