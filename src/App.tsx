
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Apply from "./pages/Apply";
import Mentors from "./pages/Mentors";
import Contact from "./pages/Contact";
import Competition from "./pages/Competition";
import Learn from "./pages/Learn";
import CourseOverview from "./pages/CourseOverview";
import LessonPage from "./pages/LessonPage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/competition" element={<Competition />} />
            {/* Course catalog — public; lesson content protected */}
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/:courseId" element={<CourseOverview />} />
            <Route path="/learn/:courseId/lessons/:lessonId" element={
              <ProtectedRoute><LessonPage /></ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
