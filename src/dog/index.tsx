import { FC } from 'react'
import { Names } from '../enums'
import deedoImg from '../images/deedo.webp'
import baitarnImg from '../images/baitarn.webp'
import titanImg from '../images/titan.webp'
import tokenImg from '../images/token.webp'
interface Props {
  name: Names
}
const Dog: FC<Props> = ({ name }: Props) => {
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
      {name}
      <img src={renderData[name].image} alt={name} />
    </div>
  )
}

export default Dog
