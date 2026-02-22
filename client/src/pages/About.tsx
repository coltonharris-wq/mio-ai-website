/**
 * About Us Page
 * Design Philosophy: Neo-Brutalism meets Tech Minimalism
 * Focus: Human-centered AI automation story
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Heart,
  Users,
  Lightbulb,
  ArrowRight,
  Target,
  Zap,
  Shield
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-foreground">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="text-2xl font-black tracking-tight cursor-pointer" style={{ fontFamily: 'var(--font-display)' }}>
                Auto<span className="text-primary">mio</span>
              </div>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/about">
                <span className="font-bold text-primary cursor-pointer">About</span>
              </Link>
              <Button asChild className="brutalist-border brutalist-shadow bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              We're Building AI That <span className="text-primary">Empowers Humans</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              At Automio, we believe technology should amplify human potential, not replace it. We're on a mission to give every business the tools to work smarter, connect deeper, and grow faster—without losing the human touch.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Heart className="w-12 h-12 text-primary" />
              <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                Our Story
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Automio was born from a simple observation: businesses everywhere were drowning in repetitive tasks, missing customer calls, and losing opportunities—not because they didn't care, but because there simply weren't enough hours in the day.
              </p>
              <p>
                We saw talented teams spending their time on data entry instead of strategy. We watched passionate entrepreneurs miss family dinners to answer support tickets. We heard customers hang up after waiting on hold, frustrated that no one was there to help them.
              </p>
              <p className="text-foreground font-semibold text-xl">
                So we asked ourselves: What if AI could handle the busywork, so humans could focus on what they do best—building relationships, solving complex problems, and creating meaningful impact?
              </p>
              <p>
                That's why we built Automio. Not to replace people, but to give them superpowers. Our AI agents work alongside your team, handling the routine so your people can focus on the remarkable. They answer calls at 3 AM so you don't have to. They qualify leads while you're closing deals. They manage schedules so you can manage your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Human-First Technology
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We design AI that enhances human capabilities, not replaces them. Every feature we build asks: "Does this give people more time for what matters?"
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Lightbulb className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Radical Transparency
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No hidden fees. No confusing jargon. No black boxes. We explain how our AI works, what it costs, and exactly what results you can expect.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Obsessive Reliability
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When you trust us with your customers, we take that seriously. Our systems are built for 99.9% uptime because every missed call is a missed opportunity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Target className="w-12 h-12 text-primary" />
              <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                Our Mission
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-2xl font-bold text-foreground">
                To democratize AI automation so every business—from solo entrepreneurs to enterprise teams—can compete, grow, and thrive in the modern economy.
              </p>
              <p className="text-muted-foreground">
                We believe small businesses shouldn't need a six-figure budget to access world-class AI. We believe your team shouldn't have to choose between growth and burnout. We believe technology should feel like a teammate, not a threat.
              </p>
              <p className="text-muted-foreground">
                That's why we're building AI agents that are <span className="text-primary font-bold">affordable, easy to deploy, and actually work</span>. No PhD required. No six-month implementation. Just powerful automation that starts delivering value from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Philosophy */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Built by Humans, For Humans
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our team is a mix of engineers, designers, and former business owners who've felt the pain of manual processes firsthand. We've answered the midnight support tickets. We've lost deals because we couldn't respond fast enough. We've missed our kids' soccer games because we were "too busy."
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              That's why we're so passionate about what we're building. <span className="text-foreground font-bold">Automio isn't just software to us—it's the tool we wish we'd had when we were in your shoes.</span>
            </p>
            <Card className="brutalist-border brutalist-shadow bg-primary text-primary-foreground p-12">
              <p className="text-2xl md:text-3xl font-bold leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
                "We're not trying to build a world without work. We're building a world where work doesn't consume your life—where AI handles the mundane so you can focus on the meaningful."
              </p>
              <p className="text-lg mt-6 opacity-90">— The Automio Team</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-background/80 max-w-3xl mx-auto">
            Join thousands of businesses using Automio to work smarter, grow faster, and live better.
          </p>
          <Button asChild size="lg" className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-7 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none">
            <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">
              Book Your Demo <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t-4 border-foreground">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/">
                <div className="text-2xl font-black mb-4 cursor-pointer" style={{ fontFamily: 'var(--font-display)' }}>
                  Auto<span className="text-primary">mio</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm">
                Intelligent automation for ambitious businesses.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/ai-receptionist"><span className="hover:text-primary cursor-pointer">AI Receptionist</span></Link></li>
                <li><Link href="/ai-automation"><span className="hover:text-primary cursor-pointer">AI Automation</span></Link></li>
                <li><Link href="/lead-generation"><span className="hover:text-primary cursor-pointer">Lead Generation</span></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about"><span className="hover:text-primary cursor-pointer">About Us</span></Link></li>
                <li><a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Careers</a></li>
                <li><a href="mailto:mouse@automioapp.com" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:mouse@automioapp.com" className="hover:text-primary">mouse@automioapp.com</a></li>
                <li><a href="tel:9105158927" className="hover:text-primary">(910) 515-8927</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              &copy; 2026 Automio. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 font-bold text-sm">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors underline">Privacy Policy</Link>
              <span>|</span>
              <Link href="/sms-terms" className="hover:text-primary transition-colors underline">SMS Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
