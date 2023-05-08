import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import Search from "../Search";
import NotFound from "../NotFound";
import Layout from "../../components/Layout";
import { SearchValueProvider } from "../../context";

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
    <SearchValueProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </SearchValueProvider>
  );
};

export default App;
