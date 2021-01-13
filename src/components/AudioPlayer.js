export default function AudioPlayer(props) {
    return (
        <audio controls>
            <source src={props.src} type="audio/mp3"></source>
            Audio unavailable.
        </audio>
    )
}