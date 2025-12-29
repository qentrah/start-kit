"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useAuth } from "@/hooks/use-auth";
import { 
  Shield, 
  Database, 
  Zap, 
  Lock, 
  Code, 
  Rocket,
  CheckCircle2,
  Star
} from "lucide-react";

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Nav variant="landing" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Build Modern Apps
            <span className="block text-primary mt-2">Faster Than Ever</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A complete starter kit with authentication, database integration, and 
            beautiful UI components. Start building your next project in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto rounded-lg">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto rounded-lg">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg">
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Free forever
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-muted/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with modern technologies and best practices. Everything you need 
            to launch your application quickly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="rounded-xl">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Secure Authentication</CardTitle>
              <CardDescription>
                Enterprise-grade security with better-auth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Email & Password
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Session Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Password Reset
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>MongoDB Integration</CardTitle>
              <CardDescription>
                Robust database with Mongoose ODM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Schema Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Connection Pooling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Type Safety
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Modern UI Components</CardTitle>
              <CardDescription>
                Beautiful components with shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Accessible
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Customizable
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Dark Mode Ready
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Protected Routes</CardTitle>
              <CardDescription>
                Middleware-based route protection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Automatic Redirects
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Session Validation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Secure by Default
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>TypeScript First</CardTitle>
              <CardDescription>
                Full type safety throughout
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Type-Safe APIs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  IntelliSense Support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Better DX
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Ready to Deploy</CardTitle>
              <CardDescription>
                Optimized for production
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Next.js 16
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Server Components
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Production Ready
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Loved by Developers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what developers are saying about Start Kit
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <CardDescription>
                "This starter kit saved me weeks of development time. The authentication 
                setup is flawless and the UI components are beautiful."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <CardDescription>
                "The MongoDB integration is seamless and the Zustand store makes state 
                management a breeze. Highly recommended!"
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Michael Rodriguez</p>
              <p className="text-sm text-muted-foreground">Backend Engineer</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <CardDescription>
                "Best starter kit I've used. Everything is well-organized and the 
                documentation is clear. Perfect for rapid prototyping."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Alex Thompson</p>
              <p className="text-sm text-muted-foreground">Frontend Developer</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center bg-primary text-primary-foreground rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of developers who are building faster with Start Kit. 
            Get started in minutes, deploy in hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-lg">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/register">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-lg">
                    Start Building Now
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
