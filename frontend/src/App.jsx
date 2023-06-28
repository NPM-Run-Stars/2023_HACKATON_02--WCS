import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
/* SACHA */
import Signin from "./pages/Signin";

/* CYRIELLE */

/* MARTA */

/* ROBIN */

/* LUCAS */

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* SACHA */}
          <Route path="/login" element={<Signin />} />
          {/* CYRIELLE */}

          {/* MARTA */}

          {/* ROBIN */}

          {/* LUCAS */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
