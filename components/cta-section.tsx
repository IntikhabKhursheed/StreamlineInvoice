import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
            Join thousands of companies already using StreamLine to streamline their operations and accelerate growth.
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
