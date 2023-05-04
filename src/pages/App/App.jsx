import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import Search from "../Search";
import NotFound from "../NotFound";

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
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
