import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-dark-bg text-dark-on-bg p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-dark-primary text-center">Welcome to Fitness App</h1>
      <p className="text-lg md:text-xl mb-8 text-dark-on-bg opacity-80 text-center">Your personal fitness journey starts here.</p>
      <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
        <Link 
          href="/sign-in" 
          className="bg-dark-primary hover:bg-opacity-80 text-dark-bg font-bold py-2 px-4 rounded transition-colors w-full md:w-auto text-center"
        >
          Sign In
        </Link>
        <Link 
          href="/sign-up" 
          className="bg-dark-secondary hover:bg-opacity-80 text-dark-bg font-bold py-2 px-4 rounded transition-colors w-full md:w-auto text-center"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}