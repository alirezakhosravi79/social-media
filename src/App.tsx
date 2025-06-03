import { Footer } from "./components/layouts/Footer";
import { Navbar } from "./components/layouts/Navbar";
import { AllRoutes } from "./router/AllRoutes";

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 transition-opacity duration-700 pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
