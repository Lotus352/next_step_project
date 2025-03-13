import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 font-bold text-xl">
            <div className={"flex"}>
              <div className="font-bold text-[18px] pr-5 text-slate-800">
                NEXT STEP
              </div>
            </div>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Find Jobs
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Companies
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Career Advice
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Salary Guide
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium hover:text-primary hidden md:block"
          >
            For Employers
          </a>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Sign In
            </Button>
            <Button size="sm">Post a Job</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
