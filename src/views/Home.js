import React from 'react'
import './Home.css'
import SkillItem from '../components/skill-item'
import CertificateCard from '../components/certificate-card'
import CertificateData from '../constant/certificate-data'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faMicrochip, faMobile } from '@fortawesome/free-solid-svg-icons'

// Image Import
import topBackground from '../images/top-background.png'
import laptopIcon from '../images/Laptop-Icon.png'
import developerImage from '../images/developer-image.jpg'
import creativeThinkImage from '../images/undraw_creative_thinking.png'
import learnedLanguageImage from '../images/Lang-Image.png'
import threeCircle from '../images/Three-Circle.png'

function Home () {
  return (
    <div>
      {/* Header Content */}
      <div className="h-screen">
        <div className="absolute px-6 mt-5">
          <div className="font-mirza text-white text-5xl font-bold">Profile</div>
        </div>
        <div className="absolute h-screen w-full flex justify-center items-center">
          <div style={{ transform: 'translateY(-20%)' }} className="w-11/12 flex items-center">
            <div className="w-2/4">
              <div className="font-rubik developer-name text-5xl leading-tight font-black">
                <span className="text-white">ZAVIER</span> FERODOVA AL FITROH
              </div>
              <div className="font-ruda text-white font-bold text-lg mt-5">
                Full Stack Web Developer | Android Developer
              </div>
            </div>
            <div className="w-2/4">
              <img className="w-full h-full object-contain" src={laptopIcon}/>
            </div>
          </div>
        </div>
        <img className="object-cover object-bottom h-full w-full" src={topBackground}/>
      </div>

      {/* Developer Content */}
      <div className="mt-16 px-24">
        <div className="grid grid-cols-5 h-auto">
          <div style={{ height: '30rem' }} className="developer-image col-span-2 rounded-3xl overflow-hidden">
            <img className="object-cover w-full h-full" src={developerImage}/>
          </div>
          <div className="col-span-3 ml-24 h-full flex flex-col justify-center">
            <div className="font-ramabhadra text-big-color text-4xl">Hello !</div>
            <p className="font-ramabhadra text-normal-color mt-5 text-xl">I am Zavier, 18 y.o student and developer. I have skills to develop website and android app. I so interested with technology especially about Artficial Intelligence. And for now I started to learn about Machine Learning with Python. </p>
          </div>
        </div>
      </div>

      {/* Skill Content */}
      <div className="mt-52">
        <div className="font-ramabhadra text-big-color text-center text-5xl mb-10">My Skill</div>
        <div className="grid grid-cols-2 mx-12">
          <div className="col-span-1">
            <img className="object-cover" src={creativeThinkImage}/>
          </div>
          <div className="col-span-1 flex flex-col justify-center">
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
        </div>
      </div>

      <div className="mt-52 flex">
        <div className="card-learned-language w-2/3 p-12 pl-32 rounded-3xl transform -translate-x-24">
          <div className="font-ramabhadra text-white text-4xl mb-8">Learned Language</div>
          <div className="flex justify-center p-10">
            <img className="object-cover w-full h-full" src={learnedLanguageImage}/>
          </div>
        </div>
        <div className="w-1/3 flex items-center">
          <img className="ml-5" src={threeCircle}/>
        </div>
      </div>

      <div className="h-screen mt-52">
        <div className="font-ramabhadra text-big-color px-8 mb-10 text-5xl">Certificates</div>
        <div className="grid grid-cols-2 px-10">
          {
            CertificateData.map((certificate, index) =>
              <CertificateCard key={index} className="col-span-1"
                name={certificate.name}
                level={certificate.level}
                provider={certificate.provider}
                icon={certificate.icon} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home
