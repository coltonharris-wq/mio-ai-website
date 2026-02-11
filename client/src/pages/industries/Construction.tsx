/**
 * Construction Industry Page
 * Design Philosophy: Neo-Brutalism meets Tech Minimalism
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  HardHat,
  Calendar,
  TrendingUp,
  Shield,
  Users,
  Truck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  BarChart3,
  Zap
} from "lucide-react";
import { Link } from "wouter";

export default function Construction() {
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
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <HardHat className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                Construction AI Solutions
              </h1>
            </div>
            <p className="text-2xl mb-4 text-muted-foreground leading-relaxed">
              Transform construction operations with AI automation. The global AI in construction market is projected to grow from <span className="text-primary font-bold">$4.86 billion in 2025</span> to <span className="text-primary font-bold">$35.53 billion by 2032</span>, delivering unprecedented efficiency gains.
            </p>
            <p className="text-xl mb-8 text-muted-foreground/80">
              Reduce project delays by 40%, improve safety compliance, and optimize resource allocation with intelligent automation designed specifically for construction workflows.
            </p>
            <Button asChild size="lg" className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none">
              <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Schedule Consultation <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Construction-Specific Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>AI-Powered Scheduling</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automate "what-if" scenario planning and optimize construction schedules. Predict delays before they happen and reduce project timeline overruns by 40%.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Truck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Supply Chain Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Precise inventory management, automated procurement, and optimized logistics. Just-in-time material ordering reduces waste and prevents costly shortages.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Safety Compliance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wearable sensors and AI-powered analysis improve job site safety. Real-time hazard detection reduces accidents and workers' comp claims significantly.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Cost Forecasting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Improved forecasting leads to steadier margins, stronger cash flow predictability, and fewer emergency expenses. Prevent budget overruns before they start.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Workforce Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI chatbots coordinate tasks, monitor completion in real-time, and ensure teams stay aligned with project objectives. Optimize labor allocation daily.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Bid Management 400x Faster</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automated proposal generation, cost estimation, and bid tracking. Win more contracts with faster, more accurate bidding powered by AI.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Common Construction Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>General Contractors</h3>
                  <p className="text-muted-foreground">
                    Coordinate multiple subcontractors, manage schedules, and track project milestones automatically. Handle 3x more projects with the same team size.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Commercial Construction</h3>
                  <p className="text-muted-foreground">
                    Automate client updates, progress reports, and change order management. Keep stakeholders informed without daily status meetings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Residential Builders</h3>
                  <p className="text-muted-foreground">
                    Manage homeowner communications, schedule inspections, and coordinate trades. Reduce delays from scheduling conflicts by 50%.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Specialty Contractors</h3>
                  <p className="text-muted-foreground">
                    Track certifications, safety training, and OSHA compliance automatically. Maintain documentation for audits without manual paperwork.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Infrastructure Projects</h3>
                  <p className="text-muted-foreground">
                    Monitor equipment usage, track labor costs, and optimize resource allocation across multiple job sites in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Renovation & Remodeling</h3>
                  <p className="text-muted-foreground">
                    Handle client inquiries, schedule site visits, and manage material selections. Improve customer satisfaction with instant responses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Proven ROI for Construction
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="brutalist-border brutalist-shadow bg-primary text-primary-foreground p-8 text-center">
              <div className="text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>40%</div>
              <p className="text-lg">Reduction in project delays through AI scheduling</p>
            </Card>
            <Card className="brutalist-border brutalist-shadow bg-primary text-primary-foreground p-8 text-center">
              <div className="text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>18-20%</div>
              <p className="text-lg">Annual market growth rate (CAGR) through 2029</p>
            </Card>
            <Card className="brutalist-border brutalist-shadow bg-primary text-primary-foreground p-8 text-center">
              <div className="text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>50%</div>
              <p className="text-lg">Fewer scheduling conflicts with automated coordination</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to build smarter?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-background/80 max-w-3xl mx-auto">
            Join construction companies using AI to complete projects faster, safer, and more profitably.
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
