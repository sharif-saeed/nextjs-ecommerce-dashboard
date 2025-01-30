import ProductBox from "./ProductBox";

export default function ProductList({products}){
    return(
        <div className="products-grid">
            {
                products.length > 0 &&
                products.map(
                    (product)=> <ProductBox product={product} key={product.id}/>
                )
             }
        </div>
    )
}