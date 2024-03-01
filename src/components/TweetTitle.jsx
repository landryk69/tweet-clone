import TweetTitleAuthor from "./TweetTitleAuthor"
import TweetTitleDetails from "./TweetTitleDetails"

export default function TweetTitle({author,title,time}){
    return(
        <div className="tweet-title">
           <TweetTitleAuthor author={author}/>
           <TweetTitleDetails title={title} time={time}/>
        </div>
    )
}