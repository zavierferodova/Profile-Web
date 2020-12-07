import '../css/Projects-Content.css';
import Slide from 'react-reveal/Slide';
import AppleCard from './Apple-Card';

function ProjectContent() {
    return (
        <div id="projects" className="content-container projects-content">
            <Slide right>
                <AppleCard className="projects-card">
                    <div className="header-text">
                        Projects
                    </div>
                    <div className="coming-soon">
                        Coming Soon
                    </div>
                </AppleCard>
            </Slide>
        </div>
    )
}

export default ProjectContent;