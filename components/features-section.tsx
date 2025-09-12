import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, BarChart3, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process data and automate workflows at incredible speeds with our optimized infrastructure.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance with industry standards.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your business with real-time analytics and customizable dashboards.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team with built-in communication and project management tools.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Powerful Features for Modern Businesses</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Everything you need to streamline your operations and accelerate growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
