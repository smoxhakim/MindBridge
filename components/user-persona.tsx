"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function UserPersona() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const steps = [
    {
      number: 1,
      title: "Discovery",
      description: "Finds MindBridge through campus mental health resources during high-stress midterm period",
    },
    {
      number: 2,
      title: "Onboarding",
      description: "Completes brief mental health assessment, AI learns her communication preferences",
    },
    {
      number: 3,
      title: "Daily Use",
      description: "10-15 minute check-ins, practices personalized coping strategies, tracks mood patterns",
    },
    {
      number: 4,
      title: "Crisis Support",
      description: "During panic attack, AI provides immediate grounding techniques and connects to campus counseling",
    },
    {
      number: 5,
      title: "Progress",
      description: "Reduces anxiety episodes by 40%, improves sleep quality, becomes peer advocate for mental health",
    },
  ]

  return (
    <section id="user-persona" ref={sectionRef} className="section-container py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <h2 className="section-title mb-0 pb-0 border-none">👤 User Persona & Journey</h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-primary"
        >
          <span className="text-sm font-medium">View all personas</span>
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
        <motion.div
          className="lg:col-span-2 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-video relative overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Maya Chen"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Maya Chen</h3>
                <p className="text-purple-100">Psychology Student, Age 21</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold mb-2">
                  Background
                </h4>
                <p>First-generation college student balancing academic pressure with mental health challenges</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold mb-2">
                  Pain Points
                </h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>High anxiety during exam periods</li>
                  <li>Limited access to campus counseling</li>
                  <li>Cultural stigma around mental health</li>
                  <li>Financial constraints for therapy</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold mb-2">
                  Goals
                </h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Maintain academic performance</li>
                  <li>Develop healthy coping mechanisms</li>
                  <li>Find affordable mental health support</li>
                  <li>Balance cultural expectations with self-care</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-3 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-amber-800 dark:text-amber-400 mb-6">
            Maya's Journey with MindBridge
          </h3>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card border-0">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <span className="font-semibold text-amber-800 dark:text-amber-400">{step.title}:</span>{" "}
                      {step.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <span className="text-green-600 dark:text-green-400 text-xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Personalized Support</h3>
            <p className="text-muted-foreground">
              MindBridge adapts to Maya's specific needs, learning her communication style and cultural background to
              provide relevant support.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-xl">⏱️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Immediate Access</h3>
            <p className="text-muted-foreground">
              Unlike traditional therapy with long wait times, Maya can access support exactly when she needs it, even
              at 2 AM during finals week.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-xl">📈</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Measurable Progress</h3>
            <p className="text-muted-foreground">
              Through consistent use, Maya experiences a 40% reduction in anxiety episodes and improved academic
              performance.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
