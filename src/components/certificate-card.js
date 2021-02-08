import React from 'react'
import './certificate-card.css'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

CertificateItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

const certificateProvider = {
  dicoding: 'Dicoding Indonesia',
  progate: 'Progate Indonesia'
}

const certificateLevel = {
  basic: 'Basic',
  basic_interm: 'Basic - Beginner',
  beginner: 'Beginner',
  beginner_interm: 'Begginer - Intermediate',
  intermediate: 'Intermediate',
  intermediate_adv: 'Intermediate - Advanced',
  advanced: 'Advanced',
  advanced_prof: 'Advanced - Professional',
  professional: 'Professional'
}

function CertificateItem (props) {
  return (
    <a href={props.link} className="certificate-card p-6 md:p-5 lg:p-8 m-2 lg:m-4 rounded-3xl  block">
        <div className="flex">
            <div className="icon w-24 h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36 rounded-xl overflow-hidden bg-white">
                <LazyLoad>
                  <img className="w-full h-full object-cover" src={props.icon}/>
                </LazyLoad>
            </div>
            <div className="ml-4 md:ml-5 lg:ml-8">
                <div className="font-rubik text-white font-bold text-base md:text-lg lg:text-xl">{props.provider}</div>
                <div className="font-rubik text-sm sm:text-lg mt-1 font-medium">{props.level}</div>
            </div>
        </div>
        <div className="font-ruda mt-12 sm:mt-16 text-white font-bold text-lg md:text-xl lg:text-2xl">
            {props.name}
        </div>
    </a>
  )
}

export default CertificateItem
export { certificateProvider, certificateLevel }
