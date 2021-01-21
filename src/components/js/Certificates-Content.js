import '../css/Certificates-Content.css';
import pwaicon from '../../images/pwa-icon.png';
import frontendwebexperticon from '../../images/front-end-web-expert-icon.jpg';
import jetpackproicon from '../../images/jetpack-pro-icon.png';
import androidfundamentalicon from '../../images/android-fundamental-icon.png';
import machinelearningdevelopmenticon from '../../images/machine-learning-development-icon.jpg';
import pythonicon from '../../images/python-icon.png';
import solidicon from '../../images/solid-icon.png';
import reactcourseicon from '../../images/react-course-icon.svg';
import sqlcourseicon from '../../images/sql-course-icon.svg';
import datavisualizationicon from '../../images/data-visualization-icon.png';
import Slide from 'react-reveal/Slide';
import AppleCard from './Apple-Card';
import CertificateItem from './Certificate-Item';

function CertificatesContent() {
    return(
        <div id="certificates" className="content-container certificates-content">
            <Slide left>
                <AppleCard className="certificates-card">
                    <div className="header-text">
                        Certificates
                    </div>

                    <CertificateItem 
                        image={frontendwebexperticon}
                        name="Become a Front-End Web Developer Expert" 
                        provider="Dicoding Indonesia"
                        link="https://www.dicoding.com/certificates/0LZ0D6GDQX65" 
                        />
                    
                    <CertificateItem 
                        image={pwaicon}
                        name="Build Progressive Web Apps" 
                        provider="Dicoding Indonesia"
                        link="https://www.dicoding.com/certificates/3JMZVK7GNPN9" 
                        />

                    <CertificateItem 
                        image={jetpackproicon}
                        name="Learn Android Jetpack Pro" 
                        provider="Dicoding Indonesia"
                        link="https://www.dicoding.com/certificates/ERZR51052PYV" 
                        />

                    <CertificateItem 
                        image={androidfundamentalicon}
                        name="Learn Android Application Fundamentals" 
                        provider="Dicoding Indonesia"
                        link="https://www.dicoding.com/certificates/N72ZDGN96ZYW" 
                        />

                    <CertificateItem 
                        image={machinelearningdevelopmenticon}
                        name="Study of Machine Learning Development" 
                        provider="Dicoding Indonesia"
                        link="https://www.dicoding.com/certificates/NVP7GYLDOXR0" 
                        />
                    
                    <CertificateItem 
                        image={pythonicon}
                        name="Starting Programming With Python" 
                        provider="Dicoding Indonesia"
                        link="https://www.dicoding.com/certificates/QGRX578KRP0M" 
                        />

                    <CertificateItem 
                        image={datavisualizationicon}
                        name="Learn Basic Data Visualization" 
                        provider="Dicoding Indonesia"
                        link="https://www.dicoding.com/certificates/KERZR3OG2XYV" 
                        />

                    <CertificateItem 
                        image={solidicon}
                        name="Learn SOLID Programming Principles" 
                        provider="Dicoding Indonesia"
                        link="https://www.dicoding.com/certificates/QNVP7RDK4PR0" 
                        />

                    <CertificateItem 
                        image={reactcourseicon}
                        name="React Course" 
                        provider="Progate Indonesia"
                        link="https://docs.google.com/viewer?url=https://d2w8fsc1wkigu3.cloudfront.net/1638971/02f75c8c4d47f4795e40cdfdceda9e97/certificates/courses/febae0403b992e33c8a9040704d0378ccourse_certificate_edd24159qfnphc.pdf" 
                        />

                    <CertificateItem 
                        image={sqlcourseicon}
                        name="SQL Course" 
                        provider="Progate Indonesia"
                        link="https://docs.google.com/viewer?url=https://d2w8fsc1wkigu3.cloudfront.net/1638971/02f75c8c4d47f4795e40cdfdceda9e97/certificates/courses/1f92829e4cb3f065f2ab69cda0ac04aecourse_certificate_8f042e1fqfnphd.pdf" 
                        />
                </AppleCard>
            </Slide>
        </div>
    );
}

export default CertificatesContent;