import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import About from "./components/About";
import Hero from './components/extra';
import CustomerReviews from "./components/CustomerReviews";
import { motion } from "framer-motion";
import HeroCard from "./components/HomeComponents/HeroCard";
import History from "./components/History";
import Mission from "./components/Mission";
import Team from "./components/Team";
import Values from "./components/Values";

function App() {
  return (
    <div className="App font-thin">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/values" element={<Values />} />
          <Route className="App font-thin" path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<About />} />
          {/* <Route path="/extra" element={<Hero />} /> */}
          <Route path="/extra" element={<HeroCard />} />
          {/* <Route path="/customer-reviews" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CustomerReviews />
            </motion.div>
          } /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
