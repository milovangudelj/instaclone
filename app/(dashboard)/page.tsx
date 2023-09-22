import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '~types/supabase'

export default async function Page() {
  const cookiesStore = cookies()
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookiesStore,
  })

  const posts = await supabase.from('posts').select('*')

  return (
    <>
      <h1 className="scroll-m-20 text-4xl mb-16 font-bold tracking-tight">
        For you
      </h1>
      <ul className="flex flex-col gap-8">
        {!posts.data && <li>Loading...</li>}
        {posts.error && <li>Error: {posts.error.message}</li>}
        {posts.data?.length === 0
          ? // <li>No posts</li>
            [...Array(10)].map((_, i) => (
              <li
                key={i}
                className="aspect-[4/5] w-full bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center"
              >
                Loading...
              </li>
            ))
          : posts.data?.map((post) => (
              <li key={post.id}>
                <h2>{post.author}</h2>
                <p>{post.description ?? 'No description'}</p>
              </li>
            ))}
      </ul>
    </>
  )
}
