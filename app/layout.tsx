import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import { auth } from '@clerk/nextjs/server'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()
  const isLoggedIn = !!userId

  return (
    <html lang="en">
      <ClerkProvider>
        <body className="bg-dark-bg text-dark-on-bg">
          {isLoggedIn && <TopNav />}
          <div className="flex flex-col md:flex-row pt-16">
            {isLoggedIn && <Sidebar />}
            <main className={`flex-1 p-4 md:p-6 ${isLoggedIn ? 'md:ml-64' : ''}`}>
              {children}
            </main>
          </div>
        </body>
      </ClerkProvider>
    </html>
  )
}