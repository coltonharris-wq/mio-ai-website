/**
 * Lead Generation Service Page
 * Design Philosophy: Neo-Brutalism meets Tech Minimalism
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart, 
  DollarSign, 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";

export default function LeadGeneration() {
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
            <Button asChild className="brutalist-border brutalist-shadow bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container">
          <Link href="/">
            <Button variant="outline" className="brutalist-border mb-8 hover:bg-foreground hover:text-background">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Button>
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-12 h-12 text-primary" />
                </div>
                <h1 className="text-5xl md:text-6xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                  Lead Generation
                </h1>
              </div>
              <p className="text-2xl mb-8 text-muted-foreground leading-relaxed">
                Guaranteed qualified leads delivered monthly at a fixed cost. No more unpredictable marketing spend—just consistent, high-quality prospects ready to convert.
              </p>
              <Button asChild size="lg" className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none">
                <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Schedule Consultation <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
            <div>
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/qUVbvV04rK95xby9RBjxu6/sandbox/i7U83rsZX0DxE07z7xAcAZ-img-4_1770846525000_na1fn_bGVhZC1nZW5lcmF0aW9uLXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVVWYnZWMDRySzk1eGJ5OVJCanh1Ni9zYW5kYm94L2k3VTgzcnNaWDBEeEUwN3o3eEFjQVotaW1nLTRfMTc3MDg0NjUyNTAwMF9uYTFmbl9iR1ZoWkMxblpXNWxjbUYwYVc5dUxYWnBjM1ZoYkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HAx5sUYralhW9efn~HOkPmUcGhbOMGsOBu4Wq4TGhagB~je4pZaEPCdUB-cf4G46jXlKqmJsBoR80WMEszJcnbZFlotK7q1HnKc-xsvq9TY1ft6EeI2pKdNISVTqI58B9gzgSwGJwvDGdABC93TVkNAxI~SS2FRz479nZU32MZJNpH7m4dsCaevMlaij-SVtxEnKa8NRd4fyqhETBzcUn13X1UjXw7sZNUFZcJ~m4c2Ey0Rh2rh8jdWq8HlelJB1pzYN5ZZU-BXde3wvE~3CgYm~91K019PbWyb~r4bXvqwEZwuVXJsuNfj27ouv-VqlX4V7YBWO-I-d3TxozaxPRA__"
                alt="Lead Generation"
                className="brutalist-border brutalist-shadow-lg w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>AI-Powered Targeting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI analyzes millions of data points to identify your ideal customers. We target prospects based on behavior, intent signals, and demographic fit—not just basic criteria.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Multi-Channel Outreach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We engage prospects across email, social media, content marketing, and paid channels. Our AI optimizes messaging and timing for maximum conversion rates.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Qualification & Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every lead is vetted and qualified before delivery. You receive contact information, engagement history, and intent data—ready for your sales team to close.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Transparent, Performance-Based Pricing
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Pay a fixed monthly fee for a guaranteed number of qualified leads. No hidden costs, no surprises—just predictable pipeline growth.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="brutalist-border brutalist-shadow bg-background p-8">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Fixed Monthly Cost</h3>
              <p className="text-muted-foreground leading-relaxed">
                One predictable price per month. Budget with confidence knowing exactly what you'll spend on lead acquisition.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8">
              <BarChart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Guaranteed Volume</h3>
              <p className="text-muted-foreground leading-relaxed">
                We commit to delivering a specific number of qualified leads every month. If we fall short, you don't pay for the shortfall.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8">
              <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Quality Assurance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every lead meets your defined criteria. We replace any leads that don't match your qualification standards at no additional cost.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Why Choose Our Lead Generation
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>30% Higher Conversion Rates</h3>
                  <p className="text-muted-foreground">
                    AI-powered lead scoring and qualification means you only talk to prospects who are ready to buy. Close more deals with less effort.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Predictable Pipeline</h3>
                  <p className="text-muted-foreground">
                    Know exactly how many leads you'll receive each month. Plan sales capacity, forecast revenue, and scale with confidence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Lower CAC</h3>
                  <p className="text-muted-foreground">
                    Reduce customer acquisition costs by 40% compared to traditional marketing. AI optimization eliminates wasted ad spend and inefficient tactics.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Real-Time Analytics</h3>
                  <p className="text-muted-foreground">
                    Track lead performance, conversion rates, and ROI in real-time dashboards. See exactly which campaigns and channels drive results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>CRM Integration</h3>
                  <p className="text-muted-foreground">
                    Leads flow directly into your CRM with full enrichment data. No manual imports, no data entry—just ready-to-work opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Continuous Optimization</h3>
                  <p className="text-muted-foreground">
                    Our AI learns from your feedback and conversion data, continuously improving targeting and qualification to maximize ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "B2B SaaS",
              "Professional Services",
              "Healthcare",
              "Financial Services",
              "Real Estate",
              "Manufacturing",
              "E-commerce",
              "Technology"
            ].map((industry, i) => (
              <Card key={i} className="brutalist-border bg-background p-6 text-center hover:brutalist-shadow transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  {industry}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to fill your pipeline?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-background/80 max-w-3xl mx-auto">
            Get guaranteed qualified leads delivered monthly. Predictable growth, transparent pricing, measurable ROI.
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
        <div className="container text-center">
          <Link href="/">
            <div className="text-2xl font-black mb-4 inline-block cursor-pointer" style={{ fontFamily: 'var(--font-display)' }}>
              Auto<span className="text-primary">mio</span>
            </div>
          </Link>
          <p className="text-muted-foreground text-sm">
            &copy; 2026 Automio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
