import style from "./BlogList.module.css";
import blogPosts from "./data/blogPosts";
import BlogCard from "./BlogCard";

export default function BlogList() {
  const blogPostGenerator = blogPosts.map((item) => (
    <BlogCard
      key={item.id}
      category={item.category}
      title={item.title}
      description={item.description}
      author={item.author}
      date={item.date}
      readTime={item.readTime}
      image={item.image}
    />
  ));
  return <div className={style.blogCardContiner}>{blogPostGenerator}</div>;
}
