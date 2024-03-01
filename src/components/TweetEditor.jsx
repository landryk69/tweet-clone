import TweetEditorForm from "./TweetEditorForm"
import Avatar from "./Avatar"


export default function TweetEditor(){
    return(<div className="tweet-editor">
        <Avatar/>
        <TweetEditorForm/>
    </div>)
}