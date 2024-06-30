import { auth } from '@clerk/nextjs/server'

export default function CutAndBuildLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()
  const isLoggedIn = !!userId

  return (
    <div className="flex flex-col md:flex-row">
      <main className={`flex-1 p-4 md:p-6 ${isLoggedIn ? 'md:ml-64' : ''}`}>
        {children}
      </main>
    </div>
  )
}