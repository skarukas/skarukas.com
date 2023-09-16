import "../style/PDF.css"
import EasyLink from "./EasyLink"

export default function PDF(props) {
    return (
        <div className="pdf-container">
            <EasyLink to={props.file}>
                <img src="img/pdf-icon.png" alt="PDF Icon"/>
                <p>{props.name}</p>
            </EasyLink>
        </div>
    )
}