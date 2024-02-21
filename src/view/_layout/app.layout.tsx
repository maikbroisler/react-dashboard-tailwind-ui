import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'

export function AppLayout() {
  return (
    <div className="lg:grid-cols-app min-h-screen lg:grid dark:bg-zinc-900">
      <Sidebar />
      <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
        <Outlet />
      </main>
    </div>
  )
}
