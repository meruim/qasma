import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts";
import { Home } from "@/pages";
import { SEOData } from "./components/SEO";

function App() {
  return (
    <Router>
      <SEOData />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
