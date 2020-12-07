import '../css/Skill-Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillItem(props) {
    const percentageWidth = {width: `${props.percentage}%`};    

    return (
        <div className="skill-item">
            <div className="skill-icon" style={props.icon_style}>
                <FontAwesomeIcon icon={props.icon}/>
            </div>
            <div className="skill-info">
                <div className="skill-name-percentage">
                    <div className="skill-name">{props.name}</div>
                    <div className="skill-percentage" style={{...props.percentage_style, ...percentageWidth}}></div>
                </div>
                <div className="percentage-value">{props.percentage} %</div>
            </div>
        </div>
    )
}

export default SkillItem;