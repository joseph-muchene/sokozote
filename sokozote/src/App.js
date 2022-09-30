import "./App.css";
import Arrivals from "./components/Arrivals";
import Brands from "./components/Brands";
import Features from "./components/Feartures";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sellers from "./components/Sellers";
import Top__section from "./components/Top__section";
import Trending__products from "./components/Trending__products";
function App() {
  return (
    <div>
      <Navbar />
      <Top__section />
      <Features />
      <Trending__products />
      <Brands />
      <Arrivals />
      <Sellers />
      <Footer />
    </div>
  );
}

export default App;
