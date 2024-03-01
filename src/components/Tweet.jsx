
import TweetAvatar from "./TweetAvatar"
import TweetContent from "./TweetContent"
import TweetTitleDetails from "./TweetTitleDetails"

export default function Tweet({value}){
    return(
        <div className="tweet">
            <TweetAvatar avatar={value.avatar}/>
            <TweetContent author={value.author} title={value.title} time={value.time} text={value.text} image={value.image} comments={value.comments} retweet={value.retweet} likes={value.likes}/> 
            <TweetTitleDetails /> 
         </div>
    )
}