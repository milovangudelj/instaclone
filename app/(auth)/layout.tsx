import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import 'styles/globals.css'

import { ThemeProvider } from '~components/theme-provider'
import { Database } from '~types/supabase'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookiesStore = cookies()
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookiesStore,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect('/')
  }

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex  overflow-y-auto overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
