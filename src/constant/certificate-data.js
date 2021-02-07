import { certificateLevel, certificateProvider } from '../components/certificate-card'

// Image Import
import pwaicon from '../images/pwa-icon.png'
import frontendwebexperticon from '../images/front-end-web-expert-icon.jpg'
import jetpackproicon from '../images/jetpack-pro-icon.png'
import androidfundamentalicon from '../images/android-fundamental-icon.png'
import machinelearningdevelopmenticon from '../images/machine-learning-development-icon.jpg'
import pythonicon from '../images/python-icon.png'
import solidicon from '../images/solid-icon.png'
import reactcourseicon from '../images/react-course-icon.svg'
import sqlcourseicon from '../images/sql-course-icon.svg'
import datavisualizationicon from '../images/data-visualization-icon.png'

const CertificateData = [
  {
    name: 'Become a Front-End Web Developer Expert',
    provider: certificateProvider.dicoding,
    level: certificateLevel.advanced_prof,
    icon: frontendwebexperticon
  },
  {
    name: 'Build Progressive Web Apps',
    provider: certificateProvider.dicoding,
    level: certificateLevel.intermediate_adv,
    icon: pwaicon
  },
  {
    name: 'Learn Android Jetpack Pro',
    provider: certificateProvider.dicoding,
    level: certificateLevel.advanced,
    icon: jetpackproicon
  },
  {
    name: 'Learn Android Application Fundamentals',
    provider: certificateProvider.dicoding,
    level: certificateLevel.intermediate,
    icon: androidfundamentalicon
  },
  {
    name: 'Study of Machine Learning Development',
    provider: certificateProvider.dicoding,
    level: certificateLevel.intermediate,
    icon: machinelearningdevelopmenticon
  },
  {
    name: 'Starting Programming With Python',
    provider: certificateProvider.dicoding,
    level: certificateLevel.basic,
    icon: pythonicon
  },
  {
    name: 'Learn Basic Data Visualization',
    provider: certificateProvider.dicoding,
    level: certificateLevel.basic,
    icon: datavisualizationicon
  },
  {
    name: 'Learn SOLID Programming Principles',
    provider: certificateProvider.dicoding,
    level: certificateLevel.basic,
    icon: solidicon
  },
  {
    name: 'React Course',
    provider: certificateProvider.dicoding,
    level: certificateLevel.basic,
    icon: reactcourseicon
  },
  {
    name: 'SQL Course',
    provider: certificateProvider.dicoding,
    level: certificateLevel.basic,
    icon: sqlcourseicon
  }
]

export default CertificateData
