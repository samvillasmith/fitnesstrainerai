'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/workouts', label: 'Workouts' },
  { href: '/progress', label: 'Progress' },
  { href: '/nutrition', label: 'Nutrition' },
  { href: '/profile', label: 'Profile' },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-dark-surface rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <aside className={`bg-dark-surface text-dark-on-surface w-64 min-h-screen p-4 fixed left-0 top-16 z-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="mb-2">
                <Link 
                  href={item.href}
                  className={`block p-2 rounded transition-colors ${
                    pathname === item.href 
                      ? 'bg-dark-primary text-dark-bg' 
                      : 'hover:bg-dark-bg hover:text-dark-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;