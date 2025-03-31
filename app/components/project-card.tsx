import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  minimal?: boolean
}

export default function ProjectCard({ title, description, image, link, tags, minimal = false }: ProjectCardProps) {
  if (minimal) {
    return (
      <div className="group relative overflow-hidden rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-blue-900/50 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="relative p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-zinc-400 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-blue-950/30 px-2.5 py-0.5 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-700/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={link}
            className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View project <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 pt-0">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <ExternalLink className="h-4 w-4" />
          View project
        </Link>
      </div>
    </div>
  )
}

