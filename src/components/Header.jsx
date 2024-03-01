import PageTitle from "./PageTitle"
import TopTweets from "./TopTweets"

export default function Header(){
    return(
    <header className="header">
        <PageTitle/>
        <TopTweets/>
    </header>)
}