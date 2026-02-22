/**
 * SMS Terms of Service Page
 */

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function SMSTerms() {
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
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>SMS Terms of Service</h1>
          <p className="text-muted-foreground italic mb-8">Last Updated: February 22, 2026</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <p className="text-lg leading-relaxed">
                By providing your mobile phone number to Automio and opting in to receive text messages, you agree to the following terms and conditions:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>1. Consent to Receive Messages</h2>
              <p className="mb-4">By providing your phone number and checking the opt-in box or submitting your information, you expressly consent to receive text (SMS/MMS) messages from Automio at the mobile number you provided. These messages may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Appointment Reminders:</strong> Confirmations and reminders for scheduled calls or demos</li>
                <li><strong>Service Notifications:</strong> Updates about your account, services, or support tickets</li>
                <li><strong>Security Alerts:</strong> Two-factor authentication codes and account security notifications</li>
                <li><strong>Product Updates:</strong> Information about new features or service changes</li>
                <li><strong>Marketing Messages:</strong> Promotional offers and news (only if you separately opt-in)</li>
              </ul>
              <div className="bg-primary/5 border-l-4 border-primary p-4 mt-6 font-bold">
                You are not required to consent to receive promotional text messages as a condition of purchasing any goods or services.
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>2. Message Frequency</h2>
              <p className="mb-4">Message frequency varies depending on your interaction with our services. You may receive:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Up to 10 messages per month for general service notifications</li>
                <li>Additional messages based on your requested actions (e.g., appointment confirmations)</li>
                <li>Periodic promotional messages if you opt-in to marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>3. Message and Data Rates</h2>
              <p className="text-xl font-bold text-destructive mb-2">Message and data rates may apply.</p>
              <p>
                Standard text messaging charges from your mobile carrier will apply to all messages sent and received. Please contact your mobile carrier for details about your specific plan and rates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>4. How to Opt-Out (STOP)</h2>
              <p className="mb-4">You can opt-out of receiving text messages from Automio at any time by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Text STOP:</strong> Reply with the word STOP, QUIT, CANCEL, UNSUBSCRIBE, or END to any message</li>
                <li><strong>Email:</strong> Contact us at <a href="mailto:colton.harris@automioapp.com" className="text-primary underline">colton.harris@automioapp.com</a></li>
              </ul>
              <p className="mt-4">
                After opting out, you will receive one final confirmation message, and then you will no longer receive text messages from us unless you opt back in.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>5. How to Get Help (HELP)</h2>
              <p className="mb-4">For assistance, you can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Text HELP:</strong> Reply with the word HELP to any message</li>
                <li><strong>Email Support:</strong> Contact <a href="mailto:colton.harris@automioapp.com" className="text-primary underline">colton.harris@automioapp.com</a></li>
                <li><strong>Visit:</strong> <a href="https://automioapp.com" className="text-primary underline">automioapp.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>6. Supported Carriers</h2>
              <p className="mb-4">Our text messaging service is available on major carriers including AT&T, T-Mobile, Verizon, Sprint, Boost, Cricket, MetroPCS, U.S. Cellular, Virgin Mobile, and others.</p>
              <p className="italic text-muted-foreground">Carriers are not liable for delayed or undelivered messages.</p>
            </section>

            <section className="bg-primary/5 border-l-4 border-primary p-4">
              <h2 className="text-xl font-bold mb-2">Privacy and Data Protection</h2>
              <p className="mb-4"><strong>Your privacy is important to us.</strong> We do not sell or share your mobile phone number with third parties for their marketing purposes. For complete details, please review our <Link href="/privacy-policy"><span className="text-primary underline cursor-pointer">Privacy Policy</span></Link>.</p>
              <p className="font-bold">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>7. Contact Information</h2>
              <p className="mb-4">If you have questions about our text messaging program, please contact us at:</p>
              <div className="font-bold">
                <p>Automio</p>
                <p>Email: <a href="mailto:colton.harris@automioapp.com" className="text-primary underline">colton.harris@automioapp.com</a></p>
                <p>Website: <a href="https://automioapp.com" className="text-primary underline">automioapp.com</a></p>
                <p>Phone: +1 (910) 515-8927</p>
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
