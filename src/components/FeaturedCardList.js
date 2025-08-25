import style from "./FeaturedCardList.module.css";
import FeaturedCard from "./FeaturedCard";

export default function FeaturedCardList() {
  return (
    <div className={style.featuredCardContiner}>
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
    </div>
  );
}
