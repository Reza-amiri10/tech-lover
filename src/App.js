import "./App.css";
import Navbar from "./Layout/Navbar";
import BlogList from "./components/BlogList";
import FeaturedCardList from "./components/FeaturedCardList";
import Footer from "./Layout/Footer";
import MiddleFooter from "./Layout/MiddleFooter";
import blogPosts from "./components/data/blogPosts";

const featuredData = blogPosts.slice(-3);

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <FeaturedCardList featuredPost={featuredData} />
        <MiddleFooter />
        <BlogList blogPosts={blogPosts} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
