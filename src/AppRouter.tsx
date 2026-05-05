import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import CaseStudiesPage from "./components/CaseStudoesPage/CaseStudiesPage";


const AppRouter = () => {
	return (
		<Routes>
			<Route path={"/"} element={<HomePage />} />
			<Route path={"/services"} element={<ServicesPage/>}/>
			<Route path={"/casestudies"} element={<CaseStudiesPage/>}/>
		</Routes>
	)
}

export default AppRouter;