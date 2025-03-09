import { Card, CardContent } from "@/components/ui/card.tsx"
import {
  Code,
  Briefcase,
  Stethoscope,
  GraduationCap,
  Building,
  ShoppingBag,
  Truck,
  Wrench,
  PenTool,
  Utensils,
  Landmark,
  HeartPulse,
} from "lucide-react"

export default function JobCategories() {
  const categories = [
    {
      id: 1,
      name: "Technology",
      count: 1420,
      icon: Code,
    },
    {
      id: 2,
      name: "Business",
      count: 872,
      icon: Briefcase,
    },
    {
      id: 3,
      name: "Healthcare",
      count: 628,
      icon: Stethoscope,
    },
    {
      id: 4,
      name: "Education",
      count: 450,
      icon: GraduationCap,
    },
    {
      id: 5,
      name: "Finance",
      count: 380,
      icon: Landmark,
    },
    {
      id: 6,
      name: "Retail",
      count: 310,
      icon: ShoppingBag,
    },
    {
      id: 7,
      name: "Logistics",
      count: 275,
      icon: Truck,
    },
    {
      id: 8,
      name: "Manufacturing",
      count: 250,
      icon: Wrench,
    },
    {
      id: 9,
      name: "Design",
      count: 230,
      icon: PenTool,
    },
    {
      id: 10,
      name: "Hospitality",
      count: 210,
      icon: Utensils,
    },
    {
      id: 11,
      name: "Real Estate",
      count: 180,
      icon: Building,
    },
    {
      id: 12,
      name: "Medical",
      count: 165,
      icon: HeartPulse,
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <Card key={category.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{category.count} jobs</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

