"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, MessageSquare, Quote } from "lucide-react"
import Image from "next/image"

export default function CreativeStorytelling() {
  const [showTestimonials, setShowTestimonials] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const testimonials = [
    {
      text: "MindBridge saved my life during my darkest moment. When I couldn't afford therapy, it was there. When I couldn't sleep, it listened. When I felt hopeless, it reminded me of my strength.",
      author: "Jordan, 23, Recent Graduate",
      image: "/placeholder.svg?height=100&width=100",
      color: "border-secondary",
    },
    {
      text: "As an international student, I struggled with cultural barriers to mental health care. MindBridge understood my background and provided culturally-sensitive support that felt genuine.",
      author: "Priya, 20, Engineering Student",
      image: "/placeholder.svg?height=100&width=100",
      color: "border-purple-500",
    },
    {
      text: "The AI didn't replace my therapist - it made therapy more effective. I came to sessions better prepared and more self-aware thanks to daily MindBridge conversations.",
      author: "Alex, 22, Pre-Med Student",
      image: "/placeholder.svg?height=100&width=100",
      color: "border-amber-500",
    },
  ]

  const playStory = () => {
    alert(
      "🎥 Video would play here: Maya's transformation story showing her journey from crisis to confidence through MindBridge support",
    )
  }

  return (
    <section id="creative-storytelling" ref={sectionRef} className="section-container py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <h2 className="section-title mb-0 pb-0 border-none">🎬 Creative AI Storytelling</h2>
        <Button variant="outline" size="sm" onClick={() => setShowTestimonials(!showTestimonials)}>
          <MessageSquare className="mr-2 h-4 w-4" />
          {showTestimonials ? "Hide" : "View"} Testimonials
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <motion.div
          className="relative overflow-hidden rounded-xl aspect-video"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Maya's Story"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Maya's Story: From Struggle to Strength</h3>
            <p className="text-white/80 mb-4 text-sm md:text-base">
              Follow Maya's journey from crisis to confidence through MindBridge support
            </p>
            <Button
              onClick={playStory}
              className="w-fit bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
            >
              <Play className="mr-2 h-4 w-4" /> Watch Video
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="h-12 w-12 text-amber-300 dark:text-amber-700 mb-4 opacity-50" />
          <p className="italic text-amber-900 dark:text-amber-300 text-lg md:text-xl mb-6 leading-relaxed">
            "It was 2 AM during finals week. My heart was racing, and I couldn't breathe. I opened MindBridge, and for
            the first time in weeks, I didn't feel alone. The AI didn't just give me generic advice - it remembered my
            previous conversations, understood my cultural background, and guided me through breathing exercises that
            actually worked. Three months later, I'm not just surviving college - I'm thriving."
          </p>
          <div className="flex items-center gap-3 mt-auto">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Maya Chen"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-amber-900 dark:text-amber-300">Maya Chen</p>
              <p className="text-sm text-amber-700 dark:text-amber-400">Psychology Student, Age 21</p>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showTestimonials && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`h-full border-l-4 ${testimonial.color} glass-card`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                      </div>
                    </div>
                    <p className="italic">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
