import ProductList from "./ProductList";

export default async function LatestProducts({searchParams}){

    const category = searchParams?.category

    const url = category ? 
    `http://localhost:3000/api/products?category=${category}`:
    "http://localhost:3000/api/products"

    const res = await fetch(url)
    const products = await res.json()
    
    return(
        <div className="new-products">
            <h2 className="title">{category? `محصولات ${category}`: "محصولات پر فروش"}</h2>
            <ProductList products = {products}/>
        </div>
    )
}