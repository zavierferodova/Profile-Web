import { CreationType } from '../components/creation-card'
import coronaStatisticImg from '../images/corona-statistic.png'
import mbasJajanImg from '../images/mbas-jajan.png'
import mikomikImg from '../images/mikomik.png'
import digitalNoteImg from '../images/digital-note.png'
import cinemaCatalogueImg from '../images/cinema-catalogue.png'

const CreationData = [
  {
    name: 'Corona Statistic',
    type: CreationType.web,
    image: coronaStatisticImg,
    link: 'https://corona-statistic.herokuapp.com/'
  },
  {
    name: 'Mbas Jajan',
    type: CreationType.web,
    image: mbasJajanImg,
    link: 'https://mbas-jajan.web.app/'
  },
  {
    name: 'Mikomik',
    type: CreationType.design,
    image: mikomikImg,
    link: 'https://www.figma.com/file/MDgKpdsQfQ9QzNqLkuhzfx/Mikomik'
  },
  {
    name: 'Digital Note',
    type: CreationType.design,
    image: digitalNoteImg,
    link: 'https://www.figma.com/file/XvoEPwo4aPn2yagj3I2VyQ/Digital-Note'
  },
  {
    name: 'Cinema Catalogue',
    type: CreationType.android,
    image: cinemaCatalogueImg,
    link: 'https://drive.google.com/file/d/1sGftmqEERy--rvo5M8i-SgEhVTZkzVXj/view?usp=sharing'
  }
]

export default CreationData
