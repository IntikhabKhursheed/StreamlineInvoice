import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Streamline Your Business
            <span className="text-primary block">Operations Today</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Transform your workflow with our powerful SaaS platform. Automate processes, boost productivity, and scale
            your business with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-muted bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <div className="mt-12">
            <img
              src="/modern-analytics-dashboard.png"
              alt="StreamLine Dashboard Preview"
              className="rounded-lg shadow-2xl mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
