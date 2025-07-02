# WorkflowAI Design System Documentation

## Overview
This document outlines the complete design system for WorkflowAI, an AI-powered n8n workflow generator. The design follows a sophisticated black and white theme with subtle color accents and professional aesthetics.

## Color Palette

### Primary Colors (HSL Format)
- **Background**: `0 0% 100%` (Light) / `240 10% 4%` (Dark)
- **Foreground**: `0 0% 3.9%` (Light) / `0 0% 98%` (Dark)
- **Primary**: `240 6% 10%` (Light) / `0 0% 98%` (Dark)
- **Secondary**: `240 5% 96%` (Light) / `240 4% 16%` (Dark)
- **Muted**: `240 5% 96%` (Light) / `240 4% 16%` (Dark)
- **Accent**: `240 5% 96%` (Light) / `240 4% 16%` (Dark)

### Extended Color Palette
#### Slate Colors (Primary Gray Scale)
- slate-50: `210 40% 98%` - Ultra light backgrounds
- slate-100: `210 40% 96%` - Light backgrounds
- slate-200: `214 32% 91%` - Borders, dividers
- slate-300: `213 27% 84%` - Disabled states
- slate-400: `215 20% 65%` - Placeholder text
- slate-500: `215 16% 47%` - Secondary text
- slate-600: `215 19% 35%` - Primary text (light mode)
- slate-700: `215 25% 27%` - Headers, emphasis
- slate-800: `217 33% 17%` - Dark backgrounds
- slate-900: `222 84% 5%` - Darkest elements
- slate-950: `229 84% 2%` - Ultra dark

#### Accent Colors
##### Blue (Primary Accent)
- blue-50: `214 100% 97%` - Light backgrounds
- blue-400: `213 94% 68%` - Interactive elements
- blue-600: `221 83% 53%` - Primary actions

##### Indigo (Secondary Accent)
- indigo-50: `226 100% 97%` - Subtle highlights
- indigo-400: `234 89% 74%` - Secondary actions
- indigo-600: `243 75% 59%` - Emphasis elements

#### Neutral Variations
- **Zinc**: Cool neutral tones for cards and containers
- **Stone**: Warm neutral tones for subtle variations
- **Neutral**: Pure neutral tones for text and backgrounds

## Typography

### Font Families
- **Primary**: System font stack with Inter-like characteristics
- **Display**: Same as primary but with gradient text effects
- **Mono**: Monospace for code and technical content

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Text Sizes
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)
- 6xl: 3.75rem (60px)
- 7xl: 4.5rem (72px)

## Design Tokens

