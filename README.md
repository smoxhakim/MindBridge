# 🧠 MindBridge AI

> Bridging the gap between struggle and support with AI-powered mental health care available 24/7

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

MindBridge AI is a modern web application designed to provide accessible, AI-powered mental health support. Built with cutting-edge technologies, it offers a safe, private, and empathetic space for users to discuss their mental health concerns anytime, anywhere.

![MindBridge AI Hero](public/hero.png)

## ✨ Key Features

- **🤖 AI-Powered Conversations** - Natural, empathetic interactions powered by advanced language models
- **🌙 24/7 Availability** - Support whenever you need it, day or night
- **🔒 Privacy & Security** - End-to-end encryption and HIPAA-compliant data protection
- **📊 Mood Tracking** - Visualize your emotional journey with interactive charts
- **🎯 Personalized Support** - Tailored coping strategies based on your needs
- **🚨 Crisis Intervention** - Immediate connection to professional resources when needed
- **🌍 Multi-Language Support** - Accessible in 15+ languages
- **📱 Responsive Design** - Seamless experience across all devices

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **UI Library:** [React 19](https://reactjs.org/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Charts:** [Recharts](https://recharts.org/) & [Chart.js](https://www.chartjs.org/)

### Additional Libraries
- **Forms:** React Hook Form + Zod validation
- **Theme:** next-themes for dark/light mode
- **Date Handling:** date-fns
- **Notifications:** Sonner

## 📁 Project Structure

```
aice/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── ui/                  # shadcn/ui components (50+ components)
│   ├── ai-prototype.tsx     # Interactive AI chat demo
│   ├── business-model.tsx   # Pricing and business model section
│   ├── creative-storytelling.tsx  # User stories and testimonials
│   ├── data-visualization.tsx     # Mental health statistics charts
│   ├── footer.tsx           # Footer component
│   ├── hero.tsx             # Hero section
│   ├── navbar.tsx           # Navigation bar
│   ├── problem-solution.tsx # Problem statement and solution
│   ├── technical-innovation.tsx   # Technical features showcase
│   ├── theme-provider.tsx   # Theme context provider
│   └── user-persona.tsx     # Target audience personas
├── hooks/                   # Custom React hooks
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
├── lib/                     # Utility functions
│   ├── chart-types.ts       # Chart type definitions
│   └── utils.ts             # Helper utilities (cn, etc.)
├── public/                  # Static assets
│   └── hero.png             # Hero image and other assets
├── styles/                  # Additional styles
├── components.json          # shadcn/ui configuration
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/smoxhakim/MindBridge.git
   cd aice
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific configurations:

```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=your_api_url
# OPENAI_API_KEY=your_openai_key
```

## 📦 Build & Deployment

### Production Build

```bash
npm run build
npm run start
```

### Lint Code

```bash
npm run lint
```

### Deploy to Vercel

The easiest way to deploy MindBridge AI is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/smoxhakim/MindBridge)

## 🎨 Customization

### Theme Configuration

The app supports light and dark modes. Theme settings can be found in:
- `app/globals.css` - CSS variables for colors
- `tailwind.config.ts` - Tailwind theme configuration
- `components/theme-provider.tsx` - Theme provider setup

### Adding Components

This project uses [shadcn/ui](https://ui.shadcn.com/). To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🧪 Development Notes

- **TypeScript:** Strict mode enabled for type safety
- **ESLint:** Configured but ignored during builds (see `next.config.mjs`)
- **Images:** Unoptimized for faster development (configure for production)
- **Path Aliases:** `@/` maps to the root directory

## 🌟 Features Breakdown

### AI Prototype
Interactive chat interface demonstrating AI-powered mental health conversations with:
- Real-time message streaming
- Sentiment analysis
- Crisis detection
- Resource recommendations

### Data Visualization
Mental health statistics presented through:
- Interactive charts (Recharts & Chart.js)
- Mood tracking visualizations
- Progress analytics

### Business Model
Three-tier pricing structure:
- **Free:** Basic support and mood tracking
- **Premium:** Advanced features and 24/7 crisis support ($9.99/month)
- **Campus:** Enterprise solution for universities

### Technical Innovation
- GPT-4 integration for natural conversations
- End-to-end encryption
- Multi-platform accessibility
- Global scalability infrastructure

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is private and proprietary. All rights reserved.

## 📧 Contact

**Project Maintainer:** [@smoxhakim](https://github.com/smoxhakim)

**Project Repository:** [MindBridge](https://github.com/smoxhakim/MindBridge)

---

<p align="center">Made with ❤️ for mental health awareness</p>
