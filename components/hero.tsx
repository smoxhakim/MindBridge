"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Brain, Heart, Shield } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("problem-solution")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const features = [
    {
      icon: <Brain className="h-5 w-5" />,
      text: "AI-Powered Support",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      text: "24/7 Availability",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Private & Secure",
    },
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-primary-foreground font-medium text-sm"
            >
              Your Mental Health Companion
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance"
            >
              <span className="gradient-text">MindBridge AI</span>
              <br />
              <span className="text-foreground">
                Bridging Struggle <br className="hidden sm:block" />
                with Support
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Your personal AI companion providing immediate, personalized mental health support available 24/7, making
              care accessible to everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                onClick={scrollToNextSection}
              >
                Get Started
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToNextSection}>
                Learn More
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-background dark:bg-gray-800 rounded-full shadow-sm"
                >
                  <div className="text-primary">{feature.icon}</div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Image
                    src="/hero.png"
                    alt="MindBridge AI"
                    width={400}
                    height={400}
                    className="object-contain animate-float"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-primary rounded-full animate-float" />
            <div
              className="absolute bottom-1/4 -right-4 w-8 h-8 bg-secondary rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
