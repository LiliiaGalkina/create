import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import CaseStudiesPage from "./components/CaseStudoesPage/CaseStudiesPage";
import AboutUsPage from "./components/AboutUsPage/AboutAsPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";


const AppRouter = () => {
	return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/services"} element={<ServicesPage />} />
      <Route path={"/casestudies"} element={<CaseStudiesPage />} />
      <Route path={"/about"} element={<AboutUsPage />} />
      <Route path={"/contacts"} element={<ContactsPage />} />
    </Routes>
  );
}

export default AppRouter;