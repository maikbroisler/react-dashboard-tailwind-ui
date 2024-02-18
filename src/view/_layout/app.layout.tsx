import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="grid-cols-app grid min-h-screen">
      <aside className="border-r border-zinc-200 px-5 py-8">sidebar</aside>
      <main className="px-4 pb-12 pt-8">
        <Outlet />
      </main>
    </div>
  )
}
