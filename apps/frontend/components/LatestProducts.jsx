import ProductList from "./ProductList";

const products = [
    {id: 1, title: "محصول یک", price: "3000000", image: "/images/1.jpg", description: "این محصول با کیفیت بالا برای استفاده روزانه طراحی شده است. مناسب برای افرادی که به دنبال کارایی و دوام هستند."},
    {id: 2, title: "محصول دو", price: "550000", image: "/images/2.jpg", description: "محصولی مقرون به صرفه که می‌تواند نیازهای ابتدایی شما را برطرف کند. با طراحی ساده و کاربری آسان."},
    {id: 3, title: "محصول سه", price: "1000000", image: "/images/3.jpg", description: "این محصول با ویژگی‌های خاص و طراحی مدرن، بهترین انتخاب برای کسانی است که به دنبال کیفیت و استایل هستند."},
    {id: 4, title: "محصول چهار", price: "150000", image: "/images/1.jpg", description: "محصولی مناسب برای استفاده در منزل یا محل کار. کارایی بالا با قیمت مناسب."},
    {id: 5, title: "محصول پنج", price: "3000000", image: "/images/1.jpg", description: "محصولی با کیفیت عالی و مناسب برای استفاده در شرایط مختلف. طراحی شیک و مقاوم."},
    {id: 6, title: "محصول شش", price: "550000", image: "/images/2.jpg", description: "یک انتخاب اقتصادی با قیمت مناسب و کاربری راحت. برای کسانی که به دنبال گزینه‌های ارزانتر هستند."},
    {id: 7, title: "محصول هفت", price: "1000000", image: "/images/3.jpg", description: "یک محصول با ویژگی‌های حرفه‌ای، مناسب برای استفاده در محیط‌های کاری یا تخصصی."},
    {id: 8, title: "محصول هشت", price: "150000", image: "/images/1.jpg", description: "محصولی با کیفیت بالا و قیمت بسیار مناسب. مناسب برای کسانی که به دنبال صرفه‌جویی هستند."},
  ];

export default function LatestProducts(){
    return(
        <div className="new-products">
            <h2 className="title">محصولات پر فروش</h2>
            <ProductList products = {products}/>
        </div>
    )
}