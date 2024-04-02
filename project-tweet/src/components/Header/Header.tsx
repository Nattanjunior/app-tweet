import { Sparkle } from "phosphor-react";
import './Header.css'

interface headerprops{
    title:string
}

export default function Header(props: headerprops){
 return(
<div className='timeline-header'>
  {props.title}
 <Sparkle/>
</div>
)
}