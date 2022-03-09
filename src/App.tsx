import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dog from './dog'
import { Names, Paths } from './enums'
import NotFound from './notFound'
const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Dedoo} element={<Dog name={Names.Dedoo} />} />
        <Route path={Paths.Baitarn} element={<Dog name={Names.Baitarn} />} />
        <Route path={Paths.Titan} element={<Dog name={Names.Titan} />} />
        <Route path={Paths.Token} element={<Dog name={Names.Token} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
