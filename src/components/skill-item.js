import React from 'react'
import PropTypes from 'prop-types'
import './skill-item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  icon: PropTypes.any.isRequired
}

function SkillItem (props) {
  const barWidth = {
    width: `${props.percentage}%`
  }

  return (
    <div className="w-full grid grid-cols-7 my-2 sm:my-4">
        <div className="flex justify-center">
            <div className="rounded-full col-span-1 w-12 h-12 bg-blue-600 flex justify-center items-center">
                <FontAwesomeIcon icon={props.icon} className="text-white text-xl" />
            </div>
        </div>
        <div className="w-full col-span-6 ml-3 lg:m-0">
            <div className="font-ramabhadra mb-1">{props.name}</div>
            <div className="grid grid-cols-5 sm:grid-cols-6">
                <div className="col-span-4 sm:col-span-5">
                    <div style={barWidth} className="h-2 bg-blue-600 rounded-md"></div>
                </div>
                <div className="font-ramabhadra block col-span-1 text-center text-sm text-blue-600 transform -translate-y-1/4">{props.percentage}%</div>
            </div>
        </div>
    </div>
  )
}

export default SkillItem
