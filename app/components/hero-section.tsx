import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Ghanshyam Gadekar
            </h1>
            <p className="mx-auto max-w-[800px] text-xl text-muted-foreground md:text-2xl">
              AI/ML Engineer specializing in Computer Vision, NLP, and Machine Learning solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
          <div className="flex space-x-4 mt-6">
            <Link href="https://github.com/ghnnshymm" target="_blank">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/ghnnshymm" target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:ghanshyamgadekar99@gmail.com">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

