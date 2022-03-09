import { FC, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dog from './dog'
import { Names, Paths } from './enums'
import { i18n, i18nContext } from './i18n'
import NotFound from './notFound'
const App: FC = () => {
  const [locale] = useState('th')
  const i18nValue: Record<string, string> = i18n[locale]
  return (
    <i18nContext.Provider value={i18nValue}>
      <BrowserRouter>
        <Routes>
          <Route path={Paths.Dedoo} element={<Dog name={Names.Dedoo} />} />
          <Route path={Paths.Baitarn} element={<Dog name={Names.Baitarn} />} />
          <Route path={Paths.Titan} element={<Dog name={Names.Titan} />} />
          <Route path={Paths.Token} element={<Dog name={Names.Token} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </i18nContext.Provider>
  )
}

export default App
