import style from "./FeaturedCardList.module.css";
import FeaturedCard from "./FeaturedCard";

export default function FeaturedCardList({ featuredPost }) {
  const featuredData = featuredPost.map((item) => (
    <FeaturedCard
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
    <div className={style.featuredCardContiner}>
      <h3>Featured Blogs</h3>
      {featuredData}
    </div>
  );
}
