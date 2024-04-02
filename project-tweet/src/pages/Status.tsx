import { FormEvent, useState } from "react"
import Header from "../components/Header/Header"
import Separator from "../components/Separator/Separator"
import Tweet from "../components/Tweet"
import './Status.css'




const [newanswer, setNewanswer] = useState("")
 const [answers, setAnswers] = useState([
  'Concordo..',
  'Olha,faz sentido',
  'Parabens pelo progresso.'
])

 function createNewTweet(event: FormEvent){
  event.preventDefault() // prevenindo o comportamento padrão do form 

  setAnswers([newanswer,...answers]) // tweets está guardando oque eu já tenho enquanto o newtweets, está adicionando um novo elemento no fim do array, ou pode ser no inicio tambem.
  setNewanswer("")
 }

export default function Status(){
 return(
 <>
 <main className='status'>
        <Header title='Tweet'/>

        <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus aspernatur veritatis? Non rerum fugiat fugit repellat laudantium sint nihil dolor quas, numquam perferendis temporibus! Dolorem voluptates culpa modi deleniti!"/> 
 
        <Separator/>

        <form  onSubmit={createNewTweet} className='answer-tweet-form'>
         <label htmlFor="tweet">
          <img src="https://github.com/Nattanjunior.png" alt="Natan Junior" />
          <textarea 
           id='tweet'
           value={newanswer}
           placeholder="Tweet your answer"
           onChange={(event)=>{
            setNewanswer(event.target.value)
           }}
           />        
         </label>  
         <button type='submit'>Answers</button> 
       
        </form>    
 
       
 
         {answers.map(answer=>{ // propriedade key deve ser usada no primeiro elemento, para identificar os elementos.
           return <Tweet key={answer} content={answer}/>
         })}
  
       </main>
 </>
 )
}