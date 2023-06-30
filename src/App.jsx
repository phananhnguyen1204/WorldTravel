import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import { CitiesProvider } from "../contexts/CityContext.jsx";
import { AuthProvider } from "../contexts/FakeAuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

// import Product from "./pages/Product.jsx";
// import Pricing from "./pages/Pricing.jsx";
// import Homepage from "./pages/Homepage.jsx";
// import PageNotFound from "./pages/PageNotFound.jsx";
// import AppLayout from "./pages/AppLayout.jsx";
// import Login from "./pages/Login.jsx";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import SpinnerFullPage from "./components/SpinnerFullPage";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage></SpinnerFullPage>}>
            <Routes>
              <Route index element={<Homepage></Homepage>}></Route>
              <Route path="product" element={<Product></Product>}></Route>
              <Route path="pricing" element={<Pricing></Pricing>}></Route>
              <Route path="login" element={<Login></Login>}></Route>
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout></AppLayout>
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={<Navigate replace to="cities"></Navigate>}
                ></Route>
                <Route path="cities" element={<CityList></CityList>}></Route>
                <Route path="cities/:id" element={<City></City>}></Route>
                <Route
                  path="countries"
                  element={<CountryList></CountryList>}
                ></Route>
                <Route path="form" element={<Form></Form>}></Route>
              </Route>
              <Route path="*" element={<PageNotFound></PageNotFound>}>
                {" "}
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
