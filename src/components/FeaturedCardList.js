import style from "./FeaturedCardList.module.css";
import FeaturedCard from "./FeaturedCard";
import featuredPost from "./data/featuredPost";

export default function FeaturedCardList() {
  const featuredData = featuredPost.map((item) => (
    <FeaturedCard
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
  return <div className={style.featuredCardContiner}>{featuredData}</div>;
}
