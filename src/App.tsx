import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/*   <Route path="/about-kth" element={<AboutKTH />} />
              <Route path="/contact-kth" element={<ContactUs />} />
              <Route path="/library" element={<Library />} />
              <Route path="/co-operation" element={<CoOperation />} />
              <Route path="/research" element={<Research />} />
              <Route path="/studies" element={<Studies />} />
              <Route path="/alumni" element={<Alumni />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
