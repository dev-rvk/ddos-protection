'use client'

import { Button } from "@/components/ui/button"
import { ShieldCheck, Zap, Lock, Server, Filter, BarChart, Brain, FileText } from "lucide-react"
import Link from "next/link"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">DDoS Shield</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Distributed DDoS Protection
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Advanced multi-layer defense against distributed denial-of-service attacks.
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6" size="lg">
            Get Protected Now
          </Button>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Advanced Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { icon: <Filter className="h-12 w-12 text-primary" />, title: "L3 Network Layer", description: "Traffic filtering and rate limiting at the network layer" },
              { icon: <Lock className="h-12 w-12 text-primary" />, title: "L7 Application Layer", description: "Web Application Firewall (WAF) for application layer security" },
              { icon: <Brain className="h-12 w-12 text-primary" />, title: "Dynamic Mitigation", description: "AI and ML algorithms for adaptive threat detection" },
              { icon: <FileText className="h-12 w-12 text-primary" />, title: "Advanced Reporting", description: "Comprehensive attack data collection and analysis" },
              { icon: <Zap className="h-12 w-12 text-primary" />, title: "Real-time Mitigation", description: "Instantly detect and mitigate DDoS attacks" },
              { icon: <BarChart className="h-12 w-12 text-primary" />, title: "Traffic Analysis", description: "Deep packet inspection and behavioral analysis" },
              { icon: <Server className="h-12 w-12 text-primary" />, title: "Global Network", description: "Distributed servers for maximum protection" },
              { icon: <ShieldCheck className="h-12 w-12 text-primary" />, title: "Challenge-Response", description: "Intelligent systems to verify legitimate traffic" }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                {feature.icon}
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">© 2023 DDoS Shield Inc. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
    </div>
  )
}