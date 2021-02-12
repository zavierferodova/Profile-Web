import React from 'react'
import './creation-card.css'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

CreationCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string
}

const CreationType = {
  web: 'Website',
  design: 'UI Design',
  android: 'Android',
  machine_learning: 'Machine Learning'
}

function CreationCard (props) {
  return (
    <a href={props.link} className="creation-card relative overflow-hidden rounded-3xl cursor-pointer block">
        <div style={{ color: '#454545' }} className="font-ramabhadra absolute top-0 left-0 w-28 lg:w-36 m-6 p-2 text-center text-xs lg:text-base bg-white rounded-bl-xl rounded-tr-xl">{props.type}</div>
        <div className="font-ramabhadra name absolute bottom-0 left-0 right-0 text-xl lg:text-3xl py-4 lg:py-8 px-8 text-white">{props.name}</div>
        <LazyLoad>
            <img src={props.image} className="object-cover w-full h-full"/>
        </LazyLoad>
    </a>
  )
}

export default CreationCard
export { CreationType }
