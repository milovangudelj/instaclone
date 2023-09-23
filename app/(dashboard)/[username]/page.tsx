import { notFound } from 'next/navigation'
import { prisma } from '~lib/prisma'

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

export default async function UserPage({
  params: { username },
}: {
  params: { username: string }
}) {
  const user = await prisma.public_users.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    notFound()
  }

  return <div>User: {decodeURIComponent(username)}</div>
}
