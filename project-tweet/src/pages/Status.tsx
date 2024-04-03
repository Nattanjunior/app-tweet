import { FormEvent, useState ,KeyboardEvent} from "react"
import Header from "../components/Header/Header"
import Separator from "../components/Separator/Separator"
import Tweet from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"



/*
 *  Fluxo de renderização
 * 1.toda vez que alteramos o estado de um componente, TODO  componente é recalculado, é reconstruido do 0 novamente.
 * 2. toda vez que seu componente PAI renderizar. 
 * 3. toda vez que alguma das suas propriedades mudar.
//
  
 * Algoritmo de reconciliação:
 
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML. retorna =>  (Diff)
 * 3.Aplicar as operações javascript para alterar somente o necessÁrio do HMTL


*/


export default function Status(){

  const [newanswer, setNewanswer] = useState("")
  const [answers, setAnswers] = useState([
    'Concordo..',
    'Olha,faz sentido',
    'Parabens pelo progresso.'
  ])
  
  function createNewTweet(event: FormEvent){
    event.preventDefault() // prevenindo o comportamento padrão do form 
  
    setAnswers([newanswer,...answers]) 
    setNewanswer("")
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && event.ctrlKey || event.metaKey){
      setAnswers([newanswer,...answers]) 
      setNewanswer("")
    }
  }



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
           onKeyDown={handleHotkeySubmit}
           onChange={(event)=>{
            setNewanswer(event.target.value)
           }}
           />        
         </label>  
         <button type='submit'>
          <PaperPlaneRight/>
          <span>Answers</span> 
         </button> 
       
        </form>    
 
       
 
         {answers.map(answer=>{ // propriedade key deve ser usada no primeiro elemento, para identificar os elementos.
           return <Tweet key={answer} content={answer}/>
         })}
  
       </main>
 </>
 )
}