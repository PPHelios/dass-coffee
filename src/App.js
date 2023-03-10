import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import { Home } from "./features/home/Home";
import Location from "./features/location/Location";
import Shop from "./features/shop/Shop";
import Layout from "./features/layout/Layout";
import CartPage from "./features/cartPage/CartPage";
import { NoPageFound } from "./features/noPageFound/NoPageFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="dass-coffee/" element={<Home />} />
          <Route path="dass-coffee/shop" element={<Shop />} />
          <Route path="dass-coffee/about" element={<About />} />
          <Route path="dass-coffee/contactus" element={<Contact />} />
          <Route path="dass-coffee/location" element={<Location />} />
          <Route path="dass-coffee/cart" element={<CartPage />} />
          <Route path="*" element={<NoPageFound />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
