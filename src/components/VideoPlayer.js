export default function IFrameVideo(props) {
  let width = props.width || 500
  let height = props.height || 315
  let src = props.src.includes("youtube") ? props.src + "&enablejsapi=1" : props.src
  return (<iframe className="yt_player_iframe" width={width} style={{ maxWidth: "100vw" }} height={height} src={src} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)
}