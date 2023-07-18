'use client'

import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { Button } from '~components/ui/button'

export default function Page() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: 'milovan.gudelj@gmail.com',
      password: 'sup3rs3cur3',
    })

    router.push('/')
  }

  return <Button onClick={handleSignIn}>Sign In</Button>
}
