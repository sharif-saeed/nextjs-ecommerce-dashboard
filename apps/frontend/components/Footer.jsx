import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="inner-wrapper">
          <div className="footer-menu">
            <span>دوره های آکادمی در یوتیوب</span>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PLBWTGJo8tIVhuYXtf9I-0Ec5UI3IGER2i"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره ری اکت
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PLBWTGJo8tIVjP0VY9GXNUzI49lCEDhkw0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره ریداکس
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PLBWTGJo8tIVgW4h2uCzY8OyRunb9p6S6e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://saeed-sharifi.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  سایت آکادمی
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <span>دوره های آکادمی در آپارات</span>
            <ul>
              <li>
                <a
                  href="https://www.aparat.com/playlist/11532073"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره ری اکت
                </a>
              </li>
              <li>
                <a
                  href="https://www.aparat.com/playlist/12025572"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره ریداکس
                </a>
              </li>
              <li>
                <a
                  href="https://www.aparat.com/playlist/12524173"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://saeed-sharifi.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  سایت آکادمی
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <span>راه‌های ارتباطی</span>
            <ul className="contact">
              <li>
                <a
                  href="https://instagram.com/shariff_saeed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  اینستاگرام
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/shariff-saeed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  لینکدین
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/shariff_saeed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تلگرام
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-box">
        <div className="container-footer">
          <p>© {new Date().getFullYear()} Saeed Sharifi Academy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
