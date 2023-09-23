import { headers } from 'next/headers'

export default async function NotFound() {
  const pathname = headers().get('x-instaclone-pathname') || '/'

  return (
    <div>
      {pathname.slice(1).startsWith('@')
        ? 'This user does not exist'
        : 'This page does not exist'}
    </div>
  )
}
