import style from "./Footer.module.css";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={style.footerContiner}>
      <div className={style.footerItems}>
        <h3>Get the latest updates</h3>
        <p>
          Stay updated with the latest news, trends, and breakthroughs in
          technology — delivered fresh to keep you informed and ahead.
        </p>
        <div>
          <input placeholder="Enter your email..."></input>
          <button>Subscribe</button>
        </div>
        <p>
          By clicking Subscribe Up you're confirming that you agree with our
          Terms and Conditions.
        </p>
        <ul className={style.socialMediaItems}>
          <li>F</li>
          <li>I</li>
          <li>X</li>
          <li>Li</li>
          <li>U</li>
        </ul>

        <div>
          <p>
            © {year} Tech Lover Sharing the love of technology. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
