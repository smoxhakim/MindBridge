"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export default function BusinessModel() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic mental health support",
      features: ["Daily check-ins", "Basic coping strategies", "Mood tracking", "Community forums"],
      color: "from-gray-500 to-gray-600",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Advanced personalized support",
      features: [
        "Everything in Free",
        "Unlimited conversations",
        "Personalized coping strategies",
        "Progress analytics",
        "Crisis support 24/7",
      ],
      color: "from-primary to-secondary",
      popular: true,
    },
    {
      name: "Campus",
      price: "Contact",
      description: "For universities and colleges",
      features: [
        "Everything in Premium",
        "Bulk student licenses",
        "Integration with campus resources",
        "Admin dashboard",
        "Custom branding",
      ],
      color: "from-purple-500 to-indigo-500",
      popular: false,
    },
  ]

  const timeline = [
    {
      phase: "Phase 1: Beta Launch",
      period: "Months 1-3",
      items: [
        "Beta testing with 3 universities",
        "Gather user feedback and refine AI model",
        "Establish initial partnerships",
      ],
    },
    {
      phase: "Phase 2: Public Launch",
      period: "Months 4-6",
      items: ["Public launch with freemium model", "Reach 10K active users", "Expand to 10 university partnerships"],
    },
    {
      phase: "Phase 3: Growth",
      period: "Months 7-12",
      items: ["Scale to 100K users", "Expand to 50 campus partnerships", "Launch corporate wellness program"],
    },
    {
      phase: "Phase 4: Expansion",
      period: "Year 2",
      items: [
        "International expansion",
        "Reach 1M users globally",
        "Insurance partnership program",
        "Advanced analytics platform",
      ],
    },
  ]

  return (
    <section id="business-model" ref={sectionRef} className="section-container py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <h2 className="section-title mb-0 pb-0 border-none">💼 Business Model & Implementation</h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-primary"
        >
          <span className="text-sm font-medium">Download full business plan</span>
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>

      <div className="mb-16">
        <motion.h3
          className="text-xl font-semibold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Pricing & Revenue Streams
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.popular ? "border-primary dark:border-primary" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-1">{plan.name}</h4>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-sm mb-1">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check
                        className={`h-5 w-5 shrink-0 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {plan.popular ? "Get Started" : "Learn More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      <motion.h3
        className="text-xl font-semibold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Implementation Timeline
      </motion.h3>

      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50 hidden md:block" />

        <div className="space-y-8 relative">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="md:grid md:grid-cols-5 gap-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 hidden md:block" />

              <div className="md:col-span-1 mb-2 md:mb-0 md:text-right pr-8">
                <h4 className="font-semibold text-primary">{item.phase}</h4>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </div>

              <Card className="md:col-span-4 glass-card border-0">
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {item.items.map((listItem, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
