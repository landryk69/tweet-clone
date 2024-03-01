import ButtonImg from "./Button";
import TweetEditorAction from "./TweetEditorActions";


export default function TweetEditorButton(){
    return(<div className="tweet-editor-buttons">
        <TweetEditorAction/>
        <ButtonImg/>
    </div>)
}