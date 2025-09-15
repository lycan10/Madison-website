
import './App.css';
import Cables from './screen/cables/Cables';
import Control from './screen/control/Control';
import Home from './screen/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParkingBrakes from './screen/parkingBrakes/ParkingBrakes';
import Starters from './screen/starters/Starters';
import Alternators from './screen/alternators/Alternators';
import Batteries from './screen/batteries/Batteries';

function App() {
  return (
    <div className="App">
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cables" element={<Cables />} />
            <Route path="/control-lever" element={<Control />} />
            <Route path="/parkingBrakes" element={<ParkingBrakes />} />
            <Route path="/starters" element={<Starters />} />
            <Route path="/alternators" element={<Alternators />} />
            <Route path="/batteries" element={<Batteries />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products:subcategory" element={<Products />} /> */}
            {/* <Route path="/product/:id" element={<Product />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/soon" element={<Soon />} />
            <Route path="/return" element={<ReturnPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/thankyou" element={<ThankYou />} /> */}
        
            {/* <Route path="/gallery" element={<Gallery />} /> */}
     
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
