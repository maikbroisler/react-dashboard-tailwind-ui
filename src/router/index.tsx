import { Routes, Route } from 'react-router-dom'
import { App } from '../view/pages/App'
import { AppLayout } from '../view/_layout/app.layout'

export function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<App />} />
      </Route>
    </Routes>
  )
}
