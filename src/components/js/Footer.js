import '../css/Footer.css';
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return(
        <div className="footer">
            <div className="row">
                <div className="col-lg-8">
                    <div className="web-app">Profile</div>
                    <div className="developer-name">Zavier Ferodova Al Fitroh</div>
                </div>
                <div className="col-lg-4 contact-social-media">
                    <a href="https://github.com/zavierferodova/">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href="https://www.instagram.com/zavierferodova/">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="https://www.linkedin.com/in/zavier-ferodova-al-fitroh-8604171b1">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </div>
                <div className="year-updated">
                    &#169;2020
                </div>
            </div>
        </div>
    );
}

export default Footer;