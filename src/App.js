import "./App.css";
import Navbar from "./Layout/Navbar";
import BlogList from "./components/BlogList";
import FeaturedCardList from "./components/FeaturedCardList";
import Footer from "./Layout/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <FeaturedCardList />
        <BlogList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
