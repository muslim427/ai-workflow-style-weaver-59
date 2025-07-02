
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  MessageSquare, 
  Download, 
  Zap 
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Language Input',
      description: 'Describe your workflow in plain English. Our AI understands complex automation requirements and converts them into actionable workflows.',
      color: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Download,
      title: 'Export to n8n',
      description: 'Download your generated workflows as n8n-compatible JSON files, ready to import and run in your n8n instance.',
      color: 'from-slate-50 to-zinc-50 dark:from-slate-800/20 dark:to-zinc-800/20',
      iconColor: 'text-slate-600 dark:text-slate-400'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate complex workflows in seconds. What used to take hours now happens instantly with AI assistance.',
      color: 'from-stone-50 to-slate-50 dark:from-stone-800/20 dark:to-slate-800/20',
      iconColor: 'text-stone-600 dark:text-stone-400'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 workflow-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Powerful Features for Modern Automation
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Everything you need to create, optimize, and deploy sophisticated n8n workflows 
            with the power of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 glass-effect card-hover animate-fade-in border border-slate-200/60 dark:border-slate-700/60"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-sm`}>
                <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
