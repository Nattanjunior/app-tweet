interface tweetprops{
    user: string,
    content: string
}

export default function Tweet(props: tweetprops){
return(
<>
  {props.user}
  {props.content}
 <button>like</button>
</>
)}


