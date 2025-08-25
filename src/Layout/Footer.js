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
        <div className={style.inputBtn}>
          <input placeholder="Enter your email..."></input>
          <button>Subscribe</button>
        </div>
        <p>
          By clicking Subscribe Up you're confirming that you agree with our
          Terms and Conditions.
        </p>
        <ul className={style.socialMediaItems}>
          <li>
            <img alt="facebook-logo" src="/images/facebook.png" />
          </li>
          <li>
            <img alt="instagram logo" src="/images/instagram.png" />
          </li>
          <li>
            <img alt="x logo" src="/images/twitter.png" />
          </li>
          <li>
            <img alt="linkedin logo" src="/images/linkedin.png" />
          </li>
          <li>
            <img alt="youtube" src="/images/youtube.png" />
          </li>
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
