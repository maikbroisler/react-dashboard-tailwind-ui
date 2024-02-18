import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'

export function AppLayout() {
  return (
    <div className="grid-cols-app grid min-h-screen">
      <Sidebar />
      <main className="px-4 pb-12 pt-8">
        <Outlet />
      </main>
    </div>
  )
}
