import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts";
import { Home } from "@/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
