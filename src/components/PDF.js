import "../style/PDF.css"

export default function PDF(props) {
    return (
        <div className="pdf-container">
            <a target="_blank" rel="noreferrer" href={props.file}>
                <img src="img/pdf-icon.png" alt="PDF Icon"/>
                <p>{props.name}</p>
            </a>
        </div>
    )
}