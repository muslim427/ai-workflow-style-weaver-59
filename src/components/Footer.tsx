import React from 'react';
import { Workflow, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                <Workflow className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold gradient-text">Workflows Ai</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Generate powerful n8n workflows with AI. Transform your automation ideas 
              into reality with natural language processing and intelligent workflow generation.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/_Workflows_Ai" target="_blank" rel="noopener noreferrer" className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Twitter />
              </a>
              <a href="https://www.tiktok.com/@workflows_ai" target="_blank" rel="noopener noreferrer" className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M9 3v12.75A3.75 3.75 0 0012.75 19.5c1.967 0 3.5-1.533 3.5-3.5V9.75h1.25a3.75 3.75 0 003.75-3.75V3h-2v3.75a1.75 1.75 0 01-1.75 1.75H16.25V16a1.75 1.75 0 01-1.75 1.75A1.75 1.75 0 0112.75 16V3H9z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCo5WFHdFCFq9GQfHA6scxjA" target="_blank" rel="noopener noreferrer" className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M19.615 3.184C18.4 2.8 12 2.8 12 2.8s-6.4 0-7.615.384C3.2 3.6 2.8 5.2 2.8 5.2S2.8 8 2.8 10.8v2.4c0 2.8.4 4.4.585 5.616C5.6 21.2 12 21.2 12 21.2s6.4 0 7.615-.384c1.215-.384 1.615-1.984 1.615-1.984s.4-2.8.4-5.6v-2.4c0-2.8-.4-4.4-.585-5.616zM10 15.2V8.8l5.2 3.2-5.2 3.2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Examples</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 WorkflowAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
