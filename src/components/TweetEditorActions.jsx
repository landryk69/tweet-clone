import Media from"../assets/Button2.png"
import Gif from"../assets/Button3.png"
import Poll from"../assets/Button4.png"
import Emoji from"../assets/button5.png"
import Schedule from"../assets/Button1.png"


export default function TweetEditorActions(){
   return(
      <span className="tweet-editor-action">
         <img src={Media} />
         <img src={Gif} />
         <img src={Poll} />
         <img src={Emoji} />
         <img src={Schedule} />
      </span>
   )
}