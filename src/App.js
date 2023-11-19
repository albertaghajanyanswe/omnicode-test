import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./configs/route";
import NavBar from "./components/navBar";
import HomePage from "./pages/home";
import AboutUsPage from "./pages/aboutUs";
import HowItWorksPage from "./pages/howItWorks";
import ServicesPage from "./pages/services";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={routes.root.path} element={<HomePage />} />
        <Route path={routes.home.path} element={<HomePage />} />
        <Route path={routes.aboutUs.path} element={<AboutUsPage />} />
        <Route path={routes.howItWorks.path} element={<HowItWorksPage />} />
        <Route path={routes.services.path} element={<ServicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
