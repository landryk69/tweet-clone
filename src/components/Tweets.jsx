import Tweet from "./Tweet"
import Data from "./Data"

export default function Tweets(){
    return(
        Data.map((objt,i)=><Tweet key={i} value={objt}/>)
    
    )
}