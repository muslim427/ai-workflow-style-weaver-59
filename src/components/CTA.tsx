import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto glass-effect p-12 rounded-3xl animate-fade-in">
          <div className="inline-flex items-center rounded-full px-4 py-2 mb-6 bg-primary/10">
            <Sparkles className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Transform Your Ideas into 
            <br />
            Powerful Automations Today
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already automating their workflows with AI. 
            Start building your first workflow in minutes, not hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl animate-glow">
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl glass-effect">
              View Examples
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            {/* Removed text */}
          </p>
        </div>
      </div>
    </section>
  );
}
