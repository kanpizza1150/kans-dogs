import { FC } from 'react'
import deedo from './images/deedo.png'
const App: FC = () => {
  return (
    <div>
      <img src={deedo} alt='deedo' style={{ height: '100vh' }} />
    </div>
  )
}

export default App
