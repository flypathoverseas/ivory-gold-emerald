import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Global Layout Components
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { ScrollToTop } from "@/components/ScrollToTop";

// Pages
import Index from "@/pages/index";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Countries from "@/pages/countries";
import StudentVisa from "@/pages/student-visa";
import TouristVisa from "@/pages/tourist-visa";
import WorkVisa from "@/pages/work-visa";

const queryClient = new QueryClient();
const logoPreloadHref = new URL("./assets/logo.png", import.meta.url).href;

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = logoPreloadHref;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="relative min-h-screen bg-onyx text-cream">
            <Navbar />
            <main className="pt-24">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/student-visa" element={<StudentVisa />} />
                <Route path="/tourist-visa" element={<TouristVisa />} />
                <Route path="/work-visa" element={<WorkVisa />} />
              </Routes>
            </main>
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
