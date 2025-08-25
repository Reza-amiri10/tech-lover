import style from "./FeaturedCard.module.css";
export default function FeaturedCard() {
  return (
    <div className={style.featuredCardBox}>
      <img alt="rise-5g" src="/images/rise-5g.jpg" width={400} height={300} />
      <div className={style.discription}>
        <button>Category</button>
        <h3>The Rise of 5G: Transforming Mobile Connectivity and Beyond</h3>
        <p>
          Virtual Reality (VR) has come a long way since its inception,
          transforming from a sci-fi concept to a tangible technology that is
          revolutionizing various industries
        </p>
        <div>
          <p>Author</p>
          <p>July 19,2025 . 5 min read</p>
        </div>
      </div>
    </div>
  );
}
