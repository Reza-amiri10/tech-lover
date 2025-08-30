import style from "./BlogDetailPage.module.css";
import { useParams } from "react-router-dom";

export default function BlogDetail({ blogPosts }) {
  const { id } = useParams(); // Get the blog id from URL

  if (!blogPosts) return <p>Loading...</p>;

  const blog = blogPosts.find((b) => b.id === Number(id));

  if (!blog) return <p>Blog not found!</p>;
  return (
    <div className={style.BlogDetailConatainer}>
      <div className={style.blogDetailBox}>
        <img alt={blog.title} src={blog.image} className={style.blogImage} />
        <h3>{blog.category}</h3>
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <p>{blog.author}</p>
        <p>
          {blog.date} • {blog.readTime}
        </p>
      </div>
    </div>
  );
}
