import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Workflow, Github, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow-sm">
            <Workflow className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          </div>
          <span className="text-xl font-bold gradient-text">Workflows Ai</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
            Dashboard
          </a>
          <a href="#examples" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
            Examples
          </a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Button size="sm" className="hidden sm:flex bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900">
            Get Started
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden hover:bg-slate-100 dark:hover:bg-slate-800">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
