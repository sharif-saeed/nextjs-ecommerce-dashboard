import { enTofa } from "@/utils/Utilities";
import Image from "next/image";

export default function ProductBox({product}){
    return(
        <div className="product-wrapper">
            <div className="product-image-box">
                <Image width={150} height={150} src={product.image} alt={product.title}/>
            </div>

            <div className="product-info-box">
                <div className="product-title">{product.title}</div>
                <div className="product-price-row">
                    <button className="product-button">افزودن به سبد خرید</button>
                    <div className="product-price">{enTofa(product.price) }</div>
                </div>
            </div>
        </div>
    )
}