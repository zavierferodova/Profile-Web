import '../css/Technology-Content.css';
import designtechnology from "../../images/design-technology.png";
import AppleCard from './Apple-Card';
import Zoom from 'react-reveal/Zoom';

function DesignTechnologyContent() {
    return(
        <div  className="content-container design-technology-content">
            <Zoom>
                <AppleCard className="design-list-technology">
                    <img src={designtechnology} alt="UI / UX Design Tools"/>
                </AppleCard>
            </Zoom>
            <Zoom>
                <AppleCard className="design-context">
                    UI / UX Design<br/>Tools
                </AppleCard>
            </Zoom>
        </div>
    )
}

export default DesignTechnologyContent;