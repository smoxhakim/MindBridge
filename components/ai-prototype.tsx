"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, AlertTriangle, Globe, LineChart, Send, Bot, User, Sparkles } from "lucide-react"
import Image from "next/image"

type Message = {
  text: string
  isUser: boolean
}

export default function AiPrototype() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm MindBridge, your personal mental health companion. I'm here to listen and support you. How are you feeling today?",
      isUser: false,
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [activeDemo, setActiveDemo] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const responses = {
    hello: "Hi there! I'm so glad you reached out. How are you feeling right now?",
    anxious:
      "I hear that you're feeling anxious. That's completely understandable - anxiety can be really overwhelming. Can you tell me what's contributing to these feelings today?",
    stressed:
      "Stress can feel so heavy sometimes. I'm here to help you work through this. What's been the biggest source of stress for you lately?",
    sad: "I'm sorry you're feeling sad. It takes courage to acknowledge these feelings. Would you like to talk about what's been weighing on your heart?",
    help: "I'm here to support you in whatever way I can. Whether you need someone to listen, coping strategies, or connection to professional resources, I'm here. What would be most helpful right now?",
    crisis:
      "I can hear that you're in a lot of pain right now, and I want you to know that you're not alone. Your life has value, and there are people who want to help. Can I connect you with a crisis counselor right now?",
    default:
      "Thank you for sharing that with me. I'm here to listen and support you. Can you tell me more about how you're feeling?",
  }

  const getAIResponse = (message: string) => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return responses.hello
    } else if (lowerMessage.includes("anxious") || lowerMessage.includes("anxiety")) {
      return responses.anxious
    } else if (lowerMessage.includes("stress") || lowerMessage.includes("overwhelmed")) {
      return responses.stressed
    } else if (lowerMessage.includes("sad") || lowerMessage.includes("depressed")) {
      return responses.sad
    } else if (lowerMessage.includes("help") || lowerMessage.includes("support")) {
      return responses.help
    } else if (lowerMessage.includes("crisis") || lowerMessage.includes("suicidal")) {
      return responses.crisis
    } else {
      return responses.default
    }
  }

  const sendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: inputValue, isUser: true }])
    setInputValue("")

    // Show typing indicator
    setIsTyping(true)

    // Simulate AI response after delay
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [...prev, { text: getAIResponse(inputValue), isUser: false }])
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  const showDemo = () => {
    setActiveDemo("standard")
    // Reset chat
    setMessages([
      {
        text: "Hi! I'm MindBridge, your personal mental health companion. I'm here to listen and support you. How are you feeling today?",
        isUser: false,
      },
    ])

    // Auto-demo conversation
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I've been feeling really overwhelmed with school lately",
          isUser: true,
        },
      ])

      setIsTyping(true)

      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [
          ...prev,
          {
            text: "I hear that you're feeling overwhelmed with school. That sounds really challenging. Academic pressure can be intense. Can you tell me what specifically has been feeling most overwhelming? Is it the workload, time management, or perhaps something else?",
            isUser: false,
          },
        ])
      }, 1500)
    }, 2000)
  }

  const showCrisisDemo = () => {
    setActiveDemo("crisis")
    // Reset chat
    setMessages([
      { text: "Hi! I'm MindBridge. I'm here to support you no matter what you're going through.", isUser: false },
    ])

    // Auto-demo conversation
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I don't think I can handle this anymore",
          isUser: true,
        },
      ])

      setIsTyping(true)

      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [
          ...prev,
          {
            text: "I can hear that you're in a lot of pain right now, and I want you to know that you're not alone. Your life has value, and there are people who want to help. I'm connecting you with a crisis counselor right now. In the meantime, let's try some grounding techniques together. Can you tell me 5 things you can see around you?",
            isUser: false,
          },
        ])

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: "🚨 Crisis Support Activated: Connecting to National Suicide Prevention Lifeline (988)",
              isUser: false,
            },
          ])
        }, 2000)
      }, 2000)
    }, 2000)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  const features = [
    {
      icon: <Brain className="h-5 w-5 text-primary" />,
      title: "Emotional Intelligence",
      description: "Advanced NLP analyzes tone, sentiment, and emotional patterns to provide personalized responses.",
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: "Crisis Detection",
      description: "Real-time risk assessment identifies users in distress and provides immediate intervention.",
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: "Cultural Awareness",
      description: "Adapts communication style based on cultural background and personal preferences.",
    },
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: "Progress Tracking",
      description: "Monitors mental health improvements using validated assessment tools.",
    },
  ]

  return (
    <section id="ai-prototype" ref={sectionRef} className="section-container py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <h2 className="section-title mb-0 pb-0 border-none">💬 AI Prototype Demo</h2>
        <div className="flex gap-2">
          <Button
            variant={activeDemo === "standard" ? "default" : "outline"}
            size="sm"
            onClick={showDemo}
            className={activeDemo === "standard" ? "bg-gradient-to-r from-primary to-secondary" : ""}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Standard Demo
          </Button>
          <Button
            variant={activeDemo === "crisis" ? "default" : "outline"}
            size="sm"
            onClick={showCrisisDemo}
            className={activeDemo === "crisis" ? "bg-gradient-to-r from-red-500 to-orange-500" : ""}
          >
            <AlertTriangle className="mr-2 h-4 w-4" />
            Crisis Demo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 flex flex-col h-[600px] rounded-xl overflow-hidden glass-morphism"
        >
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center gap-3">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">MindBridge AI - Your Safe Space</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
            <AnimatePresence initial={false}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={message.isUser ? "chat-bubble-user" : "chat-bubble-ai"}
                >
                  <div className="flex items-start gap-2">
                    <div className="shrink-0 mt-1">
                      {message.isUser ? (
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <User className="h-3 w-3" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <Bot className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    <div>{message.text}</div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="chat-bubble-ai"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Bot className="h-3 w-3" />
                    </div>
                    <div className="flex gap-1">
                      <span className="animate-bounce">•</span>
                      <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                        •
                      </span>
                      <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                        •
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 rounded-full bg-background"
            />
            <Button onClick={sendMessage} size="icon" className="rounded-full bg-primary hover:bg-primary/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          <motion.div variants={item} className="mb-4">
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse-slow" />
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="MindBridge AI Demo"
                width={500}
                height={300}
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="sm"
                  className="bg-white/90 dark:bg-gray-900/90 text-primary hover:bg-white dark:hover:bg-gray-900"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Watch Demo Video
                </Button>
              </div>
            </div>
          </motion.div>

          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full gradient-border overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-md">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
