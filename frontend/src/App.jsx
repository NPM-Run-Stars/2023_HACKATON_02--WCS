import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* SACHA */
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/admin/Signup/Signup";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import UserHome from "./pages/user/UserHome/UserHome";
import AdminHome from "./pages/admin/AdminHome/AdminHome";
import Gabarit from "./components/Gabarit";

/* CYRIELLE */

/* MARTA */

/* ROBIN */

/* LUCAS */
import Form from "./components/MultiStepForm/Form";
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
            <Route path="" element={<UserHome />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<AdminHome />} />
          </Route>
          {/* CYRIELLE */}

          {/* MARTA */}

          {/* ROBIN */}

          {/* LUCAS */}
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>

      <Gabarit />
    </div>
  );
}

export default App;
