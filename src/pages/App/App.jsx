import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import Search from "../Search";
import NotFound from "../NotFound";
import { HeaderHome } from "../../components/HeaderHome.jsx";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/search", element: <Search /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <HeaderHome />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
