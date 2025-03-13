import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert.tsx"

export default function DestructiveAlert() {
    return (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                An unexpected error occurred. Please refresh the page and try again.
            </AlertDescription>
        </Alert>
    )
}
