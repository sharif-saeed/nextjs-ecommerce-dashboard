const HeroSection = () => {
    return (
      <section className="hero-section">
        <div className="container">
          <div className="hero-wrapper">
            <div className="text-content">
              <h1>آکادمی سعید شریفی</h1>
              <p>
                بهترین محصولات را با قیمتی باور نکردنی خریداری کنید. همین حالا مجموعه‌ای از کالاهای
                متنوع را بررسی کرده و تجربه خریدی متفاوت را احساس کنید.
              </p>
              <a href="/products" className="btn-primary">مشاهده محصولات</a>
            </div>
            <div className="image-wrapper">
              <img src="/images/3.jpg" alt="محصولات فروشگاهی" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  