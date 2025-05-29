"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function ProblemSolution() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

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

  const stats = [
    {
      value: "75%",
      label: "Mental health conditions begin before age 24",
      color: "from-blue-500 to-violet-500",
    },
    {
      value: "34%",
      label: "Young adults who receive treatment",
      color: "from-emerald-500 to-teal-500",
    },
    {
      value: "25-48",
      label: "Days average wait time for care",
      color: "from-orange-500 to-amber-500",
    },
    {
      value: "60%",
      label: "Cite cost as primary barrier",
      color: "from-red-500 to-pink-500",
    },
  ]

  return (
    <section id="problem-solution" ref={sectionRef} className="section-container py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <h2 className="section-title mb-0 pb-0 border-none">🎯 Problem & Solution</h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-primary"
        >
          <span className="text-sm font-medium">View detailed research</span>
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full overflow-hidden gradient-border transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-xl`} />
                <div className="relative z-10">
                  <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 gradient-text">The Problem</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Long wait times for professional mental health care</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>High costs create barriers to access for many young adults</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Cultural stigma prevents many from seeking help</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Limited availability of mental health professionals</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 gradient-text">Our Solution</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-secondary font-bold">•</span>
              <span>Immediate, 24/7 AI-powered mental health support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary font-bold">•</span>
              <span>Affordable access with freemium model</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary font-bold">•</span>
              <span>Private, judgment-free environment to reduce stigma</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary font-bold">•</span>
              <span>Personalized support based on individual needs</span>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.p
        className="text-xl text-center max-w-3xl mx-auto mt-16 text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <span className="font-bold gradient-text">MindBridge AI</span> provides immediate, personalized mental health
        support to young adults, eliminating wait times and accessibility barriers through intelligent conversational
        AI.
      </motion.p>
    </section>
  )
}
