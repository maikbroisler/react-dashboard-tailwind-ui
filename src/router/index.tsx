import { Routes, Route } from 'react-router-dom'
import { App } from '../view/pages/App'
import { AppLayout } from '../view/_layout/app.layout'
import { ThemeProvider } from '../providers/theme-provider'

export function Router() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
