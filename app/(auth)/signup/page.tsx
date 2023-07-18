'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { Button } from '~components/ui/button'

export default function Page() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: 'milovan.gudelj@gmail.com',
      password: 'sup3rs3cur3',
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: { username: 'milo.me' },
      },
    })

    router.push('/')
  }

  return <Button onClick={handleSignUp}>Sign Up</Button>
}
