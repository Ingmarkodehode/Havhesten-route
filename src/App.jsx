import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./routes/Layout";
import { LandingPage } from "./routes/LandingPage";
import { AktiviteterPage } from "./routes/aktiviteter/AktiviteterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />

          <Route path="aktiviteter" element={<AktiviteterPage />} />
        </Route>
        <Route path="*" element={<h1>Error invalid url</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
