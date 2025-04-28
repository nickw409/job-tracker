import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseBusiness, CheckCircle, LineChart, Search, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Track Your Job Applications With Ease
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Organize, monitor, and optimize your job search process. Never miss an opportunity again.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="h-12 px-8">
                    Get Started
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="outline" size="lg" className="h-12 px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">Application Dashboard</h3>
                        <span className="text-sm text-gray-500">Today</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-md">
                          <div className="text-blue-600 dark:text-blue-400 font-medium">Applied</div>
                          <div className="text-2xl font-bold">24</div>
                        </div>
                        <div className="bg-green-50 dark:bg-gray-700 p-3 rounded-md">
                          <div className="text-green-600 dark:text-green-400 font-medium">Interviews</div>
                          <div className="text-2xl font-bold">8</div>
                        </div>
                        <div className="bg-yellow-50 dark:bg-gray-700 p-3 rounded-md">
                          <div className="text-yellow-600 dark:text-yellow-400 font-medium">Offers</div>
                          <div className="text-2xl font-bold">3</div>
                        </div>
                        <div className="bg-purple-50 dark:bg-gray-700 p-3 rounded-md">
                          <div className="text-purple-600 dark:text-purple-400 font-medium">Rejected</div>
                          <div className="text-2xl font-bold">12</div>
                        </div>
                      </div>
                      <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center">
                        <LineChart className="h-16 w-16 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Everything You Need to Land Your Dream Job
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our comprehensive tools help you stay organized and focused throughout your job search journey.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <BriefcaseBusiness className="h-5 w-5 text-blue-500" />
                  Application Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Keep track of all your job applications in one place. Monitor status, deadlines, and follow-ups.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Task Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create to-do lists for each application. Never miss an interview or deadline again.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="h-full md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-purple-500" />
                  Job Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find and save job listings from multiple sources in one unified dashboard.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-red-500" />
                  Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Visualize your job search progress with detailed analytics and insights.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-orange-500" />
                  Resume Builder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create and manage multiple versions of your resume tailored to different job applications.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/**
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Job Seekers Worldwide</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of professionals who have streamlined their job search process.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl font-bold">10k+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Active Users</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl font-bold">250k+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Applications Tracked</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl font-bold">85%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Success Rate</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl font-bold">45+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Days Saved on Average</div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Testimonials */}
      {/**
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from professionals who transformed their job search experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</div>
                    </div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    "This platform completely transformed my job search. I was able to land my dream job in half the
                    time it would have taken me otherwise."
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                    </div>
                    <div>
                      <div className="font-semibold">Michael Chen</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Product Manager</div>
                    </div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    "The analytics feature helped me understand which job applications were most successful, allowing me
                    to refine my approach."
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                    </div>
                    <div>
                      <div className="font-semibold">Emily Rodriguez</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Marketing Specialist</div>
                    </div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    "I was juggling over 30 applications at once. This tool kept me organized and ensured I never missed
                    a follow-up opportunity."
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Job Search?</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of professionals who have already streamlined their job search process.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="h-12 px-8">
                  Sign Up Free
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-white hover:bg-white/10">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
