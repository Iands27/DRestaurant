import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import PageHome from "./pages/PageHome";
import PageMenu from "./pages/PageMenu";
import PageGallery from "./pages/PageGallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome/>} />
        <Route path="/PageMenu" element={<PageMenu/>} />
        <Route path="/PageGallery" element={<PageGallery/>} />
      </Routes>
    </Router>

    
  );
}

export default App;