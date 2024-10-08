import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




import Signup from '../src/pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import CartPage from './pages/Cart.jsx';
import Home from './pages/Home.jsx';
import Settings from './pages/Settings.jsx';
import Products from "./pages/Products.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ProductInformation from "./components/ProdInformation.jsx";



function App() {
  return (
    <>


      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/landingpage" element={<LandingPage />} />
            <Route path="/dashboard" element={<LandingPage />} />
            <Route path="/analytics" element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/prodinfo" element={<ProductInformation />} />
          </Route>
        </Routes>






      </Router>

    </>
  );
}

export default App;
