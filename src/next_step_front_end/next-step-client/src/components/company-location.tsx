"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

interface CompanyProps {
  name: string;
  address?: string | null;
}

export default function CompanyLocation({ name, address }: CompanyProps) {
  const [firstPart, remainingPart = ""] = (address || "").split(",", 2);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgAB..."
            alt="Map location"
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Company {name}</h4>
          {address && (
            <p className="text-sm text-muted-foreground">
              {firstPart}
              {remainingPart && (
                <>
                  <br />
                  {remainingPart.trim()}
                </>
              )}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
