import { certificateLevel, certificateProvider } from '../components/certificate-card'

// Image Import
import pwaicon from '../images/pwa-icon.png'
import frontendwebexperticon from '../images/front-end-web-expert-icon.jpg'
import jetpackproicon from '../images/jetpack-pro-icon.png'
import androidfundamentalicon from '../images/android-fundamental-icon.png'
import machinelearningdevelopmenticon from '../images/machine-learning-development-icon.jpg'
import machinelearningbegginericon from '../images/machine-learning-beginner-icon.jpg'
import solidicon from '../images/solid-icon.png'
import reactcourseicon from '../images/react-course-icon.svg'
import sqlcourseicon from '../images/sql-course-icon.svg'
import datavisualizationicon from '../images/data-visualization-icon.png'

const CertificateData = [
  {
    name: 'Become a Front-End Web Developer Expert',
    provider: certificateProvider.dicoding,
    level: certificateLevel.advanced_prof,
    icon: frontendwebexperticon,
    link: 'https://www.dicoding.com/certificates/0LZ0D6GDQX65'
  },
  {
    name: 'Build Progressive Web Apps',
    provider: certificateProvider.dicoding,
    level: certificateLevel.intermediate_adv,
    icon: pwaicon,
    link: 'https://www.dicoding.com/certificates/3JMZVK7GNPN9'
  },
  {
    name: 'Learn Android Jetpack Pro',
    provider: certificateProvider.dicoding,
    level: certificateLevel.advanced,
    icon: jetpackproicon,
    link: 'https://www.dicoding.com/certificates/ERZR51052PYV'
  },
  {
    name: 'Learn Android Application Fundamentals',
    provider: certificateProvider.dicoding,
    level: certificateLevel.intermediate,
    icon: androidfundamentalicon,
    link: 'https://www.dicoding.com/certificates/N72ZDGN96ZYW'
  },
  {
    name: 'Study of Machine Learning Development',
    provider: certificateProvider.dicoding,
    level: certificateLevel.intermediate,
    icon: machinelearningdevelopmenticon,
    link: 'https://www.dicoding.com/certificates/NVP7GYLDOXR0'
  },
  {
    name: 'Study of Machine Learning for Beginner',
    provider: certificateProvider.dicoding,
    level: certificateLevel.beginner,
    icon: machinelearningbegginericon,
    link: 'https://www.dicoding.com/certificates/VJLX1O6G6X72'
  },
  {
    name: 'Learn Basic Data Visualization',
    provider: certificateProvider.dicoding,
    level: certificateLevel.basic,
    icon: datavisualizationicon,
    link: 'https://www.dicoding.com/certificates/KERZR3OG2XYV'
  },
  {
    name: 'Learn SOLID Programming Principles',
    provider: certificateProvider.dicoding,
    level: certificateLevel.basic,
    icon: solidicon,
    link: 'https://www.dicoding.com/certificates/QNVP7RDK4PR0'
  },
  {
    name: 'React Course',
    provider: certificateProvider.dicoding,
    level: certificateLevel.beginner,
    icon: reactcourseicon,
    link: 'https://docs.google.com/viewer?url=https://d2w8fsc1wkigu3.cloudfront.net/1638971/02f75c8c4d47f4795e40cdfdceda9e97/certificates/courses/febae0403b992e33c8a9040704d0378ccourse_certificate_edd24159qfnphc.pdf'
  },
  {
    name: 'SQL Course',
    provider: certificateProvider.dicoding,
    level: certificateLevel.beginner,
    icon: sqlcourseicon,
    link: 'https://docs.google.com/viewer?url=https://d2w8fsc1wkigu3.cloudfront.net/1638971/02f75c8c4d47f4795e40cdfdceda9e97/certificates/courses/1f92829e4cb3f065f2ab69cda0ac04aecourse_certificate_8f042e1fqfnphd.pdf'
  }
]

export default CertificateData
