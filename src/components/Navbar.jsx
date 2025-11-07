import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-xl tracking-tight">
          <span className="text-gray-900">Your</span>
          <span className="text-blue-600">Name</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2 font-medium shadow-sm hover:bg-blue-700 transition-colors">
            Hire Me
          </a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2 font-medium shadow-sm">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
