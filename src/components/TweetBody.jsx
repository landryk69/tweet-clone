import TweetTitle from "./TweetTitle"
import TweetText from "./TweetText"
import TweetImage from "./TweetImage"

export default function TweetBody({author,title,time,text,image}){
    return(
        <div className="tweet-body">
            <TweetTitle author={author} title={title} time={time}/>
            <TweetText text={text}/>
            <TweetImage image={image}/>
        </div>
    )
}