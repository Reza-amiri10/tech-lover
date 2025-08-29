import style from "./FeaturedCard.module.css";
import { Link } from "react-router-dom";
export default function FeaturedCard({
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
      <div className={style.featuredCardBox}>
        <img alt={title} src={image} width={400} height={300} />
        <div className={style.discription}>
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
