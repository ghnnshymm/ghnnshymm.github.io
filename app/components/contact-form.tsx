"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"

interface ContactFormProps {
  minimal?: boolean
}

export default function ContactForm({ minimal = false }: ContactFormProps) {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  if (minimal) {
    return (
      <form action={handleSubmit} className="space-y-4">
        <div>
          <Input
            id="name"
            name="name"
            placeholder="Name"
            required
            className="bg-zinc-900 border-zinc-800 focus:border-blue-700 text-white placeholder:text-zinc-500"
          />
        </div>
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            className="bg-zinc-900 border-zinc-800 focus:border-blue-700 text-white placeholder:text-zinc-500"
          />
        </div>
        <div>
          <Textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            className="bg-zinc-900 border-zinc-800 focus:border-blue-700 text-white placeholder:text-zinc-500 min-h-[120px]"
          />
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-zinc-400">{message}</p>}
      </form>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <Input id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea id="message" name="message" required />
      </div>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Sending..." : "Send Message"}
      </Button>
      {message && <p className="text-sm text-center mt-4 text-muted-foreground">{message}</p>}
    </form>
  )
}

