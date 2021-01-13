import "../style/Loader.css"

export default function Loader(props) {
    return (
    <div className="loader-container">
        <div className="loader-centered-container">
            {props.text && <p>{props.text}</p>}
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
        </div>
    </div>
    )
}