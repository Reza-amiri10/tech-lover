import style from "./BlogCard.module.css";
import { Link } from "react-router-dom";

export default function BlogCard({
  category,
  title,
  description,
  author,
  date,
  readTime,
  image,
}) {
  return (
    <Link className={style.link} to="/blogDetail">
      <div className={style.blogBox}>
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
