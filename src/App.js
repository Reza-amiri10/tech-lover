import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import BlogsPage from "./Pages/BlogsPage";
import SubscribePage from "./Pages/SubscribePage";
import blogPosts from "./data/blogPosts";

const featuredData = blogPosts.slice(-3);
const latestBlogGenerator = blogPosts.slice(0, 6);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <HomePage
                featuredData={featuredData}
                latestBlogGenerator={latestBlogGenerator}
              />
            }
          />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
