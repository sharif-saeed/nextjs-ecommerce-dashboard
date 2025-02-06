import { enTofa } from "@/utils/Utilities";


export default async function ProductDetail({params}){

    const {id} = await params
    const res = await fetch(`http://localhost:3000/api/products/${id}`)
    const mainProduct = await res.json()

    return(
        <div className="product-detail">
            <div className="product-detail-content">
                <div className="new-product-image">
                    <img src={mainProduct.image} alt={mainProduct.title} />
                </div>

                <div className="new-product-info">
                    <h1 className="new-product-title">{mainProduct.title}</h1>
                    <p className="new-product-description">{mainProduct.description}</p>
                    <div className="product-price-row">
                        <div className="product-price">{enTofa(mainProduct.price) }</div>
                        <button className="product-button">
                            افزودن به سبد خرید
                        </button>
                </div>
                </div>
            </div>
        </div>
    )

}