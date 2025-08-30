import style from "./CategoryPage.module.css";
import BlogCard from "../components/BlogCard";

import { useParams } from "react-router-dom";

export default function CategoryPage({ blogPosts }) {
  const { categoryName } = useParams();

  const capitalizeFirst = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  const capitalizeCategoryName = capitalizeFirst(categoryName);
  const filteredBlogs = blogPosts.filter(
    (blog) => blog.category.toLowerCase() === categoryName.toLocaleLowerCase()
  );

  const filterBlogResult = filteredBlogs.map((item) => (
    <BlogCard
      key={item.id}
      id={item.id}
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
    <div className={style.blogCatCardContiner}>
      <h3>{capitalizeCategoryName}</h3>
      <div className={style.blogCatBox}>{filterBlogResult}</div>
    </div>
  );
}
