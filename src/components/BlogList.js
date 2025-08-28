import style from "./BlogList.module.css";
import BlogCard from "./BlogCard";

export default function BlogList({ blogPosts }) {
  const blogPostGenerator = blogPosts.map((item) => (
    <BlogCard
      key={item.id}
      category={item.category}
      title={item.title}
      description={item.description.slice(0, 150) + "..."}
      author={item.author}
      date={item.date}
      readTime={item.readTime}
      image={item.image}
    />
  ));
  return (
    <div className={style.latesBContiner}>
      <div className={style.blogCardContiner}>{blogPostGenerator}</div>
    </div>
  );
}
