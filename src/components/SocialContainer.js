import "../style/SocialContainer.css"

export default function SocialContainer() {
    return (
        <div id="social-container">
            <SocialLink img="img/email-icon.png" name="Email" href="mailto:stephen.karukas@gmail.com"/>
            <SocialLink img="img/facebook-icon.png" name="Facebook" href="https://www.facebook.com/stevie.karukas"/>
            <SocialLink img="img/instagram-icon.png" name="Instagram" href="https://www.instagram.com/skarukas"/>
            <SocialLink img="img/youtube-icon.png" name="YouTube" href="https://www.youtube.com/c/StephenKarukas"/>
            <SocialLink img="img/github-icon.png" name="GitHub" href="https://github.com/skarukas"/>
            <SocialLink img="img/linkedin-icon.png" name="LinkedIn" href="https://www.linkedin.com/in/skarukas/"/>
        </div> 
    )
}

function SocialLink(props) {
    return (
        <a target="_blank" rel="noreferrer" href={props.href} title={props.name}>
            <img className="transparent-icon" src={props.img} alt={props.name}/>
        </a>
    )
}