import { FC, useContext } from 'react'
import { Names } from '../enums'
import deedoImg from '../images/deedo.webp'
import baitarnImg from '../images/baitarn.webp'
import titanImg from '../images/titan.webp'
import tokenImg from '../images/token.webp'
import { i18nContext, i18nTypes } from '../i18n'
import Map from '../map'
interface Props {
  name: Names
}

const Dog: FC<Props> = ({ name }: Props) => {
  const i18n: i18nTypes = useContext(i18nContext)
  const renderData = {
    [Names.Dedoo]: {
      image: deedoImg,
    },
    [Names.Baitarn]: {
      image: baitarnImg,
    },
    [Names.Titan]: {
      image: titanImg,
    },
    [Names.Token]: {
      image: tokenImg,
    },
  }

  return (
    <div>
      {i18n[name]}
      <img src={renderData[name].image} alt={name} />
      <Map />
    </div>
  )
}

export default Dog
