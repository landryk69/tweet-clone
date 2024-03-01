import Replay from"../assets/Reply.png"
import Retweet from"../assets/Retweet.png"
import React from"../assets/React.png"
import Share from"../assets/Share.png"

export default function TweetAction ({comments,retweet,likes}){
    return(
        <span className="tweet-action">
            <img src={Replay} className="tweet-action" />
            <span>{comments}</span>
            <img src={Retweet} className="tweet-action"/>
            <span>{retweet}</span>            
            <img src={React} className="tweet-action"/>
            <span>{likes}</span>
            <img src={Share} className="tweet-action"/>
            
      </span>
    )
}

