import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Menu } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-white/70 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="rounded-2xl border border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <motion.div
                initial={{ rotate: -12, scale: 0.8, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="p-2 rounded-xl bg-gradient-to-br from-fuchsia-500/30 via-purple-500/30 to-sky-500/30 border border-white/10"
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <span className="font-semibold tracking-tight">AuraAI</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#showcase">Showcase</NavLink>
            </nav>

            <div className="md:hidden text-white/70">
              <Menu className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
