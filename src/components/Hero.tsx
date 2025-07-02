
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent dark:from-slate-900/20 dark:to-transparent pointer-events-none" />
      
      <div className="container mx-auto text-center relative">
        <div className="animate-fade-in">
          <div className="inline-flex items-center rounded-full px-4 py-2 mb-8 glass-effect border border-slate-200/60 dark:border-slate-700/60">
            <Sparkles className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">AI-Powered Workflow Generation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Generate{' '}
            <span className="gradient-text-accent">
              n8n Workflows
            </span>
            <br />
            with AI Magic
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into powerful automation workflows instantly. 
            Just describe what you want, and our AI creates production-ready n8n workflows for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 animate-glow shadow-lg shadow-slate-900/10 dark:shadow-slate-100/10">
              Start Creating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl glass-effect border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="animate-slide-up delay-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-2xl text-center card-hover border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center shadow-sm">
                <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">AI-Powered</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Advanced AI understands your requirements and generates optimal workflows
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl text-center card-hover border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 flex items-center justify-center shadow-sm">
                <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Instant Results</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Get production-ready workflows in seconds, not hours
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl text-center card-hover border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-slate-50 to-zinc-50 dark:from-slate-800/50 dark:to-zinc-800/50 flex items-center justify-center shadow-sm">
                <Sparkles className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Smart Optimization</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Automatically optimized for performance and best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
