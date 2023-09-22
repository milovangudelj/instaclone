import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import Link from 'next/link'

import { SignOutButton } from '~components/ui/signout-button'
import { House, ChatDots, CameraPlus, Gear } from '~components/icons'
import { ThemeSwitch } from './ui/theme-switch'
import { Database } from '~types/supabase'

export const Sidebar = async () => {
  const cookiesStore = cookies()
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookiesStore,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/signin')
  }

  return (
    <div className="flex flex-col gap-4 h-full min-h-full p-4 border-r border-black/[0.06] dark:border-white/[0.06]">
      <div className="font-bold font-sans flex justify-between items-center text-black dark:text-white">
        <span className="text-pink-500">instaclone</span>
        <ThemeSwitch />
      </div>
      <div className="w-full h-px bg-black/[0.06] dark:bg-white/[0.06]"></div>
      <nav className="flex-1">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 p-2 rounded-lg transition text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06] text-black dark:text-white"
            >
              <House weight="fill" size={24} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/messages"
              className="flex items-center gap-3 p-2 rounded-lg transition text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06] text-black dark:text-white"
            >
              <ChatDots size={24} />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link
              href="/create"
              className="flex items-center gap-3 p-2 rounded-lg transition text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06] text-black dark:text-white"
            >
              <CameraPlus size={24} />
              <span>Create</span>
            </Link>
          </li>
          <li>
            <Link
              href="/profile/settings"
              className="flex items-center gap-3 p-2 rounded-lg transition text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06] text-black dark:text-white"
            >
              <Gear size={24} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-full h-px bg-black/[0.06] dark:bg-white/[0.06]"></div>
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-zinc-800 dark:bg-zinc-100 flex-none w-10 h-10"></div>
        <div className="flex flex-col min-w-0">
          <span>@{session.user.user_metadata.username}</span>
          <span className="truncate text-xs text-black/40 dark:text-white/40">
            {session.user.email}
          </span>
        </div>
        <SignOutButton />
      </div>
    </div>
  )
}
