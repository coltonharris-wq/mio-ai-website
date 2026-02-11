/**
 * AI Automation Service Page
 * Design Philosophy: Neo-Brutalism meets Tech Minimalism
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Database, 
  Workflow, 
  BarChart3, 
  Shield, 
  Cpu,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";

export default function AIAutomation() {
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
                  <Zap className="w-12 h-12 text-primary" />
                </div>
                <h1 className="text-5xl md:text-6xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                  AI Automation
                </h1>
              </div>
              <p className="text-2xl mb-8 text-muted-foreground leading-relaxed">
                Transform your business operations with intelligent automation agents that work 400x faster than traditional methods—handling everything from data entry to complex decision-making.
              </p>
              <Button asChild size="lg" className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none">
                <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Schedule Consultation <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
            <div>
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/qUVbvV04rK95xby9RBjxu6/sandbox/i7U83rsZX0DxE07z7xAcAZ-img-3_1770846523000_na1fn_YXV0b21hdGlvbi1hZ2VudHMtdmlzdWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVVWYnZWMDRySzk1eGJ5OVJCanh1Ni9zYW5kYm94L2k3VTgzcnNaWDBEeEUwN3o3eEFjQVotaW1nLTNfMTc3MDg0NjUyMzAwMF9uYTFmbl9ZWFYwYjIxaGRHbHZiaTFoWjJWdWRITXRkbWx6ZFdGcy5wbmc/eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=q8vLHeJUfwouNCD9GNZiRjPRtc4W~suw-aRxiBz99Cz8WEmIOUU6I6irZVeijxfFGpRNszcbw~nV4jsSimtXC0e-jenYXUyrVgcu-yO5WCpfwIkey9KADCjwZVPakrd~VNlnm4bWnwnkwVLMJjyFSxFjabdQDszaiqN18ORBmc-IFFNu3OjpAZjlUuc2enF1TF3VbQ4EhlUGZGYfkYHjFAB08K9NPu3rNAVyhjaeqo1pGYAEjc1WRGd~QnZQ1KbYUEC18qop3TpnLj97QTO9Ms~yvDCHcGDseGP-7Lyt6n8tpgBCikjOwFR9kcSQ2xGLTl0d4RC4fC7Hw~6boQzUg__"
                alt="AI Automation"
                className="brutalist-border brutalist-shadow-lg w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            What We Automate
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Database className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Data Processing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automated data entry, extraction, validation, and migration across systems. Process thousands of records in minutes with 99.9% accuracy.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Workflow className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Workflow Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                End-to-end process automation from invoice processing to employee onboarding. Eliminate manual handoffs and reduce cycle times by 80%.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Analytics & Reporting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automated report generation, data analysis, and insight delivery. Get real-time dashboards and scheduled reports without manual effort.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Compliance & Auditing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automated compliance checks, audit trail generation, and regulatory reporting. Ensure adherence to standards without manual oversight.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Cpu className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>IT Operations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Service desk automation, system monitoring, incident response, and user provisioning. Reduce IT workload by 60% while improving response times.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Custom Processes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tailored automation for your unique business needs. We build custom AI agents that integrate with your existing tools and workflows.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-block p-6 bg-primary/10 rounded-lg mb-6">
                <span className="text-6xl font-black text-primary" style={{ fontFamily: 'var(--font-mono)' }}>1</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>Discovery</h3>
              <p className="text-muted-foreground">
                We analyze your current processes to identify automation opportunities and ROI potential.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-6 bg-primary/10 rounded-lg mb-6">
                <span className="text-6xl font-black text-primary" style={{ fontFamily: 'var(--font-mono)' }}>2</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>Design</h3>
              <p className="text-muted-foreground">
                Our team designs custom AI agents tailored to your specific workflows and systems.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-6 bg-primary/10 rounded-lg mb-6">
                <span className="text-6xl font-black text-primary" style={{ fontFamily: 'var(--font-mono)' }}>3</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>Deploy</h3>
              <p className="text-muted-foreground">
                We implement and integrate the automation with your existing tools—minimal disruption.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-6 bg-primary/10 rounded-lg mb-6">
                <span className="text-6xl font-black text-primary" style={{ fontFamily: 'var(--font-mono)' }}>4</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>Optimize</h3>
              <p className="text-muted-foreground">
                Continuous monitoring and optimization ensure peak performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Benefits */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Measurable ROI
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>80% Time Savings</h3>
                  <p className="text-muted-foreground">
                    Tasks that took hours now complete in minutes. Free your team to focus on strategic initiatives that drive growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>99.9% Accuracy</h3>
                  <p className="text-muted-foreground">
                    Eliminate human error from repetitive tasks. AI agents maintain consistent quality and precision across millions of operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>60-Day ROI</h3>
                  <p className="text-muted-foreground">
                    Most clients see positive ROI within 60 days of deployment. The automation pays for itself through labor savings and efficiency gains.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>24/7 Operation</h3>
                  <p className="text-muted-foreground">
                    AI agents work continuously without breaks, holidays, or downtime. Maximize productivity around the clock.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Seamless Integration</h3>
                  <p className="text-muted-foreground">
                    Works with your existing tech stack—Salesforce, SAP, Oracle, Microsoft, and 500+ other platforms. No rip-and-replace required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    AI agents improve over time, learning from patterns and adapting to changes in your business processes automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to automate your business?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-background/80 max-w-3xl mx-auto">
            Join forward-thinking companies using AI automation to work smarter, faster, and more profitably.
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
