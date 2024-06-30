'use client';

import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";

const TopNav = () => {
  return (
    <nav className="bg-dark-surface p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 md:flex-none">
          <Link href="/" className="text-dark-primary text-xl md:text-2xl font-bold block text-center md:text-left">
            FitnessTrainerAI
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/dashboard" className="text-dark-on-surface mr-4 hover:text-dark-primary transition-colors hidden md:inline">
            Dashboard
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;