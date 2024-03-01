import TweetEditorInput from "./TweetEditorInput"
import TweetEditorButton from "./TweetEditorButton"

export default function TweetEditorForm(){
    return(<div className="tweet-editor-form">
        <TweetEditorInput/>
        <TweetEditorButton/>
    </div>)
}