import { prisma } from '~lib/prisma'

export const dynamicParams = false

export async function generateStaticParams() {
  const users = await prisma.public_users.findMany({
    select: {
      username: true,
    },
  })

  return users.map((user) => ({
    username: user.username,
  }))
}

export default function Page({
  params: { username },
}: {
  params: { username: string }
}) {
  return <div>User: {decodeURIComponent(username)}</div>
}
