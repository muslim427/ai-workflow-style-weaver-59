
import React from 'react';
import { Card } from '@/components/ui/card';
import { Play, Database, Mail, Calendar, CheckCircle } from 'lucide-react';

export function WorkflowPreview() {
  const nodes = [
    { icon: Play, label: 'Trigger', position: 'top-4 left-4', color: 'text-blue-600 dark:text-blue-400' },
    { icon: Database, label: 'Database', position: 'top-4 right-4', color: 'text-indigo-600 dark:text-indigo-400' },
    { icon: Mail, label: 'Email', position: 'bottom-4 left-4', color: 'text-slate-600 dark:text-slate-400' },
    { icon: Calendar, label: 'Schedule', position: 'top-20 left-1/2 -translate-x-1/2', color: 'text-zinc-600 dark:text-zinc-400' },
    { icon: CheckCircle, label: 'Validate', position: 'bottom-4 right-4', color: 'text-neutral-600 dark:text-neutral-400' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            See Your Workflows Come to Life
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Watch as AI transforms your natural language descriptions into visual workflow diagrams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 glass-effect animate-fade-in border border-slate-200/60 dark:border-slate-700/60">
            <div className="relative h-80 bg-gradient-to-br from-slate-50 to-zinc-50 dark:from-slate-900 dark:to-zinc-900 rounded-xl overflow-hidden border border-slate-200/40 dark:border-slate-700/40">
              {/* Workflow connections */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Connection lines */}
                <path d="M 80 60 Q 200 60 200 120" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500 dark:text-blue-400 animate-pulse" />
                <path d="M 200 140 Q 300 140 300 60" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-500 dark:text-indigo-400 animate-pulse" />
                <path d="M 200 140 Q 120 200 80 260" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-500 dark:text-slate-400 animate-pulse" />
                <path d="M 300 80 Q 320 200 300 260" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500 dark:text-zinc-400 animate-pulse" />
              </svg>

              {/* Workflow nodes */}
              {nodes.map((node, index) => (
                <div
                  key={index}
                  className={`absolute ${node.position} transform hover:scale-110 transition-transform duration-300`}
                  style={{ zIndex: 2 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center group hover:shadow-2xl transition-all duration-300">
                    <node.icon className={`h-6 w-6 ${node.color} group-hover:scale-110 transition-transform duration-200`} />
                  </div>
                  <div className="text-xs font-medium text-center mt-2 text-slate-700 dark:text-slate-300">
                    {node.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg border border-slate-200/40 dark:border-slate-700/40">
              <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">User:</span> "Create a workflow that triggers when a new email arrives, 
                validates the sender, saves to database, and schedules a follow-up meeting"
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
