import HomePage from "@/pages/home-page.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetailPage from "@/pages/job-detail-page.tsx";
import SignInForm from "@/components/auth/signin-form.tsx";
import SignupForm from "@/components/auth/signup-form.tsx";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <main className={"w-full h-full"}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs/:jobId" element={<JobDetailPage />} />
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
