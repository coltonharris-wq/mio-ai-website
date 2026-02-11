import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Cog, ShoppingCart, Cpu, Briefcase, Calendar, Users, TrendingUp, MessageSquare, FileText, Truck, Shield, BarChart3, Clock, Package, Star, Zap, Code, DollarSign, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ProfessionalServices() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-foreground">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/"><div className="text-2xl font-black tracking-tight cursor-pointer" style={{ fontFamily: 'var(--font-display)' }}>Auto<span className="text-primary">mio</span></div></Link>
            <Button asChild className="brutalist-border brutalist-shadow bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a></Button>
          </div>
        </div>
      </nav>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container">
          <Link href="/lead-generation"><Button variant="outline" className="brutalist-border mb-8 hover:bg-foreground hover:text-background"><ArrowLeft className="mr-2 w-4 h-4" /> Back</Button></Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-lg"><Briefcase className="w-16 h-16 text-primary" /></div>
              <h1 className="text-5xl md:text-7xl font-black" style={{ fontFamily: 'var(--font-display)' }}>Professional Services AI Solutions</h1>
            </div>
            <p className="text-2xl mb-8 text-muted-foreground leading-relaxed">Streamline client management, project delivery, and billing for consulting, legal, and professional service firms. Focus on high-value work.</p>
            <Button asChild size="lg" className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none"><a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">Schedule Consultation <ArrowRight className="ml-2" /></a></Button>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>Industry-Specific Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><Calendar className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Client Scheduling</h3><p className="text-muted-foreground leading-relaxed">AI books consultations, sends reminders, and handles rescheduling across multiple team members. Eliminate scheduling conflicts.</p></Card>
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><FileText className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Proposal Automation</h3><p className="text-muted-foreground leading-relaxed">Generate customized proposals, contracts, and SOWs in minutes. Win more business with faster response times.</p></Card>
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><Clock className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Time Tracking</h3><p className="text-muted-foreground leading-relaxed">Automated timesheet entry, project tracking, and billing. Capture every billable hour without manual data entry.</p></Card>
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><Users className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Client Communication</h3><p className="text-muted-foreground leading-relaxed">Automated status updates, milestone notifications, and project reports keep clients informed and satisfied.</p></Card>
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><DollarSign className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Invoice Management</h3><p className="text-muted-foreground leading-relaxed">Streamline billing, payment reminders, and collections. Reduce DSO by 30% with automated follow-ups.</p></Card>
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><Briefcase className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>CRM Integration</h3><p className="text-muted-foreground leading-relaxed">Works with HubSpot, Salesforce, Monday.com, and professional services management platforms.</p></Card>
          </div>
        </div>
      </section>
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>Ready to focus on clients?</h2>
          <p className="text-xl md:text-2xl mb-10 text-background/80 max-w-3xl mx-auto">Join professional services companies using AI to deliver better results and operational efficiency.</p>
          <Button asChild size="lg" className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-7 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none"><a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">Book Your Demo <ArrowRight className="ml-2" /></a></Button>
        </div>
      </section>
      <footer className="py-12 bg-background border-t-4 border-foreground">
        <div className="container text-center">
          <Link href="/"><div className="text-2xl font-black mb-4 inline-block cursor-pointer" style={{ fontFamily: 'var(--font-display)' }}>Auto<span className="text-primary">mio</span></div></Link>
          <p className="text-muted-foreground text-sm">&copy; 2026 Automio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
