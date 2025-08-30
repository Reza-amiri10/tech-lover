import style from "./BlogCard.module.css";
import { Link } from "react-router-dom";

export default function BlogCard({
  id,
  category,
  title,
  description,
  author,
  date,
  readTime,
  image,
}) {
  return (
    <Link key={id} className={style.link} to={`/blog/${id}`}>
      <div key={id} className={style.blogBox}>
        <img alt="rise-5g" src={image} width={400} height={300} />
        <div>
          <button>{category}</button>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>
            <p>{author}</p>
            <p>
              {date} . {readTime}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
