import style from "./BlogsPage.module.css";
import BlogList from "../components/BlogList";
import blogPosts from "../data/blogPosts";

export default function BlogsPage() {
  return (
    <div>
      <div className={style.BlogsPageContainer}>
        <h3>All blogs</h3>
        <div>
          <BlogList blogPosts={blogPosts} />
        </div>
      </div>
    </div>
  );
}