### Spacing Scale
- 1: 0.25rem (4px)
- 2: 0.5rem (8px)
- 3: 0.75rem (12px)
- 4: 1rem (16px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 12: 3rem (48px)
- 16: 4rem (64px)
- 20: 5rem (80px)

### Border Radius
- sm: `calc(var(--radius) - 4px)`
- md: `calc(var(--radius) - 2px)`
- lg: `var(--radius)` (0.75rem)
- xl: 0.75rem
- 2xl: 1rem
- 3xl: 1.5rem

### Shadows
- sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- md: `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- lg: `0 10px 15px -3px rgb(0 0 0 / 0.1)`
- xl: `0 20px 25px -5px rgb(0 0 0 / 0.1)`

## Custom Utility Classes

### Glass Effect
```css
.glass-effect {
  backdrop-filter: blur(16px);
  background: hsl(var(--background) / 0.85);
  border: 1px solid hsl(var(--border) / 0.3);
  box-shadow: 0 4px 32px hsl(240 6% 10% / 0.05);
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(to right, zinc-900, slate-800, zinc-900);
  background-clip: text;
  color: transparent;
}

.gradient-text-accent {
  background: linear-gradient(to right, blue-600, indigo-600, blue-600);
  background-clip: text;
  color: transparent;
}
```

### Card Hover Effects
```css
.card-hover {
  transition: all 0.3s ease;
  hover: transform: translateY(-4px);
  hover: shadow: enhanced;
}
```

## Components

### Current Components
1. **Header** - Navigation with logo, menu items, and theme toggle
2. **Hero** - Main landing section with CTA buttons
3. **Features** - Three-column feature grid
4. **WorkflowPreview** - Interactive workflow visualization
5. **CTA** - Call-to-action section
6. **Footer** - Site footer with links and branding, including social media links: Twitter, TikTok, YouTube
7. **ThemeToggle** - Light/Dark/System mode switcher

### Component Patterns
- Glass morphism effects for overlays
- Subtle gradients for backgrounds
- Hover animations and transitions
- Responsive grid layouts
- Card-based content organization

## Animations

### Keyframes
- **fade-in**: Opacity and translate-y animation
- **slide-up**: Slide from bottom with opacity
- **glow**: Pulsing glow effect for CTAs
- **shimmer**: Sliding highlight effect

### Timing
- Fast: 0.2s
- Normal: 0.3s
- Slow: 0.6s-0.8s

## Icons
- **Library**: Lucide React
- **Style**: Outline style, consistent stroke width
- **Sizes**: 16px (h-4 w-4), 20px (h-5 w-5), 24px (h-6 w-6)

## Layout Patterns

### Grid Systems
- Mobile: 1 column
- Tablet: 2-3 columns
- Desktop: 3-4 columns max

### Container Widths
- Mobile: Full width with padding
- Desktop: Max-width with centered alignment
- Content: 4xl-5xl max widths for readability

## What You Can Add

### Color Enhancements
1. **Accent Color Variations**
   - Green accents for success states
   - Orange/Yellow for warnings
   - Red for errors or destructive actions
   - Purple for premium features

2. **Semantic Colors**
   - Success: green-500/green-600
   - Warning: amber-500/orange-500  
   - Error: red-500/red-600
   - Info: blue-500/cyan-500

### New Components You Can Add
1. **Navigation Enhancements**
   - Breadcrumbs
   - Sidebar navigation
   - Mobile hamburger menu
   - Search bar

2. **Content Components**
   - Testimonials section
   - Pricing tables
   - FAQ accordion
   - Blog/news cards
   - Team member cards

3. **Interactive Elements**
   - Workflow builder interface
   - Code editor with syntax highlighting
   - Progress indicators
   - Step-by-step wizards
   - Modal dialogs

4. **Data Visualization**
   - Charts and graphs (using Recharts)
   - Workflow flow diagrams
   - Statistics dashboards
   - Progress meters

5. **Form Components**
   - Contact forms
   - Workflow generation forms
   - User authentication forms
   - Settings panels

6. **Marketing Components**
   - Feature comparison tables
   - Integration showcase
   - Success metrics
   - Case studies

### Advanced Features
1. **Workflow Builder**
   - Drag-and-drop interface
   - Node connection system
   - Property panels
   - Preview functionality

2. **Dashboard**
   - Workflow management
   - Usage analytics
   - User workspace
   - Export history

3. **Authentication**
   - Login/signup forms
   - User profiles
   - Account settings
   - Subscription management

### Theme Variations
1. **Seasonal Themes**
   - Holiday color schemes
   - Seasonal accent colors
   - Special event styling

2. **Brand Variations**
   - Corporate theme
   - Developer-focused theme
   - Minimalist theme
   - High-contrast accessibility theme

### Accessibility Enhancements
1. **Color Blind Support**
   - Pattern-based differentiators
   - High contrast options
   - Alternative color schemes

2. **Motion Preferences**
   - Reduced motion options
   - Toggle for animations
   - Static alternatives

## Best Practices

### Color Usage
- Use slate colors for main content
- Blue/indigo for interactive elements
- Maintain 4.5:1 contrast ratio minimum
- Test in both light and dark modes

### Typography
- Maintain consistent hierarchy
- Use gradient text sparingly for emphasis
- Ensure readability across all devices

### Spacing
- Use consistent spacing scale
- Maintain visual rhythm
- Provide breathing room around elements

### Performance
- Optimize glass effects for performance
- Use CSS transforms for animations
- Minimize layout shifts

This design system provides a solid foundation for expanding your WorkflowAI application while maintaining visual consistency and professional aesthetics.
