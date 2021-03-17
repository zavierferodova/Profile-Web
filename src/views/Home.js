import React from 'react'
import './Home.css'
import SkillItem from '../components/skill-item'
import CertificateCard from '../components/certificate-card'
import CreationCard from '../components/creation-card'
import CertificateData from '../constant/certificate-data'
import CreationData from '../constant/creation-data'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import MediaQuery from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faInstagram, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faMicrochip, faMobile, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

// Image Import
import topBackground from '../images/top-background.png'
import topBackgroundLanscape from '../images/top-background-lans.png'
import laptopIcon from '../images/Laptop-Icon.png'
import developerImage from '../images/developer-image.jpg'
import creativeThinkImage from '../images/undraw_creative_thinking.svg'
import masteredLanguageImage from '../images/Lang-Image.png'
import zeroToHeroImage from '../images/zero_to_hero.png'
import footerBackground from '../images/Footer-Background.svg'

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
      <div className="mt-28 px-6 md:px-12 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
          <div className="developer-image col-span-1 md:col-span-1 rounded-3xl overflow-hidden xs:mx-10 md:mx-4 xl:mx-24">
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

      {/* Study Experience Content */}
      <div style={{ backgroundColor: '#FAFAFA' }} className="mt-36 md:mt-52 px-4 md:px-8 lg:px-20 py-12">
        <div className="font-ramabhadra text-big-color text-2xl md:text-4xl mb-12">Study Experience</div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-6 md:mx-14">
          <Fade bottom>
            <div className="col-span-1 flex">
              <div className="w-1 flex justify-center">
                <div className="w-4 h-4 flex-shrink-0 absolute rounded-full block bg-purple-700"></div>
                <div className="w-full h-full flex">
                  <div className="bg-purple-700 w-full h-full"></div>
                </div>
              </div>
              <div className="ml-8 font-ramabhadra mb-6">
                <div style={{ color: '#0063F6' }} className="text-xl lg:text-2xl">SMK Negeri 2 Surakarta</div>
                <div style={{ color: '#3E3C3C' }} className="mb-3 text-base lg:text-lg">(2018 - Present)</div>
                <div style={{ color: '#666565' }} className="text-sm lg:text-base">Software Engineering Departement Student</div>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="col-span-1 flex">
              <div className="w-1 flex justify-center md:hidden">
                <div className="w-4 h-4 flex-shrink-0 absolute rounded-full block bg-purple-700"></div>
                <div className="w-full h-full flex">
                  <div className="bg-purple-700 w-full h-full"></div>
                </div>
              </div>
              <div className="ml-8 font-ramabhadra mb-6">
                <div style={{ color: '#0063F6' }} className="text-xl lg:text-2xl">Indosat Ooredoo Digital Camp</div>
                <div style={{ color: '#3E3C3C' }} className="mb-3 text-base lg:text-lg">(2019)</div>
                <div style={{ color: '#666565' }} className="text-sm lg:text-base">Menjadi Android Developer Expert Scholarship at Dicoding Indonesia</div>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="col-span-1 flex">
              <div className="w-1 flex justify-center">
                <div className="w-4 h-4 flex-shrink-0 absolute rounded-full block bg-purple-700"></div>
                <div className="w-full h-full flex">
                  <div className="bg-purple-700 w-full h-full"></div>
                </div>
              </div>
              <div className="ml-8 font-ramabhadra mb-6">
                <div style={{ color: '#0063F6' }} className="text-xl lg:text-2xl">Lintasarta Digischool</div>
                <div style={{ color: '#3E3C3C' }} className="mb-3 text-base lg:text-lg">(2020)</div>
                <div style={{ color: '#666565' }} className="text-sm lg:text-base">Membangun Progressive Web Apps Scholarship at Dicoding Indonesia</div>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="col-span-1 flex">
              <div className="w-1 flex justify-center md:hidden">
                <div className="w-4 h-4 flex-shrink-0 absolute rounded-full block bg-purple-700"></div>
                <div className="w-full h-full flex">
                  <div className="bg-purple-700 w-full h-full"></div>
                </div>
              </div>
              <div className="ml-8 font-ramabhadra mb-6">
                <div style={{ color: '#0063F6' }} className="text-xl lg:text-2xl">Indosat Ooredoo Digital Camp</div>
                <div style={{ color: '#3E3C3C' }} className="mb-3 text-base lg:text-lg">(2020)</div>
                <div style={{ color: '#666565' }} className="text-sm lg:text-base">Belajar Pengembangan Machine Learning Scholarship at Dicoding Indonesia</div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Skill Content */}
      <div className="mt-36 md:mt-52">
        <div className="font-ramabhadra text-big-color text-center text-4xl sm:text-4xl mb-10 sm:mb-14">My Skill</div>
          <div className="grid md:grid-cols-2 mx-6 lg:mx-12">
          <Fade top>
            <div className="creative-image col-span-1 xl:px-8">
              <img className="object-contain w-full h-full" src={creativeThinkImage}/>
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
                percentage={55}
                icon={faMobile} />
            </div>
          </Fade>
          </div>
      </div>

      {/* Mastered Language Content */}
      <div style={{ backgroundColor: '#98CBFF' }}
        className="mt-36 md:mt-52 py-16 grid grid-cols-1 md:grid-cols-2">
        <Fade left>
          <div className="col-span-1 row-start-2 md:row-start-auto">
            <img className="mt-6 md:mt-0 p-8 lg:p-12 object-contain" src={masteredLanguageImage}/>
          </div>
        </Fade>
        <Fade right>
          <div className="col-span-1 row-start-1 md:row-start-auto flex md:flex-col md:justify-center items-center">
            <div className="px-6">
              <div className="font-ramabhadra text-2xl lg:text-4xl text-gray-800">Mastered Language</div>
              <div style={{
                backgroundColor: '#A119E6',
                boxShadow: '5px 2px 4px rgba(161, 25, 230, 0.25)',
                borderTopLeftRadius: '2rem',
                borderBottomLeftRadius: '2rem',
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem'
              }}
                className="h-4 lg:h-8 w-3/4 mt-2 md:mt-3 block"></div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Certificates Content */}
      <div className="mt-36 md:mt-52">
        <div className="font-ramabhadra text-big-color px-4 md:px-8 mb-12 text-4xl sm:text-5xl">Certificates</div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-5 lg:px-10 gap-6 m-2 md:m-7">
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

      {/* Zero to Hero */}
      <div className="mt-36 md:mt-52 grid grid-cols-1 md:grid-cols-2">
        <Fade left>
          <div className="col-span-1">
            <img className="object-fill w-full h-full" src={zeroToHeroImage}/>
          </div>
        </Fade>
        <Fade right>
          <div className="col-span-1 flex items-center mt-8 md:mt-0">
            <div className="px-6 md:px-12 transform md:-translate-y-16">
              <div className="font-ramabhadra text-zero-to-hero text-big-color text-4xl lg:text-5xl">Zero to Hero</div>
              <div className="font-ramabhadra text-lg lg:text-xl text-normal-color">
                Everything started from zero, currently I was vocational high school student with little experiences about tech work. I always try learn and doing my best, like follow Dicoding Academy Learning Path from basic course till professional course and trying build some coding project to gain more expericences.
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Creations Content */}
      <div className="mt-36 md:mt-52">
        <div className="font-ramabhadra text-big-color px-4 md:px-8 mb-12 text-4xl sm:text-5xl">Creations</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-6 lg:px-12">
          {
            CreationData.map((creation, index) =>
              <Zoom key={index} className="block col-span-1">
                <CreationCard
                  name={creation.name}
                  type={creation.type}
                  image={creation.image}
                  link={creation.link} />
              </Zoom>
            )
          }
        </div>
      </div>

      {/* Get in touch */}
      <div style={{ backgroundColor: '#975FF2' }} className="mt-36 md:mt-52 py-20">
        <Fade bottom>
          <div className="font-ramabhadra text-2xl lg:text-4xl text-white text-center">Get in touch</div>
        </Fade>
      </div>

      {/* Contact Content */}
      <div className="mt-36 md:mt-52 px-4 md:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2">
        <Fade top>
          <div className="col-span-1 mb-10">
            <div style={{ color: '#0063F6' }} className="font-ramabhadra text-base lg:text-xl">Contact Me</div>
            <div className="font-ramabhadra text-3xl lg:text-5xl">Let&apos;s Connect</div>
          </div>
        </Fade>
        <Fade bottom>
          <div style={{ backgroundColor: '#F5F6F7' }} className="col-span-1 p-8 lg:p-12 px-4 lg:px-10 xl:px-16">
            <div className="flex mt-6">
              <div style={{ border: '1px solid #0063F6' }} className="p-3 px-4 bg-white rounded-md flex items-center">
                <FontAwesomeIcon style={{ color: '#0063F6' }}
                  className="text-xl lg:text-3xl" icon={faWhatsapp}/>
              </div>
              <div className="ml-3 lg:ml-4">
                <div style={{ color: '#434242' }} className="font-ramabhadra text-sm lg:text-base">WhatsApp</div>
                <a href={'http://wa.me/+6282327613543'}
                  style={{ color: '#0063F6' }} className="font-ramabhadra text-lg lg:text-2xl hover:underline focus:underline">+62 8232 761 3543</a>
              </div>
            </div>

            <div className="flex mt-6">
              <div style={{ border: '1px solid #0063F6' }} className="p-3 px-4 bg-white rounded-md flex items-center">
                <FontAwesomeIcon style={{ color: '#0063F6' }}
                  className="text-base lg:text-2xl" icon={faEnvelope}/>
              </div>
              <div className="ml-3 lg:ml-4 w-full flex-grow-0 truncate">
                <div style={{ color: '#434242' }} className="font-ramabhadra text-sm lg:text-base">Email</div>
                <a href={'mailto: zavierferodova@outlook.com'}
                  style={{ color: '#0063F6' }} className="font-ramabhadra text-lg lg:text-2xl hover:underline focus:underline w-full truncate">zavierferodova@outlook.com</a>
              </div>
            </div>

            <div className="flex mt-6">
              <div style={{ border: '1px solid #0063F6' }} className="p-3 px-4 bg-white rounded-md flex items-center">
                <FontAwesomeIcon style={{ color: '#0063F6' }}
                  className="text-xl lg:text-3xl" icon={faMapMarkerAlt}/>
              </div>
              <div className="ml-3 lg:ml-4">
                <div style={{ color: '#434242' }} className="font-ramabhadra text-sm lg:text-base">Address</div>
                <a href={'https://www.google.com/maps/place/Surakarta,+Surakarta+City,+Central+Java/@-7.5592076,110.7837924,13z/data=!3m1!4b1!4m5!3m4!1s0x2e7a16627ad11ab1:0xe7fe4e0454bc3095!8m2!3d-7.5754887!4d110.8243272'}
                  style={{ color: '#0063F6' }} className="font-ramabhadra text-lg lg:text-2xl hover:underline focus:underline">Surakarta, Indonesia</a>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Footer */}
      <div style={{
        background: `url(${footerBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
        className="mt-40 rounded-t-3xl pt-32 pb-5 px-5 md:px-20 flex flex-wrap-reverse">
          <div className="w-full md:w-1/2 my-10 mt-14 row-start-2 flex flex-col justify-center">
            <div className="font-mirza text-5xl md:text-6xl font-bold text-white text-center md:text-left">Profile</div>
            <div className="h-1 bg-white inline-block md:hidden"></div>
            <div className="font-ramabhadra text-white mt-2 md:mt-3 text-center md:text-left">&copy; 2021 Zavier Ferodova Al Fitroh</div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <div className="font-ramabhadra row-start-1 text-2xl text-white">Follow on Socials</div>
            <div className="mt-3">
              <a href={'https://www.instagram.com/zavierferodova/'}>
                <FontAwesomeIcon className="text-4xl text-white mx-5" icon={faInstagram}/>
              </a>
              <a href={'https://www.linkedin.com/in/zavier-ferodova-al-fitroh-8604171b1'}>
                <FontAwesomeIcon className="text-4xl text-white mx-5" icon={faLinkedin}/>
              </a>
              <a href={'https://github.com/zavierferodova/'}>
                <FontAwesomeIcon className="text-4xl text-white mx-5" icon={faGithub}/>
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
