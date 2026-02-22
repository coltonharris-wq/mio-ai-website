/**
 * AI Receptionist Service Page
 * Design Philosophy: Neo-Brutalism meets Tech Minimalism
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Phone, 
  Clock, 
  Globe, 
  Calendar, 
  MessageSquare, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";

export default function AIReceptionist() {
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
                  <Phone className="w-12 h-12 text-primary" />
                </div>
                <h1 className="text-5xl md:text-6xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                  AI Receptionist
                </h1>
              </div>
              <p className="text-2xl mb-8 text-muted-foreground leading-relaxed">
                Never miss a call again. Our AI-powered virtual receptionist handles customer inquiries, schedules appointments, and provides 24/7 support—all while sounding completely natural.
              </p>
              <Button asChild size="lg" className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none">
                <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Schedule Consultation <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
            <div>
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/qUVbvV04rK95xby9RBjxu6/sandbox/i7U83rsZX0DxE07z7xAcAZ-img-2_1770846511000_na1fn_YWktcmVjZXB0aW9uaXN0LXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVVWYnZWMDRySzk1eGJ5OVJCanh1Ni9zYW5kYm94L2k3VTgzcnNaWDBEeEUwN3o3eEFjQVotaW1nLTJfMTc3MDg0NjUxMTAwMF9uYTFmbl9ZV2t0Y21WalpYQjBhVzl1YVhOMExYWnBjM1ZoYkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=j2s~3QeHdv1m~ai9ktVINJtC9QraaondWQxSYbxy~~kOeZF4laOzznewUz81yBU~6DEcsOm59PkjYLsHxO4jLsg~KoLIHBG7PupvrBqUpBkoUBk87TlRyMof1pZF-3CKxev0Y2T9cBQ0uKkZd1BFS3xaIyw1wIEvbljNerU2R~iERMTPiBf9E9T~NczkrW07MVmLC-0ilLg72rrBY1xIxoZCdqt0zbtYbPhEvGd61RSZbaDgX60K9w3CVT7LAPSALnY~pj7mAoLG5QsOd~lucxHrtonRrAp1pNa~zvpJCPFIGnyvoN866xOz8yCqkiDR8wF07lZVbh5NSqXW6LDvzQ__"
                alt="AI Receptionist"
                className="brutalist-border brutalist-shadow-lg w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>24/7 Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Never miss a call, even outside business hours. Our AI receptionist works around the clock, ensuring every customer inquiry is answered immediately—no matter the time zone.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>50+ Languages</h3>
              <p className="text-muted-foreground leading-relaxed">
                Communicate with customers in their native language. Our AI understands and responds naturally in over 50 languages, breaking down language barriers for global businesses.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Smart Scheduling</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seamlessly integrates with your calendar systems. The AI can book, reschedule, and manage appointments automatically, syncing with Google Calendar, Outlook, and more.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Natural Conversations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced natural language processing enables human-like conversations. Customers won't even realize they're speaking with AI—it understands context, tone, and intent.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Phone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Unlimited Calls</h3>
              <p className="text-muted-foreground leading-relaxed">
                Handle multiple calls simultaneously without any wait time. Whether it's 10 or 1,000 concurrent calls, every customer gets instant attention.
              </p>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>CRM Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically logs call details, customer information, and conversation summaries into your CRM. Keep your sales and support teams informed with zero manual data entry.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Business Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Reduce Costs by 70%</h3>
                  <p className="text-muted-foreground">
                    Save on staffing costs while improving service quality. One AI receptionist replaces multiple full-time employees at a fraction of the cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Increase Lead Capture</h3>
                  <p className="text-muted-foreground">
                    Never lose a potential customer to a missed call. Studies show businesses lose 30% of leads from unanswered calls—eliminate that gap entirely.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Improve Customer Satisfaction</h3>
                  <p className="text-muted-foreground">
                    Instant responses and zero hold times lead to happier customers. Our AI maintains consistent, professional service quality on every interaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Scale Effortlessly</h3>
                  <p className="text-muted-foreground">
                    Handle seasonal spikes or business growth without hiring. The AI scales instantly to meet demand, whether you get 10 or 10,000 calls per day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Free Up Your Team</h3>
                  <p className="text-muted-foreground">
                    Let your staff focus on high-value tasks instead of answering repetitive questions. The AI handles FAQs, routing, and basic inquiries automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Actionable Insights</h3>
                  <p className="text-muted-foreground">
                    Get detailed analytics on call volume, common questions, customer sentiment, and conversion rates. Use data to optimize your business operations.
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
            Ready to transform your customer service?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-background/80 max-w-3xl mx-auto">
            Join hundreds of businesses using AI receptionists to deliver exceptional 24/7 customer experiences.
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
          <p className="text-muted-foreground text-sm mb-4">
            &copy; 2026 Automio. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 font-bold text-sm">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/sms-terms" className="hover:text-primary transition-colors underline">SMS Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
