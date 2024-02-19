import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Search,
} from 'lucide-react'

import { Logo } from './Logo'

import { NavItem } from './NavItem'
import { UsedSpaceWidget } from '../UsedSpaceWidget'
import { Profile } from '../Profile'
import * as Input from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} to="" />
        <NavItem title="Dashboard" icon={BarChart} to="" />
        <NavItem title="Projects" icon={SquareStack} to="" />
        <NavItem title="Tasks" icon={CheckSquare} to="" />
        <NavItem title="Reporting" icon={Flag} to="" />
        <NavItem title="Users" icon={Users} to="" />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} to="" />
          <NavItem title="Settings" icon={Cog} to="" />
        </nav>

        <UsedSpaceWidget />

        <hr className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
