/**
 * Privacy Policy Page
 */

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
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

      <div className="container max-w-4xl pt-32 pb-24">
        <Link href="/">
          <Button variant="outline" className="brutalist-border mb-8 hover:bg-foreground hover:text-background">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </Button>
        </Link>

        <div className="brutalist-border bg-white p-8 md:p-12 brutalist-shadow-lg">
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>Privacy Policy</h1>
          <p className="text-muted-foreground italic mb-8">Last Updated: February 22, 2026</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <p className="text-lg leading-relaxed">
                At Automio ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://automioapp.com" className="text-primary font-bold underline">automioapp.com</a> and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>1. Information We Collect</h2>
              <h3 className="text-xl font-bold mb-2">Personal Information</h3>
              <p className="mb-4">We may collect personal information that you provide to us, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and business information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-2">Usage Information</h3>
              <p className="mb-4">We automatically collect certain information about your device and how you interact with our website, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Device information and operating system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you service-related communications</li>
                <li>Process transactions and send related information</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="bg-primary/5 border-l-8 border-primary p-8 my-12">
              <h2 className="text-2xl font-black mb-4 text-primary" style={{ fontFamily: 'var(--font-display)' }}>SMS/Text Messaging Privacy - REQUIRED DISCLOSURE</h2>
              <p className="text-lg font-bold mb-4">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
              
              <p className="mb-4">By providing your mobile phone number to Automio, you consent to receive text messages including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Appointment reminders and confirmations</li>
                <li>Service updates and notifications</li>
                <li>Account alerts and security notifications</li>
                <li>Promotional messages (only if you opt-in)</li>
                <li>Two-factor authentication codes</li>
              </ul>
              
              <p className="font-bold">
                You can opt-out at any time by replying STOP to any message. Message and data rates may apply. Message frequency varies based on your interaction with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>3. How We Share Your Information</h2>
              <p className="mb-4">We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., hosting, analytics, customer support)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>5. Your Rights and Choices</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for SMS/text messages by replying STOP</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>7. Contact Us</h2>
              <p className="mb-4">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
              <div className="font-bold">
                <p>Automio</p>
                <p>Email: <a href="mailto:colton.harris@automioapp.com" className="text-primary underline">colton.harris@automioapp.com</a></p>
                <p>Website: <a href="https://automioapp.com" className="text-primary underline">automioapp.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>

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
