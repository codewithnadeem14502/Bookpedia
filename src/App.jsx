import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Cart from "./components/cart/Cart";
import BestSelling from "./components/book/BestSelling";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import RootLayout from "./layouts/RootLayout";
import BookDetails from "./components/book/BookDetails";
import BestSellingpage from "./components/book/BestSellingpage";
import FavouriteBook from "./components/favouritebook/FavouriteBook";
import CreateOrder from "./components/user/CreateOrder";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/book" element={<Homepage />} />
        <Route index element={<Home />} />
        <Route path="FavouriteBook" element={<FavouriteBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/best-selling" element={<BestSellingpage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/order/new" element={<CreateOrder />} />
        <Route path="/succesfull" element={<ThankYou />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
