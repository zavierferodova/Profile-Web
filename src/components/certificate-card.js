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
    <a href={props.link} className="certificate-card p-5 md:p-5 lg:p-8 rounded-3xl block w-full h-full">
      <div className="flex">
          <div className="icon w-24 h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36 rounded-xl overflow-hidden bg-white flex-shrink-0">
              <LazyLoad>
                <img className="w-full h-full object-cover" src={props.icon}/>
              </LazyLoad>
          </div>
          <div className="ml-6">
            <div className="font-rubik font-bold text-base md:text-lg text-white">{props.provider}</div>
            <div className="font-rubik text-sm mt-1 font-medium text-gray-800">{props.level}</div>
          </div>
      </div>
      <div className="mt-12">
        <div className="font-ruda font-bold text-normal lg:text-xl text-white">
          {props.name}
        </div>
      </div>
    </a>
  )
}

export default CertificateItem
export { certificateProvider, certificateLevel }
