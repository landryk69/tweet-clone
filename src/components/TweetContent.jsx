import TweetBody from "./TweetBody"
import TweetActions from "./TweetActions"


export default function TweetContent({author,title,time,text,image,comments,retweet,likes}){
    return(
        <div className="tweet-content">
            <TweetBody  author={author} title={title} time={time} text={text} image={image}/>
            <TweetActions comments={comments} retweet={retweet} likes={likes}/> 
        </div>
    )
}
    
