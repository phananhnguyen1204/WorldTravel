import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import { CitiesProvider } from "../contexts/CityContext.jsx";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage></Homepage>}></Route>
          <Route path="product" element={<Product></Product>}></Route>
          <Route path="pricing" element={<Pricing></Pricing>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="app" element={<AppLayout></AppLayout>}>
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
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;