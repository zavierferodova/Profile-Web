import '../css/Skill-Content.css';
import {faAndroid} from '@fortawesome/free-brands-svg-icons';
import {faGlobe, faPalette, faMicrochip} from '@fortawesome/free-solid-svg-icons';
import AppleCard from './Apple-Card';
import Slide from 'react-reveal/Slide';
import SkillItem from "./Skill-Item";

function SkillContent() {
    const webIconStyle = {
        background: 'rgba(1, 100, 254, 0.24)',
        color: '#0063F6'
    }

    const webPercentageStyle = {
        background: 'linear-gradient(90.35deg, #FFFFFF -8.87%, rgba(255, 255, 255, 0) 55.5%), #0064FF'
    }

    const androidIconStyle = {
        background: 'rgba(72, 221, 34, 0.24)',
        color: '#48DD22'
    }

    const androidPercentageStyle = {
        background: 'linear-gradient(90.35deg, #FFFFFF -8.87%, rgba(255, 255, 255, 0) 55.5%), #48DD22'
    }

    const machineLearningIconStyle = {
        background: 'rgba(228, 27, 209, 0.24)',
        color: '#E41BD1'
    }

    const machineLearningPercentageStyle = {
        background: 'linear-gradient(90.35deg, #FFFFFF -8.87%, rgba(255, 255, 255, 0) 55.5%), #E41BD1'
    }

    const designIconStyle = {
        background: 'rgba(238, 17, 22, 0.24)',
        color: '#EE1116'
    }

    const designPercentageStyle = {
        background: 'linear-gradient(90.35deg, #FFFFFF -8.87%, rgba(255, 255, 255, 0) 55.5%), #EE1116'
    }

    return (
        <div className="content-container skill-content">
            <Slide left>
                <AppleCard className={'my-skill'}>
                    My Skill
                </AppleCard>
            </Slide>
            <Slide right>
                <AppleCard className={'skill-detail'}>
                    <div>
                        <SkillItem 
                            icon={faGlobe}
                            icon_style={webIconStyle}
                            name={'Web Development'}
                            percentage={90}
                            percentage_style={webPercentageStyle} />

                        <SkillItem 
                            icon={faAndroid}
                            icon_style={androidIconStyle}
                            name={'Android Development'}
                            percentage={75}
                            percentage_style={androidPercentageStyle} />

                        {/* <SkillItem 
                            icon={faMicrochip}
                            icon_style={machineLearningIconStyle}
                            name={'Machine Learning'}
                            percentage={35}
                            percentage_style={machineLearningPercentageStyle} /> */ }

                        <SkillItem 
                            icon={faPalette}
                            icon_style={designIconStyle}
                            name={'UI / UX Design'}
                            percentage={75}
                            percentage_style={designPercentageStyle} />
                    </div>
                </AppleCard>
            </Slide>
        </div>
    );
}

export default SkillContent;