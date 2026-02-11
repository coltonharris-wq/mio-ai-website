/**
 * Automio Homepage
 * Design Philosophy: Neo-Brutalism meets Tech Minimalism
 * - Bold typography with extreme weight contrasts (900 vs 400)
 * - High-contrast purple (#6B46C1) with black borders
 * - Asymmetric layouts with intentional breaks
 * - Thick borders creating "floating" components
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Phone, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2,
  MessageSquare,
  Clock,
  Target,
  Users,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Automio's AI Receptionist has transformed our customer service. We're now handling 3x more inquiries without adding staff, and our customers love the instant responses.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "TechFlow Solutions"
    },
    {
      quote: "The automation agents delivered ROI within 60 days. Our team now focuses on strategic work while AI handles the repetitive tasks. It's like having 10 extra employees.",
      author: "Michael Rodriguez",
      role: "Chief Technology Officer",
      company: "DataStream Inc"
    },
    {
      quote: "Their guaranteed lead generation service is a game-changer. We get exactly the number of qualified leads promised every month. No more guesswork in our sales pipeline.",
      author: "Jennifer Park",
      role: "Director of Marketing",
      company: "GrowthLabs"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-foreground">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Auto<span className="text-primary">mio</span>
            </div>
            <Button asChild className="brutalist-border brutalist-shadow bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer">Request Demo</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/qUVbvV04rK95xby9RBjxu6/sandbox/i7U83rsZX0DxE07z7xAcAZ-img-1_1770846529000_na1fn_aGVyby1haS1uZXR3b3Jr.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVVWYnZWMDRySzk1eGJ5OVJCanh1Ni9zYW5kYm94L2k3VTgzcnNaWDBEeEUwN3o3eEFjQVotaW1nLTFfMTc3MDg0NjUyOTAwMF9uYTFmbl9hR1Z5YnkxaGFTMXVaWFIzYjNKci5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WNzy6JOagG73u~dLXFC3WoySwi0Ufql8-8mpms-5Zht6AcxIIiHPpcijuI9sUOW5T9sEVt4j7m94GmED-S7gNyUwic51Cul~dcIdPUlNbYRi81UuTi2yAxHbUk5qaKFZ-AyWiGY75fXUGX7Dm95cV6bEJU8nmSmbpzHZDCrBQ2ssTYV9pxvltkr6L~6lnbI8J~a7RodosWO3X4u59tycmNNvoKaDtFQZpWHID-tqpbgkpVyz0ATev-R6uDEBrVtQiMNLvUCCROiIf4zT63IjhyhOB7SFgZEAbXaWtJNhgpFZgKw6mSf3o66UlKdwL6pZuW4HaXJhYRD4rJ8494mCuQ__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] text-white" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              Intelligent Automation for Ambitious Businesses
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
              We deploy advanced AI agents to streamline your operations, engage your customers, and drive growth—delivering results <span className="font-bold text-primary bg-white px-2 py-1 rounded" style={{ fontFamily: 'var(--font-mono)' }}>400x faster</span> than traditional methods.
            </p>
            <Button asChild size="lg" className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none">
              <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">Talk to an Expert <ArrowRight className="ml-2" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-background border-y-4 border-foreground">
        <div className="container">
          <h2 className="text-center text-2xl font-bold mb-12 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Trusted by hundreds of leading brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              { name: "TechCorp", width: "120px" },
              { name: "DataFlow", width: "140px" },
              { name: "CloudSync", width: "130px" },
              { name: "AI Systems", width: "125px" },
              { name: "NextGen", width: "135px" },
              { name: "InnovateLabs", width: "145px" },
              { name: "FutureWorks", width: "128px" },
              { name: "SmartOps", width: "132px" }
            ].map((company, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="text-2xl font-bold text-foreground/40" style={{ fontFamily: 'var(--font-display)' }}>
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mio.ai Section */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Why choose Automio?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-6xl font-black mb-4 text-primary" style={{ fontFamily: 'var(--font-mono)' }}>
                  400x
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Faster Execution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI agents work 400 times faster than traditional methods, delivering measurable ROI and transforming your operations in days, not months.
                </p>
              </div>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-6xl font-black mb-4 text-primary" style={{ fontFamily: 'var(--font-mono)' }}>
                  100%
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Customized Solutions
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every AI agent is tailored to your unique business needs, integrating seamlessly with your existing systems and workflows.
                </p>
              </div>
            </Card>

            <Card className="brutalist-border brutalist-shadow bg-background p-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-6xl font-black mb-4 text-primary" style={{ fontFamily: 'var(--font-mono)' }}>
                  24/7
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Expert Support
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of AI specialists provides round-the-clock support, ensuring your automation runs smoothly and delivers continuous value.
                </p>
              </div>
            </Card>
          </div>
          <div className="text-center">
            <Button asChild className="brutalist-border brutalist-shadow bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer">Connect With Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Our AI Services
          </h2>
          
          <div className="space-y-16">
            {/* AI Receptionist */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                    AI Receptionist
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A sophisticated conversational AI that handles inbound calls, answers frequently asked questions, and schedules appointments—providing a seamless 24/7 experience for your customers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Handles unlimited concurrent calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Natural language understanding in 50+ languages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Seamless calendar integration and appointment booking</span>
                  </li>
                </ul>
                <Button variant="outline" className="brutalist-border font-bold hover:bg-foreground hover:text-background transition-all">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/qUVbvV04rK95xby9RBjxu6/sandbox/i7U83rsZX0DxE07z7xAcAZ-img-2_1770846511000_na1fn_YWktcmVjZXB0aW9uaXN0LXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVVWYnZWMDRySzk1eGJ5OVJCanh1Ni9zYW5kYm94L2k3VTgzcnNaWDBEeEUwN3o3eEFjQVotaW1nLTJfMTc3MDg0NjUxMTAwMF9uYTFmbl9ZV2t0Y21WalpYQjBhVzl1YVhOMExYWnBjM1ZoYkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=j2s~3QeHdv1m~ai9ktVINJtC9QraaondWQxSYbxy~~kOeZF4laOzznewUz81yBU~6DEcsOm59PkjYLsHxO4jLsg~KoLIHBG7PupvrBqUpBkoUBk87TlRyMof1pZF-3CKxev0Y2T9cBQ0uKkZd1BFS3xaIyw1wIEvbljNerU2R~iERMTPiBf9E9T~NczkrW07MVmLC-0ilLg72rrBY1xIxoZCdqt0zbtYbPhEvGd61RSZbaDgX60K9w3CVT7LAPSALnY~pj7mAoLG5QsOd~lucxHrtonRrAp1pNa~zvpJCPFIGnyvoN866xOz8yCqkiDR8wF07lZVbh5NSqXW6LDvzQ__"
                  alt="AI Receptionist Visualization"
                  className="brutalist-border brutalist-shadow-lg w-full rounded-lg"
                />
              </div>
            </div>

            {/* AI Automation Agents */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/qUVbvV04rK95xby9RBjxu6/sandbox/i7U83rsZX0DxE07z7xAcAZ-img-3_1770846523000_na1fn_YXV0b21hdGlvbi1hZ2VudHMtdmlzdWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVVWYnZWMDRySzk1eGJ5OVJCanh1Ni9zYW5kYm94L2k3VTgzcnNaWDBEeEUwN3o3eEFjQVotaW1nLTNfMTc3MDg0NjUyMzAwMF9uYTFmbl9ZWFYwYjIxaGRHbHZiaTFoWjJWdWRITXRkbWx6ZFdGcy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=q8vLHeJUfwouNCD9GNZiRjPRtc4W~suw-aRxiBz99Cz8WEmIOUU6I6irZVeijxfFGpRNszcbw~nV4jsSimtXC0e-jenYXUyrVgcu-yO5WCpfwIkey9KADCjwZVPakrd~VNlnm4bWnwnkwVLMJjyFSxFjabdQDszaiqN18ORBmc-IFFNu3OjpAZjlUuc2enF1TF3VbQ4EhlUGZGYfkYHjFAB08K9NPu3rNAVyhjaeqo1pGYAEjc1WRGd~QnZQ1KbYUEC18qop3TpnLj97QTO9Ms~yvDCHcGDseGP-7Lyt6n8tpgBCikjOwFR9kcSQ2xGLTl0d4RC4fC7Hw~6boQzUg__"
                  alt="AI Automation Agents Visualization"
                  className="brutalist-border brutalist-shadow-lg w-full rounded-lg"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                    Full-Stack AI Automation
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Custom-built AI agents that automate complex business processes—from data entry and analysis to customer support and IT service desk management. Designed to integrate with your existing systems and deliver significant ROI.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Process automation across all departments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Seamless integration with existing tools and platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Continuous learning and optimization</span>
                  </li>
                </ul>
                <Button variant="outline" className="brutalist-border font-bold hover:bg-foreground hover:text-background transition-all">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Lead Generation */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                    Guaranteed Lead Generation
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A performance-based marketing service where we provide a guaranteed number of qualified leads to your business for a fixed monthly cost—leveraging our AI-powered marketing and analytics platform.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Fixed monthly cost with guaranteed lead volume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>AI-powered targeting and qualification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Real-time analytics and performance tracking</span>
                  </li>
                </ul>
                <Button variant="outline" className="brutalist-border font-bold hover:bg-foreground hover:text-background transition-all">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/qUVbvV04rK95xby9RBjxu6/sandbox/i7U83rsZX0DxE07z7xAcAZ-img-4_1770846525000_na1fn_bGVhZC1nZW5lcmF0aW9uLXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVVWYnZWMDRySzk1eGJ5OVJCanh1Ni9zYW5kYm94L2k3VTgzcnNaWDBEeEUwN3o3eEFjQVotaW1nLTRfMTc3MDg0NjUyNTAwMF9uYTFmbl9iR1ZoWkMxblpXNWxjbUYwYVc5dUxYWnBjM1ZoYkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HAx5sUYralhW9efn~HOkPmUcGhbOMGsOBu4Wq4TGhagB~je4pZaEPCdUB-cf4G46jXlKqmJsBoR80WMEszJcnbZFlotK7q1HnKc-xsvq9TY1ft6EeI2pKdNISVTqI58B9gzgSwGJwvDGdABC93TVkNAxI~SS2FRz479nZU32MZJNpH7m4dsCaevMlaij-SVtxEnKa8NRd4fyqhETBzcUn13X1UjXw7sZNUFZcJ~m4c2Ey0Rh2rh8jdWq8HlelJB1pzYN5ZZU-BXde3wvE~3CgYm~91K019PbWyb~r4bXvqwEZwuVXJsuNfj27ouv-VqlX4V7YBWO-I-d3TxozaxPRA__"
                  alt="Lead Generation Visualization"
                  className="brutalist-border brutalist-shadow-lg w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/qUVbvV04rK95xby9RBjxu6/sandbox/i7U83rsZX0DxE07z7xAcAZ-img-5_1770846520000_na1fn_dGVzdGltb25pYWwtYmFja2dyb3VuZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVVWYnZWMDRySzk1eGJ5OVJCanh1Ni9zYW5kYm94L2k3VTgzcnNaWDBEeEUwN3o3eEFjQVotaW1nLTVfMTc3MDg0NjUyMDAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0WW1GamEyZHliM1Z1WkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SpgQdzlLpMk0BG7y6e-Iv4ayO2guOvD-40puI2IuI9jfn7mZX-SX08qd2OYbqeAuJBmHGGliTGW2gzSCUS~iuNkZtsiy0WBXdQRYiI2DJXoH9aNw9Dka5GI3Jpo9WVjrw04kE0vFHj6D-RhnMMLvdpAaeFDV-iQVVZzAU9mlPuRrgUfSZ3-XA3tvfG8EiTlkB6da1cbH89x6mGPBBTxH9ZeBEq12t6g~gtFHHQ89ly0ZB-juzFLnHVBVWWMEkRYvcXfvEZDiUbstMZMGNGDfsVFJDieF8VHPvSVhr97TE7g85XhxYkWeBgaHdPqwXjDwX2tTdN3aJvhNX6zgK2Xw__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-secondary/90"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Our customers see value in every interaction
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground p-12 relative">
              <MessageSquare className="w-12 h-12 mb-6 opacity-50" />
              <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed font-medium">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="border-t-2 border-primary-foreground/20 pt-6">
                <p className="font-bold text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-primary-foreground/80">{testimonials[currentTestimonial].role}</p>
                <p className="text-sm text-primary-foreground/60 mt-1">{testimonials[currentTestimonial].company}</p>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="brutalist-border bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="brutalist-border bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            AI solutions for every industry
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Deploy AI that's expertly tailored to your industry or domain
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Healthcare", desc: "AI agents support virtual check-ins, patient consultations, and medical record management." },
              { icon: TrendingUp, title: "Finance", desc: "Secure AI agents help customers apply for accounts and loans, check balances, and detect fraud." },
              { icon: Target, title: "Retail", desc: "AI-powered agents that help customers find products, process orders, and provide personalized recommendations." },
              { icon: Phone, title: "Hospitality", desc: "AI concierge services for guest check-in, room service, entertainment, and local recommendations." },
              { icon: Award, title: "Real Estate", desc: "Virtual agents that qualify leads, schedule property tours, and answer buyer questions." },
              { icon: Zap, title: "Technology", desc: "AI-powered support agents for technical troubleshooting, onboarding, and product guidance." },
              { icon: Clock, title: "Professional Services", desc: "Intelligent scheduling, client intake, and project management automation." },
              { icon: MessageSquare, title: "E-commerce", desc: "24/7 customer support, order tracking, and personalized shopping assistance." }
            ].map((industry, i) => (
              <Card key={i} className="brutalist-border bg-background p-6 hover:brutalist-shadow transition-all hover:-translate-y-1">
                <industry.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {industry.desc}
                </p>
                <Button variant="link" className="p-0 h-auto font-bold text-primary">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to transform your business?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-background/80 max-w-3xl mx-auto">
            Join hundreds of leading brands leveraging AI to work smarter, faster, and more efficiently.
          </p>
          <Button asChild size="lg" className="brutalist-border brutalist-shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-7 transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none">
            <a href="https://calendly.com/harriscolton29/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">Request a Demo <ArrowRight className="ml-2" /></a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t-4 border-foreground">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Auto<span className="text-primary">mio</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Intelligent automation for ambitious businesses.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">AI Receptionist</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Automation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Lead Generation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@automio.ai</li>
                <li>1-800-MIO-AIXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-foreground/10 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Automio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
