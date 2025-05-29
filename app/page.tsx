import Hero from "@/components/hero"
import ProblemSolution from "@/components/problem-solution"
import AiPrototype from "@/components/ai-prototype"
import UserPersona from "@/components/user-persona"
import DataVisualization from "@/components/data-visualization"
import CreativeStorytelling from "@/components/creative-storytelling"
import TechnicalInnovation from "@/components/technical-innovation"
import BusinessModel from "@/components/business-model"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50/30 dark:from-gray-950 dark:to-gray-900 pt-16">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Hero />
        <ProblemSolution />
        <AiPrototype />
        <UserPersona />
        <DataVisualization />
        <CreativeStorytelling />
        <TechnicalInnovation />
        <BusinessModel />
      </div>
      <Footer />
    </main>
  )
}
