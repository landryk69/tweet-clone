import TweetAction from "./TweetAction";

export default function TweetActions({comments,retweet,likes}){
    return(
      <div className="tweet-actions">
        <TweetAction comments={comments} retweet={retweet} likes={likes}/>
      </div> 
    );
}