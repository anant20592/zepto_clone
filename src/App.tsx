import Dashboard from "./components/dashboard/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ItemList from "./components/items/ItemList";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/:category",
    Component: ItemList,
  },
  {
    path: "/:category/:sub_category",
    Component: ItemList,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
