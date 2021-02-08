import React from 'react'
import './Home.css'
import SkillItem from '../components/skill-item'
import CertificateCard from '../components/certificate-card'
import CertificateData from '../constant/certificate-data'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import MediaQuery from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faMicrochip, faMobile } from '@fortawesome/free-solid-svg-icons'

// Image Import
import topBackground from '../images/top-background.png'
import topBackgroundLanscape from '../images/top-background-lans.png'
import laptopIcon from '../images/Laptop-Icon.png'
import developerImage from '../images/developer-image.jpg'
import creativeThinkImage from '../images/undraw_creative_thinking.svg'
import learnedLanguageImage from '../images/Lang-Image.png'
import threeCircle from '../images/Three-Circle.png'

function Home () {
  return (
    <div className="app-container">
      {/* Header Content */}
      <div className="header h-screen">
        <div className="absolute px-6 mt-5">
          <div className="font-mirza text-white text-4xl lg:text-5xl font-bold">Profile</div>
        </div>
        <div className="absolute h-screen w-full flex justify-center items-center z-10">
          <div style={{ transform: 'translateY(-20%)' }} className="w-11/12 flex items-center">
            <div className="w-full md:w-2/4 text-center md:text-left">
              <div className="font-rubik developer-name text-4xl lg:text-5xl leading-tight font-black">
                <span className="text-white">ZAVIER</span> FERODOVA AL FITROH
              </div>
              <div className="font-ruda text-white font-bold text-lg mt-5">
                Full Stack Web Developer | Android Developer
              </div>
            </div>
            <div className="w-2/4 hidden md:block p-14">
              <img className="w-full h-full object-cover" src={laptopIcon}/>
            </div>
          </div>
        </div>
        <MediaQuery minWidth={1024}>
          <img className="object-fill h-full w-full transform -translate-y-2" src={topBackground}/>
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <img className="object-fill h-full w-full transform -translate-y-2" src={topBackgroundLanscape}/>
        </MediaQuery>
      </div>

      {/* Developer Content */}
      <div className="mt-28 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
          <div className="developer-image col-span-1 md:col-span-1 rounded-3xl overflow-hidden">
            <img className="object-cover w-full h-full" src={developerImage}/>
          </div>
          <div className="col-span-1 sm:col-span-1 m-4 md:ml-8 mt-12 flex flex-col justify-center h-full transform -translate-y-6">
            <div className="font-ramabhadra text-big-color text-3xl sm:text-4xl">Hello !</div>
            <p className="font-ramabhadra text-normal-color mt-5 text-lg sm:text-xl mb-4">
              I am Zavier, 18 y.o student and developer. I have skills to develop website and android app. I so interested with technology especially about Artficial Intelligence. And for now I started to learn about Machine Learning with Python.
            </p>
          </div>
        </div>
      </div>

      {/* Skill Content */}
      <div className="mt-36 md:mt-52">
        <div className="font-ramabhadra text-big-color text-center text-4xl sm:text-4xl mb-10 sm:mb-14">My Skill</div>
          <div className="grid md:grid-cols-2 mx-6 lg:mx-12">
          <Fade top>
            <div className="creative-image col-span-1">
              <img className="object-cover w-full h-full" src={creativeThinkImage}/>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col-span-1 flex flex-col justify-center mt-6 md:mt-0 md:ml-2 items-center">
              <SkillItem
                name={'Web Development'}
                percentage={90}
                icon={faGlobe} />
              <SkillItem
                name={'Android Development'}
                percentage={75}
                icon={faAndroid} />
              <SkillItem
                name={'Machine Learning'}
                percentage={25}
                icon={faMicrochip} />
              <SkillItem
                name={'UI Design'}
                percentage={65}
                icon={faMobile} />
            </div>
          </Fade>
          </div>
      </div>

      {/* Learned Language Content */}
      <div className="mt-36 md:mt-48 flex">
        <Fade left>
          <div className="card-learned-language rounded-tr-3xl rounded-br-3xl w-11/12 lg:w-2/3 p-5 py-8 sm:p-12 flex-grow-0">
            <div className="font-ramabhadra text-white text-2xl sm:text-3xl mb-5">Mastered Language</div>
            <div className="flex justify-center p-3 md:p-8">
              <img className="object-fill w-full h-full" src={learnedLanguageImage}/>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="w-1/3 hidden sm:flex items-center flex-grow-0">
            <img className="ml-2 md:ml-5 relative p-12" src={threeCircle}/>
          </div>
        </Fade>
      </div>

      {/* Certificates Content */}
      <div className="mt-36 md:mt-52">
        <div className="font-ramabhadra text-big-color px-4 md:px-8 mb-12 text-4xl sm:text-5xl">Certificates</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-10 gap-8 m-2 md:m-7">
          {
            CertificateData.map((certificate, index) =>
              <Zoom key={index} className="block col-span-1">
                <CertificateCard
                  name={certificate.name}
                  level={certificate.level}
                  provider={certificate.provider}
                  icon={certificate.icon}
                  link={certificate.link} />
              </Zoom>
            )
          }
        </div>
      </div>

      <div className="mt-40 bg-gray-900 rounded-t-3xl pb-4">
        <div className="px-6 md:px-20 pt-14 w-full">
          <div className="font-mirza text-5xl md:text-6xl font-bold text-right text-white">Profile</div>
          <div className="mt-16 text-center lg:text-right">
            <div className="inline-block mr-14 transform translate-x-10">

              <a href={'https://www.instagram.com/zavierferodova/'} className="flex items-center mb-4 hover:text-blue-600 cursor-pointer text-white">
                <div className="text-3xl md:text-6xl">
                  <FontAwesomeIcon icon={faInstagram}/>
                </div>
                <div className="font-ramabhadra text-base md:text-3xl ml-5">@zavierferodova</div>
              </a>

              <a href={'https://www.linkedin.com/in/zavier-ferodova-al-fitroh-8604171b1'} className="flex items-center mb-4 hover:text-blue-600 cursor-pointer text-white">
                <div className="text-3xl md:text-6xl">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </div>
                <div className="font-ramabhadra text-base md:text-3xl ml-5">Zavier Ferodova Al Fitroh</div>
              </a>

              <a href={'https://github.com/zavierferodova/'} className="flex items-center mb-4 hover:text-blue-600 cursor-pointer text-white">
                <div className="text-3xl md:text-6xl">
                  <FontAwesomeIcon icon={faGithub}/>
                </div>
                <div className="font-ramabhadra text-base md:text-3xl ml-5">zavierferodova</div>
              </a>

            </div>
            <div className="bg-white h-1 mt-14"></div>
            <div className="font-ramabhadra text-white text-center mt-2">&copy; 2021</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
