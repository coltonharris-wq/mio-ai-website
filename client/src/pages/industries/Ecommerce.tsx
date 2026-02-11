import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Cog, ShoppingCart, Cpu, Briefcase, Calendar, Users, TrendingUp, MessageSquare, FileText, Truck, Shield, BarChart3, Clock, Package, Star, Zap, Code, DollarSign, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Ecommerce() {
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
              <div className="p-4 bg-primary/10 rounded-lg"><ShoppingCart className="w-16 h-16 text-primary" /></div>
              <h1 className="text-5xl md:text-7xl font-black" style={{ fontFamily: 'var(--font-display)' }}>E-commerce AI Solutions</h1>
            </div>
            <p className="text-2xl mb-8 text-muted-foreground leading-relaxed">Scale your online store with AI automation. Handle customer service, inventory management, and order fulfillment 24/7 while growing revenue.</p>
            <Button asChild size="lg" className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none"><a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">Schedule Consultation <ArrowRight className="ml-2" /></a></Button>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>Industry-Specific Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><MessageSquare className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>24/7 Customer Support</h3><p className="text-muted-foreground leading-relaxed">AI handles order tracking, returns, product questions, and sizing inquiries instantly. Reduce support tickets by 70%.</p></Card>
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><Package className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Inventory Management</h3><p className="text-muted-foreground leading-relaxed">Automated stock level monitoring, reorder alerts, and supplier coordination. Never run out of bestsellers again.</p></Card>
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><TrendingUp className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Abandoned Cart Recovery</h3><p className="text-muted-foreground leading-relaxed">AI sends personalized follow-ups to recover lost sales. Increase conversion rates by 25% with smart retargeting.</p></Card>
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><Star className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Review Management</h3><p className="text-muted-foreground leading-relaxed">Automated review requests, response generation, and sentiment analysis. Build trust with 5-star customer experiences.</p></Card>
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><Zap className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Order Processing</h3><p className="text-muted-foreground leading-relaxed">Streamline fulfillment workflows, shipping label generation, and tracking updates. Process 400x more orders with the same team.</p></Card>
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><ShoppingCart className="w-12 h-12 text-primary mb-4" /><h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Platform Integration</h3><p className="text-muted-foreground leading-relaxed">Works with Shopify, WooCommerce, BigCommerce, Magento, and all major e-commerce platforms.</p></Card>
          </div>
        </div>
      </section>
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>Ready to scale your store?</h2>
          <p className="text-xl md:text-2xl mb-10 text-background/80 max-w-3xl mx-auto">Join e-commerce companies using AI to deliver better results and operational efficiency.</p>
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
