import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-brand/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-profit/10 blur-[150px] rounded-full mix-blend-screen" />
          {/* We'll use a Next image here once generated */}
          <Image
            src="/images/hero_trading.png"
            alt="Trading Chart Background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-brand/30 text-brand text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            New Batch Starting Soon
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl text-white">
            Learn Forex Trading the <span className="text-gradient">Right Way</span>
          </h1>

          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Master price action, market structure, and risk management from a real trader. Stop gambling and start trading with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/courses">
              <Button size="lg" className="w-full sm:w-auto text-lg font-bold px-8 shadow-[0_0_20px_rgba(255,193,7,0.4)]">
                Start Learning Now
              </Button>
            </Link>
            <Link href="#youtube">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg">
                Watch Free Content
              </Button>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl pt-10 border-t border-border/50">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">5K+</span>
              <span className="text-sm text-muted mt-1">Active Students</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">100+</span>
              <span className="text-sm text-muted mt-1">Video Lessons</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">4.9/5</span>
              <span className="text-sm text-muted mt-1">Average Rating</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">24/7</span>
              <span className="text-sm text-muted mt-1">Community Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Introduction */}
      <section className="py-24 bg-surface" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/instructor_portrait_v3.png"
                  alt="Rizwan Pazheri - Forex Instructor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/80 backdrop-blur border border-border p-4 rounded-xl">
                    <p className="font-bold text-white">Rizwan Pazheri</p>
                    <p className="text-sm text-muted">Professional Trader & Mentor</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand/20 blur-[50px] rounded-full mix-blend-screen" />
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Meet Your <span className="text-brand">Instructor</span>
              </h2>
              <p className="text-lg text-muted mb-6">
                Trading is not about getting rich quick; it's about building a sustainable skill. I've spent years analyzing the markets, failing, learning, and finally developing a system that works.
              </p>
              <p className="text-lg text-muted mb-8">
                My goal with <strong className="text-white">Rizwan Talks</strong> is to provide Malayalam-speaking beginners with the raw, unfiltered truth about Forex trading. No indicators that don't work, just pure price action and market geometry.
              </p>

              <ul className="space-y-4 mb-8">
                {['5+ Years Trading Experience', 'Funded Trader', 'Specialized in Price Action'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button variant="outline">Read My Full Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-24 bg-background border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What You Will <span className="text-brand">Learn</span>
          </h2>
          <p className="text-lg text-muted mb-16 max-w-2xl mx-auto">
            Our curriculum is designed to take you from a complete beginner to a confident trader who understands exactly why the market moves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Market Structure",
                desc: "Understand the blueprint of the market. Learn how to identify trends, reversals, and continuations.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              },
              {
                title: "Price Action Mastery",
                desc: "Read the story the candles are telling you. Trade naked charts without relying on lagging indicators.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              {
                title: "Risk Management",
                desc: "The secret to longevity in trading. Learn how to protect your capital and manage your psychological state.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              }
            ].map((feature, i) => (
              <Card key={i} hoverable className="bg-surface/50 border-border/50 backdrop-blur-sm">
                <CardContent className="pt-8 text-center sm:text-left flex flex-col items-center sm:items-start">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white">
            Success <span className="text-brand">Stories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-background/80 border-border/50">
                <CardContent className="p-8">
                  <div className="flex text-brand mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted italic mb-6">
                    "Before Rizwan Talks, I was blowing accounts constantly using indicators. Learning pure price action from Rizwan completely shifted my mindset. Now I actually know what I'm looking at on the charts."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-lg text-brand">
                      S{item}
                    </div>
                    <div>
                      <p className="font-bold text-white">Student {item}</p>
                      <p className="text-sm text-muted">Kerala, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
            Ready to Take Your Trading to the <span className="text-brand">Next Level?</span>
          </h2>
          <p className="text-xl text-muted mb-10">
            Join thousands of students who have transformed their trading journey with our structured, no-nonsense curriculum.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/courses">
              <Button size="lg" className="text-lg px-10 py-4 shadow-[0_0_30px_rgba(255,193,7,0.3)] hover:shadow-[0_0_40px_rgba(255,193,7,0.5)]">
                Enroll in the Masterclass
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
