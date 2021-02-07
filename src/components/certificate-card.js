import React from 'react'
import './certificate-card.css'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

CertificateItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired
}

const certificateProvider = {
  dicoding: 'Dicoding Indonesia',
  progate: 'Progate Indonesia'
}

const certificateLevel = {
  basic: 'Basic',
  intermediate: 'Intermediate',
  intermediate_adv: 'Intermediate - Advanced',
  advanced: 'Advanced',
  advanced_prof: 'Advanced - Professional',
  professional: 'Professional'
}

function CertificateItem (props) {
  return (
    <div className="certificate-card p-8 m-4 rounded-3xl">
        <div className="flex">
            <div className="icon w-36 h-36 rounded-xl overflow-hidden bg-white">
                <LazyLoad>
                    <img className="w-full h-full object-cover" src={props.icon}/>
                </LazyLoad>
            </div>
            <div className="ml-8">
                <div className="font-rubik text-white font-bold text-xl">{props.provider}</div>
                <div className="font-rubik text-lg mt-1">{props.level}</div>
            </div>
        </div>
        <div className="font-ruda mt-16 text-white font-bold text-2xl">
            {props.name}
        </div>
    </div>
  )
}

export default CertificateItem
export { certificateProvider, certificateLevel }
