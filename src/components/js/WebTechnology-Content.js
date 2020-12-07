import '../css/Technology-Content.css';
import webtechnology from "../../images/web-technology.png";
import AppleCard from './Apple-Card';
import Zoom from 'react-reveal/Zoom';

function WebTechnologyContent() {
    return(
        <div id="technology" className="content-container web-technology-content">
            <Zoom>
                <AppleCard className="web-list-technology">
                    <img src={webtechnology} alt="Website Technology"/>
                </AppleCard>
            </Zoom>
            <Zoom>
                <AppleCard className="web-context">
                    Website<br/>Technology
                </AppleCard>
            </Zoom>
        </div>
    )
}

export default WebTechnologyContent;