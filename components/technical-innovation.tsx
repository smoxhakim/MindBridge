"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Lock, Smartphone, Globe } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TechnicalInnovation() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Bot className="h-6 w-6 text-primary" />,
      title: "Advanced AI Architecture",
      items: [
        { label: "GPT-4 Integration", description: "Natural language processing for human-like conversations" },
        { label: "Sentiment Analysis", description: "Real-time emotional state detection" },
        { label: "Risk Assessment", description: "Predictive models for crisis intervention" },
      ],
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Privacy & Security",
      items: [
        { label: "End-to-End Encryption", description: "All conversations protected" },
        { label: "HIPAA Compliance", description: "Healthcare-grade data protection" },
        { label: "Anonymous Mode", description: "Optional identity protection" },
      ],
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Multi-Platform Access",
      items: [
        { label: "Mobile App", description: "iOS and Android native applications" },
        { label: "Web Platform", description: "Browser-based access" },
        { label: "API Integration", description: "Campus counseling system connectivity" },
      ],
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Scalability",
      items: [
        { label: "Multi-Language Support", description: "15+ languages at launch" },
        { label: "Cultural Adaptation", description: "Region-specific therapeutic approaches" },
        { label: "Cloud Infrastructure", description: "Supports millions of concurrent users" },
      ],
    },
  ]

  const techTabs = [
    {
      value: "ai",
      label: "AI Architecture",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Core AI Components</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">Natural Language Understanding</span>
                  <p className="text-sm text-muted-foreground">
                    Advanced contextual understanding of emotional cues and mental health terminology
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">Emotion Recognition</span>
                  <p className="text-sm text-muted-foreground">
                    Identifies subtle emotional patterns in text to gauge user mental state
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">Personalization Engine</span>
                  <p className="text-sm text-muted-foreground">
                    Adapts responses based on user history, preferences, and cultural background
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Technical Specifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">Model Architecture</span>
                  <p className="text-sm text-muted-foreground">
                    Fine-tuned GPT-4 with specialized mental health training data
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">Response Time</span>
                  <p className="text-sm text-muted-foreground">
                    &lt;500ms average response generation for immediate support
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">Continuous Learning</span>
                  <p className="text-sm text-muted-foreground">
                    Self-improving system with regular model updates based on anonymized interaction data
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      value: "security",
      label: "Security",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Data Protection</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">End-to-End Encryption</span>
                  <p className="text-sm text-muted-foreground">
                    AES-256 encryption for all user conversations and personal data
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">Zero Knowledge Architecture</span>
                  <p className="text-sm text-muted-foreground">
                    System designed so even administrators cannot access unencrypted user data
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">Data Minimization</span>
                  <p className="text-sm text-muted-foreground">
                    Only essential information collected, with automatic deletion after 90 days
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Compliance</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">HIPAA Compliance</span>
                  <p className="text-sm text-muted-foreground">
                    Meets all healthcare data protection requirements in the US
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">GDPR Compliance</span>
                  <p className="text-sm text-muted-foreground">
                    Full compliance with European data protection regulations
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <div>
                  <span className="font-medium">Regular Audits</span>
                  <p className="text-sm text-muted-foreground">
                    Quarterly security audits by independent third-party security firms
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      value: "platforms",
      label: "Platforms",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mobile Apps</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>Native iOS application</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>Native Android application</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>Offline support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>Push notifications</span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Web Platform</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>Progressive Web App</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>Cross-browser compatibility</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>Responsive design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>Accessibility compliant</span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <Bot className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">API Integration</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">•</span>
                <span>RESTful API</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">•</span>
                <span>GraphQL support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">•</span>
                <span>Webhook notifications</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">•</span>
                <span>SDK for developers</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

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

  return (
    <section id="technical-innovation" ref={sectionRef} className="section-container py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <h2 className="section-title mb-0 pb-0 border-none">🚀 Technical Innovation & Scalability</h2>
      </div>

      <Tabs defaultValue="ai" className="mb-10">
        <TabsList className="mb-6">
          {techTabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {techTabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
            >
              {tab.content}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full gradient-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-md">{feature.icon}</div>
                  <h3 className="text-lg font-semibold gradient-text">{feature.title}</h3>
                </div>

                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <span className="font-medium">{item.label}:</span>{" "}
                        <span className="text-muted-foreground">{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
