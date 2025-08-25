import style from "./BlogCard.module.css";

export default function BlogCard() {
  return (
    <div className={style.blogBox}>
      <img alt="rise-5g" src="/images/rise-5g.jpg" width={400} height={300} />
      <di>
        <h3>Category</h3>
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
      </di>
    </div>
  );
}
