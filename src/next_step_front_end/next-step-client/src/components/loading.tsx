import { Loader2 } from "lucide-react"

export default function Loading () {
    return (
        <div className="flex flex-col items-center justify-center h-64">
            <Loader2 className="animate-spin text-primary w-10 h-10"/>
        </div>
    );
};

