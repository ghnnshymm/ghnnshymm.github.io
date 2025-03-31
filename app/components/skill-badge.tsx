import type React from "react"
interface SkillBadgeProps {
  children: React.ReactNode
}

export default function SkillBadge({ children }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-950/30 px-2.5 py-1 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-700/20">
      {children}
    </span>
  )
}

