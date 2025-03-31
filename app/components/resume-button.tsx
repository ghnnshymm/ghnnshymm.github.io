"use client"

import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { useState } from "react"

export default function ResumeButton() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    // In a real implementation, this would download the actual resume file
    setTimeout(() => {
      setIsDownloading(false)
    }, 1500)

    // For demo purposes, we'll just show an alert
    alert("Resume download would start in a real implementation")
  }

  return (
    <Button variant="outline" className="flex items-center gap-2" onClick={handleDownload} disabled={isDownloading}>
      <FileText className="h-4 w-4" />
      {isDownloading ? "Downloading..." : "Resume"}
    </Button>
  )
}

