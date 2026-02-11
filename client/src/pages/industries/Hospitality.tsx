/**
 * Hospitality Industry Page
 * Design Philosophy: Neo-Brutalism meets Tech Minimalism
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Hotel,
  Users,
  Clock,
  Star,
  MessageSquare,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Shield,
  Calendar
} from "lucide-react";
import { Link } from "wouter";

export default function Hospitality() {
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
                <Hotel className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                Hospitality AI Solutions
              </h1>
            </div>
            <p className="text-2xl mb-4 text-muted-foreground leading-relaxed">
              Elevate guest experiences with AI concierge services. Hotels using AI achieve <span className="text-primary font-bold">28% higher guest satisfaction</span> and an average ROI of <span className="text-primary font-bold">250% within two years</span>.
            </p>
            <p className="text-xl mb-8 text-muted-foreground/80">
              AI-driven personalization leads to revenue increases up to 10%, while employees complete tasks 40% faster with intelligent automation.
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
            Hospitality-Specific Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>AI Concierge Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                24/7 guest assistance for check-in, room service, entertainment bookings, and local recommendations. Deliver luxury service without luxury staffing costs.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Smartphone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Contactless Check-In</h3>
              <p className="text-muted-foreground leading-relaxed">
                Self-service kiosks and mobile check-in eliminate wait times. Guests can bypass the front desk entirely and go straight to their rooms.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Star className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Personalized Experiences</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-controlled room settings, smart mirrors, and automated preference tracking. Remember every guest's preferences for future stays.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Booking Optimization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Analyze customer data to suggest specific hotels, recommend add-ons, and upsell amenities. Increase revenue per booking by 15%.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Guest Communication</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automated reservation confirmations, pre-arrival information, and post-stay follow-ups. Maintain engagement throughout the guest journey.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Revenue Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dynamic pricing based on demand, competitor rates, and historical data. Maximize occupancy and revenue with AI-powered rate optimization.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Common Hospitality Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Luxury Hotels & Resorts</h3>
                  <p className="text-muted-foreground">
                    Provide white-glove service at scale. AI handles routine requests while staff focuses on creating memorable experiences for VIP guests.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Boutique Hotels</h3>
                  <p className="text-muted-foreground">
                    Compete with larger chains by offering 24/7 concierge services without the overhead. Maintain your unique brand voice through customized AI.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Vacation Rentals</h3>
                  <p className="text-muted-foreground">
                    Automate guest communication, check-in instructions, and local recommendations. Manage multiple properties without hiring property managers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Hotel Chains</h3>
                  <p className="text-muted-foreground">
                    Standardize service quality across all locations while maintaining local flavor. Centralize guest data for seamless experiences between properties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Restaurants & Dining</h3>
                  <p className="text-muted-foreground">
                    Handle reservations, dietary restrictions, and special requests automatically. Reduce no-shows with intelligent reminder systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Event Venues</h3>
                  <p className="text-muted-foreground">
                    Coordinate event planning, catering requests, and AV setup. Provide instant quotes and availability for event inquiries.
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
            Proven ROI for Hospitality
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="brutalist-border brutalist-shadow bg-primary text-primary-foreground p-8 text-center">
              <div className="text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>250%</div>
              <p className="text-lg">Average ROI within two years for hotels using AI</p>
            </Card>
            <Card className="brutalist-border brutalist-shadow bg-primary text-primary-foreground p-8 text-center">
              <div className="text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>28%</div>
              <p className="text-lg">Higher guest satisfaction with AI concierge services</p>
            </Card>
            <Card className="brutalist-border brutalist-shadow bg-primary text-primary-foreground p-8 text-center">
              <div className="text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>10%</div>
              <p className="text-lg">Revenue increase from AI-driven personalization</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to elevate guest experiences?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-background/80 max-w-3xl mx-auto">
            Join hotels and resorts using AI to deliver exceptional service, increase revenue, and reduce operational costs.
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
