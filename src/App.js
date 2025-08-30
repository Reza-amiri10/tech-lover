import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import BlogsPage from "./Pages/BlogsPage";
import SubscribePage from "./Pages/SubscribePage";
import blogPosts from "./data/blogPosts";
import BlogDetail from "./Pages/BlogDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import CategoryPage from "./Pages/CategoryPage";

const featuredData = blogPosts.slice(-3);
const latestBlogGenerator = blogPosts.slice(0, 6);

function App() {
  return (
    <>
      <ScrollToTop />
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
          <Route
            path="/blog/:id"
            element={<BlogDetail blogPosts={blogPosts} />}
          />
          <Route
            path="/category/:categoryName"
            element={<CategoryPage blogPosts={blogPosts} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
