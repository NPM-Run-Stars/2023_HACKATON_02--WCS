import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* SACHA */
import Signin from "./pages/Signin/Signin";
import AdminProfil from "./pages/admin/AdminProfil/AdminProfil";
import AdminCard from "./pages/admin/AdminCard/AdminCard";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import UserHome from "./pages/user/UserHome/UserHome";
import AdminHome from "./pages/admin/AdminHome/AdminHome";
import Profil from "./pages/user/Profil/Profil";
import Faq from "./pages/user/Faq/Faq";
import Error from "./Error";

/* CYRIELLE */

/* MARTA */
import PageIntro2 from "./pages/Intro_2/PageIntro2";
import PageEtape3 from "./pages/PageEtape3/PageEtape3";
/* ROBIN */

/* LUCAS */
import "./App.scss";
import "./assets/Fonts/sary-soft.soft-regular.otf";
import "./assets/Fonts/sary-soft.soft-light.otf";
import "./assets/Fonts/sary-soft.soft-semibold.otf";
import Form from "./components/MultiStepForm/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* SACHA */}
          <Route path="/login" element={<Signin />} />
          <Route path="/" element={<UserLayout />}>
            <Route path="" element={<UserHome />} />
            <Route path="form" element={<Form />} />
            <Route path="profil/:id" element={<Profil />} />
            <Route path="faq" element={<Faq />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<AdminHome />} />
            <Route path="profil" element={<AdminProfil />} />
            <Route path="/admin/profil/:id" element={<AdminCard />} />
          </Route>
          {/* CYRIELLE */}

          {/* MARTA */}

          {/* ROBIN */}

          {/* LUCAS */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <PageIntro2 />
      <PageEtape3 />
    </div>
  );
}

export default App;
