import '../css/Technology-Content.css';
import androidtechnology from "../../images/android-technology.png";
import AppleCard from './Apple-Card';
import Zoom from 'react-reveal/Zoom';

function AndroidTechnologyContent() {
    return(
        <div  className="content-container android-technology-content">
            <Zoom>
                <AppleCard className="android-context">
                    Android<br/>Tools {'&'} Technology
                </AppleCard>
            </Zoom>
            <Zoom>
                <AppleCard className="android-list-technology">
                    <img src={androidtechnology} alt="Android Tools Technology"/>
                </AppleCard>
            </Zoom>
        </div>
    )
}

export default AndroidTechnologyContent;