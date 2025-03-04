
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-light-gray/50 py-20 px-6">
        <div className="text-center max-w-md">
          <h1 className="text-8xl font-impact mb-4 text-black">404</h1>
          <p className="text-xl text-black/70 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-black text-white font-impact hover:bg-sky-blue transition-all-fast rounded"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Return to Home
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
