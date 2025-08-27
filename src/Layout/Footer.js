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
          <div className={style.inputBox}>
            <input className={style.name} placeholder="Name.."></input>
            <input className={style.email} placeholder="Email..."></input>
          </div>
          <button>Subscribe</button>
        </div>
        <p>
          By clicking Subscribe Up you're confirming that you agree with our
          Terms and Conditions.
        </p>
        <ul className={style.socialMediaItems}>
          <li>
            <img
              alt="facebook logo"
              src={`${process.env.PUBLIC_URL}/images/facebook.png`}
            />
          </li>
          <li>
            <img
              alt="instagram logo"
              src={`${process.env.PUBLIC_URL}/images/instagram.png`}
            />
          </li>
          <li>
            <img
              alt="x logo"
              src={`${process.env.PUBLIC_URL}/images/twitter.png`}
            />
          </li>
          <li>
            <img
              alt="linkedin logo"
              src={`${process.env.PUBLIC_URL}/images/linkedin.png`}
            />
          </li>
          <li>
            <img
              alt="youtube logo"
              src={`${process.env.PUBLIC_URL}/images/youtube.png`}
            />
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
