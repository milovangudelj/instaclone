import { cookies } from 'next/headers'

import 'styles/globals.css'

import { ThemeProvider } from '~components/theme-provider'
import { Sidebar } from '~components/sidebar'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
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

  if (!session) {
    redirect('/signin')
  }

  return (
    <html lang="en" className="dark">
      <body className="h-[100dvh] overflow-hidden dark:bg-zinc-900 bg-zinc-50 font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="noise-container min-h-full max-h-full z-10 flex flex-col">
            <div className="noise"></div>
            <div className="h-full min-h-full grid grid-cols-[256px,1fr]">
              <Sidebar />
              <main className="min-h-full h-full overflow-y-auto overflow-x-hidden">
                <div className="grid-container relative gap-y-0 pb-0">
                  <div className="bleed-full bg-grid-light dark:bg-grid sticky top-0 h-[100dvh] inset-0"></div>
                  <div className="relative bleed-full grid grid-cols-[1fr_768px_1fr] children:[grid-column:2] -mt-[100dvh] py-20">
                    {children}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
