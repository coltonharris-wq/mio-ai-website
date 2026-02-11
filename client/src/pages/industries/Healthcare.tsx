/**
 * Healthcare Industry Page
 * Design Philosophy: Neo-Brutalism meets Tech Minimalism
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Heart,
  Clock,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Phone
} from "lucide-react";
import { Link } from "wouter";

export default function Healthcare() {
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
          <Link href="/lead-generation">
            <Button variant="outline" className="brutalist-border mb-8 hover:bg-foreground hover:text-background">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back
            </Button>
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Heart className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                Healthcare AI Solutions
              </h1>
            </div>
            <p className="text-2xl mb-8 text-muted-foreground leading-relaxed">
              Transform patient care with AI-powered automation. Handle appointment scheduling, patient inquiries, and administrative tasks 24/7 while your staff focuses on delivering exceptional healthcare.
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
            Healthcare-Specific Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>24/7 Appointment Scheduling</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI handles appointment bookings, rescheduling, and reminders around the clock. Reduce no-shows by 40% with automated confirmations and SMS reminders.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>HIPAA Compliant</h3>
              <p className="text-muted-foreground leading-relaxed">
                All AI systems are fully HIPAA compliant with encrypted data storage, secure transmission, and comprehensive audit trails for patient information.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Phone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Patient Triage</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI receptionists assess patient needs and route urgent cases to appropriate staff immediately while handling routine inquiries automatically.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Patient Engagement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automated follow-ups, medication reminders, and health education improve patient outcomes and satisfaction scores.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Reduce Wait Times</h3>
              <p className="text-muted-foreground leading-relaxed">
                Streamline check-in processes and administrative workflows. Patients spend less time waiting and more time receiving care.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>EHR Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seamlessly integrates with Epic, Cerner, Athenahealth, and other major EHR systems for automatic data synchronization.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Common Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Hospitals & Health Systems</h3>
                  <p className="text-muted-foreground">
                    Manage high call volumes across multiple departments. Route patients to the right specialist and reduce administrative burden on nursing staff.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Private Practices</h3>
                  <p className="text-muted-foreground">
                    Small practices can compete with larger facilities by offering 24/7 scheduling and patient support without hiring additional staff.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Dental Clinics</h3>
                  <p className="text-muted-foreground">
                    Automate appointment confirmations, insurance verification, and post-procedure follow-ups to improve patient retention.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Urgent Care Centers</h3>
                  <p className="text-muted-foreground">
                    Handle high patient volumes during peak hours. AI provides wait time estimates and pre-registers patients before arrival.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Specialty Clinics</h3>
                  <p className="text-muted-foreground">
                    Manage complex referral processes and coordinate care between multiple providers with automated communication workflows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Telehealth Providers</h3>
                  <p className="text-muted-foreground">
                    Streamline virtual visit scheduling, send meeting links automatically, and handle technical support questions from patients.
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
            Ready to transform patient care?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-background/80 max-w-3xl mx-auto">
            Join healthcare providers using AI to deliver better patient experiences while reducing operational costs.
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
