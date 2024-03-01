export default function TweetImage({ image }) {
  return (image ? (
    <div className="tweet-image">
      <img src={image} className="tweet-image" />
    </div>
  ) : (
    ""
  ));
}
