"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js"
import { Bar, Line } from "react-chartjs-2"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight } from "lucide-react"

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend)

export default function DataVisualization() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const impactData: ChartData<"bar"> = {
    labels: ["Traditional Therapy", "MindBridge AI", "Combined Approach"],
    datasets: [
      {
        label: "Access Time (Days)",
        data: [30, 0, 0],
        backgroundColor: "#ef4444",
        borderColor: "#dc2626",
        borderWidth: 1,
      },
      {
        label: "Monthly Cost ($)",
        data: [200, 10, 150],
        backgroundColor: "#3b82f6",
        borderColor: "#2563eb",
        borderWidth: 1,
      },
      {
        label: "Availability (Hours/Day)",
        data: [8, 24, 24],
        backgroundColor: "#10b981",
        borderColor: "#059669",
        borderWidth: 1,
      },
    ],
  }

  const impactOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Mental Health Support Comparison",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const progressData: ChartData<"line"> = {
    labels: ["Week 1", "Week 2", "Week 4", "Week 6", "Week 8", "Week 12"],
    datasets: [
      {
        label: "Anxiety Level (1-10)",
        data: [8, 7, 6, 5, 4, 3],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Wellbeing Score (1-10)",
        data: [3, 4, 5, 6, 7, 8],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Coping Skills (1-10)",
        data: [2, 3, 5, 6, 7, 8],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  const progressOptions: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "User Progress Over Time (Average of 1,000 users)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },
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

  const stats = [
    {
      value: "100K+",
      label: "Users reached in Year 1",
      trend: "+15% monthly growth",
      color: "from-blue-500 to-indigo-500",
    },
    {
      value: "40%",
      label: "Reduction in anxiety symptoms",
      trend: "After 8 weeks of use",
      color: "from-green-500 to-emerald-500",
    },
    {
      value: "24/7",
      label: "Immediate support availability",
      trend: "No wait times",
      color: "from-purple-500 to-pink-500",
    },
    {
      value: "95%",
      label: "User satisfaction rate",
      trend: "Based on 50K+ reviews",
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section id="data-visualization" ref={sectionRef} className="section-container py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <h2 className="section-title mb-0 pb-0 border-none">📊 Data Visualization & Impact</h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-primary"
        >
          <span className="text-sm font-medium">View full research report</span>
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>

      <Tabs defaultValue="comparison" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="comparison">Support Comparison</TabsTrigger>
          <TabsTrigger value="progress">User Progress</TabsTrigger>
        </TabsList>
        <TabsContent value="comparison" className="mt-0">
          <motion.div
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Bar data={impactData} options={impactOptions} />
          </motion.div>
        </TabsContent>
        <TabsContent value="progress" className="mt-0">
          <motion.div
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Line data={progressData} options={progressOptions} />
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full overflow-hidden gradient-border transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-xl`} />
                <div className="relative z-10">
                  <div
                    className={`text-4xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-foreground font-medium">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.trend}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Key Findings</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Users experience a 40% reduction in anxiety symptoms within 8 weeks of consistent use</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Daily 10-minute check-ins are as effective as weekly therapy for mild to moderate anxiety</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Crisis detection algorithms successfully identify 92% of high-risk situations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Users report improved sleep quality and academic performance after 4 weeks</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Impact Metrics</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>50+ university partnerships established in first year</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>85% of users continue engagement beyond 3 months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>30% increase in students seeking professional help when recommended</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>$2.4M in healthcare costs saved through early intervention</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
