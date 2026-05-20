import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Global Layout Components
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

// Pages
import Index from "@/pages/index";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Countries from "@/pages/countries";
import StudentVisa from "@/pages/student-visa";
import TouristVisa from "@/pages/tourist-visa";
import WorkVisa from "@/pages/work-visa";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="relative min-h-screen bg-onyx text-cream">
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/student-visa" element={<StudentVisa />} />
              <Route path="/tourist-visa" element={<TouristVisa />} />
              <Route path="/work-visa" element={<WorkVisa />} />
            </Routes>
            <Footer />
            <WhatsAppFab />
          </div>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
