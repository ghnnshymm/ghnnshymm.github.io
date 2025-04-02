import Link from "next/link"
import { Github, Linkedin, Mail, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "./components/project-card"
import SkillsSection from "./components/skills-section"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Ghanshyam Gadekar
          </Link>
          <nav className="hidden md:flex items-center space-x-3">
            <Link
              href="#about"
              className="px-3 py-1.5 text-sm rounded-md bg-zinc-900/80 border border-zinc-800 hover:bg-blue-900/20 hover:border-blue-800/50 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="px-3 py-1.5 text-sm rounded-md bg-zinc-900/80 border border-zinc-800 hover:bg-blue-900/20 hover:border-blue-800/50 hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="px-3 py-1.5 text-sm rounded-md bg-zinc-900/80 border border-zinc-800 hover:bg-blue-900/20 hover:border-blue-800/50 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="px-3 py-1.5 text-sm rounded-md bg-zinc-900/80 border border-zinc-800 hover:bg-blue-900/20 hover:border-blue-800/50 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/ghnnshymm" target="_blank" className="text-zinc-400 hover:text-white">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/ghnnshymm" target="_blank" className="text-zinc-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="/CV_Ghanshyam.pdf" target="_blank" download className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-zinc-900/80 border border-zinc-800 hover:bg-blue-900/20 hover:border-blue-800/50 hover:text-white transition-colors">
              <FileText className="h-3.5 w-3.5" />
              Resume
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="flex items-center space-x-1 bg-zinc-900/90 backdrop-blur-md p-1.5 rounded-full border border-zinc-800 shadow-lg">
          <Link
            href="#about"
            className="p-2.5 rounded-full hover:bg-blue-900/30 text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#skills"
            className="p-2.5 rounded-full hover:bg-blue-900/30 text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.7 9.26001C6.7 8.76001 6.14 8.32001 5.52 8.32001C4.9 8.32001 4.34 8.76001 4.34 9.26001C4.34 9.76001 4.9 10.2 5.52 10.2C6.14 10.2 6.7 9.76001 6.7 9.26001Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.66 9.26001C19.66 8.76001 19.1 8.32001 18.48 8.32001C17.86 8.32001 17.3 8.76001 17.3 9.26001C17.3 9.76001 17.86 10.2 18.48 10.2C19.1 10.2 19.66 9.76001 19.66 9.26001Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.18 9.26001C13.18 8.76001 12.62 8.32001 12 8.32001C11.38 8.32001 10.82 8.76001 10.82 9.26001C10.82 9.76001 11.38 10.2 12 10.2C12.62 10.2 13.18 9.76001 13.18 9.26001Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.7 14.74C6.7 14.24 6.14 13.8 5.52 13.8C4.9 13.8 4.34 14.24 4.34 14.74C4.34 15.24 4.9 15.68 5.52 15.68C6.14 15.68 6.7 15.24 6.7 14.74Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.66 14.74C19.66 14.24 19.1 13.8 18.48 13.8C17.86 13.8 17.3 14.24 17.3 14.74C17.3 15.24 17.86 15.68 18.48 15.68C19.1 15.68 19.66 15.24 19.66 14.74Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.18 14.74C13.18 14.24 12.62 13.8 12 13.8C11.38 13.8 10.82 14.24 10.82 14.74C10.82 15.24 11.38 15.68 12 15.68C12.62 15.68 13.18 15.24 13.18 14.74Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#projects"
            className="p-2.5 rounded-full hover:bg-blue-900/30 text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8 13H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="p-2.5 rounded-full hover:bg-blue-900/30 text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.9965 11H16.0054"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 11H12.0045"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99451 11H8.00349"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="about" className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] opacity-5"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-relaxed py-3 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                  AI Engineer
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
                  Engineering Intelligence with AI & Deep Learning 🚀
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="#contact">Get in touch</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-zinc-800 hover:bg-zinc-900">
                    <Link href="#projects">View projects</Link>
                  </Button>
                </div>
              </div>
              <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-zinc-800/50 shadow-xl">
                <Image
                  src="/profile.png"
                  alt="Ghanshyam Gadekar"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 border-t border-zinc-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-500 before:to-violet-500">
                <h3 className="text-xl font-bold">AI Developer | Cognitain AI</h3>
                <p className="text-sm text-zinc-400 mb-3">Miami, FL (Remote) | August 2024 – February 2025</p>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <span>Integrated RAG and LLM-based solutions with notable impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <span>Solved complex challenges using AI, ML, and data analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <span>Enhanced team dynamics through knowledge sharing</span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-500 before:to-violet-500">
                <h3 className="text-xl font-bold">Python Intern</h3>
                <p className="text-sm text-zinc-400 mb-3">January 2024 – March 2024</p>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <span>Developed and deployed Python applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <span>Maintained and enhanced Python-based projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-zinc-900 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <SkillsSection />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-zinc-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Computer Automation using LLMs"
                description="An automation system using Large Language Models to interpret and process user commands in natural language."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/ghnnshymm"
                tags={["NLP", "LLMs", "GenAI"]}
                minimal={true}
              />
              <ProjectCard
                title="Motion Browsing"
                description="A motion detection-based browsing system using OpenCV to allow web browsing through hand gestures."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/ghnnshymm"
                tags={["Computer Vision", "OpenCV"]}
                minimal={true}
              />
              <ProjectCard
                title="Hybrid Cryptography Storage"
                description="A secure hybrid cryptography system to encrypt and decrypt files on cloud platforms."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/ghnnshymm"
                tags={["Cryptography", "Cloud"]}
                minimal={true}
              />
              <ProjectCard
                title="Image Classification"
                description="An image classification model using transfer learning and CNNs to categorize images efficiently."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/ghnnshymm"
                tags={["PyTorch", "CNNs"]}
                minimal={true}
              />
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-20 border-t border-zinc-900 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Publications</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-blue-900/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Secure Cloud Storage Using Hybrid Cryptography</h3>
                <p className="text-zinc-400 mb-2">
                  International Research Journal of Innovations in Engineering and Technology
                </p>
                <p className="text-sm text-zinc-500">Volume 7, Issue 5, May 2023</p>
              </div>
              <div className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-blue-900/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Smart Automations Using LLMs</h3>
                <p className="text-zinc-400 mb-2">
                  International Research Journal of Innovations in Engineering and Technology
                </p>
                <p className="text-sm text-zinc-500">Volume 7, Issue 11, November 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-zinc-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col space-y-6">
                <a
                  href="mailto:ghanshyamgadekar99@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="p-3 rounded-full bg-blue-900/20 group-hover:bg-blue-900/30 transition-colors">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <span>ghanshyamgadekar99@gmail.com</span>
                </a>
                <a
                  href="tel:+917620693209"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="p-3 rounded-full bg-blue-900/20 group-hover:bg-blue-900/30 transition-colors">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <span>+91-7620693209</span>
                </a>
                <a
                  href="https://linkedin.com/in/ghnnshymm"
                  target="_blank"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                  rel="noreferrer"
                >
                  <div className="p-3 rounded-full bg-blue-900/20 group-hover:bg-blue-900/30 transition-colors">
                    <Linkedin className="h-6 w-6 text-blue-400" />
                  </div>
                  <span>linkedin.com/in/ghnnshymm</span>
                </a>
                <a
                  href="https://github.com/ghnnshymm"
                  target="_blank"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                  rel="noreferrer"
                >
                  <div className="p-3 rounded-full bg-blue-900/20 group-hover:bg-blue-900/30 transition-colors">
                    <Github className="h-6 w-6 text-blue-400" />
                  </div>
                  <span>github.com/ghnnshymm</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-zinc-900 bg-black">
        <div className="container px-4 md:px-6 text-center text-zinc-500 text-sm">
          <p> 2024 Ghanshyam Gadekar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
