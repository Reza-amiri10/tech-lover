import style from "./HomePage.module.css";

import FeaturedCardList from "../components/FeaturedCardList";
import MiddleFooter from "../Layout/MiddleFooter";
import BlogList from "../components/BlogList";

export default function HomePage({ featuredData, latestBlogGenerator }) {
  return (
    <div>
      <div className={style.main}>
        <FeaturedCardList featuredPost={featuredData} />
        <MiddleFooter />
        <h3 className={style.latestTitle}>Latest blogs</h3>
        <BlogList blogPosts={latestBlogGenerator} />
      </div>
    </div>
  );
}
