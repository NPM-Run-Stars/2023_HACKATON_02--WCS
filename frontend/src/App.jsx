import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* SACHA */
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserLayout from "./pages/UserLayout";
import AdminLayout from "./pages/AdminLayout";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";

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
          {/* SACHA */}
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<UserLayout />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<AdminPage />} />
          </Route>
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
