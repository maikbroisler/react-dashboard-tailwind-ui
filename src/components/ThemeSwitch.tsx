import * as Switch from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../providers/theme-provider'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <Switch.Root
      checked={theme === 'dark'}
      onCheckedChange={(event) =>
        event ? setTheme('dark') : setTheme('light')
      }
      className="relative h-[25px] w-[42px] rounded-full bg-black shadow-lg outline-none data-[state=checked]:bg-zinc-950 data-[state=unchecked]:bg-yellow-500"
    >
      <Switch.Thumb className="absolute left-0.5 top-0.5 flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full bg-white shadow-lg duration-300 ease-linear data-[state=checked]:translate-x-4 ">
        {theme === 'dark' ? (
          <Moon className="h-[16px] w-[16px] text-violet-600" />
        ) : (
          <Sun className="h-[16px] w-[16px] text-orange-400" />
        )}
      </Switch.Thumb>
    </Switch.Root>
  )
}
