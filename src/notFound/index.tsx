import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Names, Paths } from '../enums'

const NotFound: FC = () => {
  const availablePath = [
    { name: Names.Dedoo, path: Paths.Dedoo },
    { name: Names.Baitarn, path: Paths.Baitarn },
    { name: Names.Titan, path: Paths.Titan },
    { name: Names.Token, path: Paths.Token },
  ]
  let navigate = useNavigate()
  return (
    <div>
      <h1>404</h1>
      <h1>Page not found</h1>
      {availablePath.map(({ name, path }) => (
        <button onClick={() => navigate(path)}>{name}</button>
      ))}
    </div>
  )
}

export default NotFound
