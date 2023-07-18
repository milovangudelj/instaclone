'use client'

import { SignOut } from '@phosphor-icons/react'

import { Button } from './button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect, useRouter } from 'next/navigation'

export const SignOutButton = () => {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <Button variant={'outline'} size={'icon'} onClick={handleSignOut}>
      <SignOut />
    </Button>
  )
}
