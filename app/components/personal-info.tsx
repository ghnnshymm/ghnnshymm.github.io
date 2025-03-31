import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

export default function PersonalInfo() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Personal Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>ghanshyamgadekar99@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>+91-7620693209</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Date of Birth: 27-09-2002</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>Mumbai, India</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

