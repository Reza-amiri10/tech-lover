import style from "./BlogList.module.css";

import BlogCard from "./BlogCard";

export default function BlogList() {
  return (
    <div className={style.blogCardContiner}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}
