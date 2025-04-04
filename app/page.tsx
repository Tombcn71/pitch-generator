import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - No Gradients */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-background">
          {/* Simple Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-muted/20"></div>
            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Create Perfect Pitches with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Generate professional 3-minute pitches based on David
                  Beckett&apos;s pitch canvas method. Free pitch generation with
                  optional professional coaching.
                </p>
              </div>
              <div className="space-x-4 mt-6">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Coach
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Divider */}
        <div className="h-px w-full bg-border"></div>

        {/* Features Section - No Gradients */}
        <section className="py-12 md:py-24 bg-background relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 p-6 rounded-xl bg-card border shadow-sm">
                <div className="inline-block p-3 rounded-lg bg-muted mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  The Best 3 Minutes Pitch Method
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Based on David Beckett&apos;s proven pitch canvas methodology,
                  our AI helps you create compelling pitches that capture
                  attention and drive results.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Define your problem and solution clearly</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Highlight your unique value proposition</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Structure your pitch for maximum impact</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 p-6 rounded-xl bg-card border shadow-sm">
                <div className="inline-block p-3 rounded-lg bg-muted mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Professional Coaching
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Get personalized coaching from Martina Guzman to perfect your
                  pitch delivery and presentation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Build confidence in your delivery</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Refine your presentation style</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Get expert feedback on your pitch</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video Course Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 space-y-4">
                <div className="inline-block p-3 rounded-lg bg-primary/10 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect
                      x="1"
                      y="5"
                      width="15"
                      height="14"
                      rx="2"
                      ry="2"></rect>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Master Pitching with Our Video Course
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Learn at your own pace with Martina Guzman's comprehensive
                  video course on pitch mastery. From fundamentals to advanced
                  techniques, this course covers everything you need to deliver
                  compelling pitches that win over any audience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>10+ hours of professional video content</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Downloadable resources and templates</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Lifetime access and updates</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button>Learn More About the Course</Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-card rounded-xl overflow-hidden border shadow-sm">
                <div className="aspect-video relative bg-muted flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary/80">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  <div className="absolute inset-0 bg-black/5"></div>
                  <p className="absolute bottom-4 left-4 text-sm font-medium">
                    Preview: Mastering Your Pitch Delivery
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    The Complete Pitch Mastery Course
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 text-yellow-500">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span className="text-sm">4.9/5 (120+ reviews)</span>
                    </div>
                    <span className="font-bold">$199</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - No Gradients */}
        <section className="py-12 relative overflow-hidden bg-background">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Create Your Perfect Pitch?
              </h2>
              <p className="text-muted-foreground mb-6">
                Start using our AI-powered pitch generator today and transform
                your ideas into compelling presentations.
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 PitchAI. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
            <p className="text-center text-sm leading-loose text-muted-foreground">
              Pitch generation is free • Professional coaching is a paid service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
