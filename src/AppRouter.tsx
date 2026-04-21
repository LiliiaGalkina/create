import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ServicesPage from "./components/ServicesPage/ServicesPage";


const AppRouter = () => {
	return (
		<Routes>
			<Route path={"/"} element={<HomePage />} />
			<Route path={"/services"} element={<ServicesPage/>}/>
		</Routes>
	)
}

export default AppRouter;