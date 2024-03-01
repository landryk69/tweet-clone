import Group from"../assets/Group.png"

function TweetTitleAuthor({author,title}){
    return(
        <span className="tweet-title-author">
            {author} 
            <img src={Group} className="tweet-title-author"/>
        </span>
    )
}
export default TweetTitleAuthor
