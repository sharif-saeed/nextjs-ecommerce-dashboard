import Link from "next/link"
import { FiEdit, FiTrash2 } from "react-icons/fi"

export default async function Products(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
  const products = await res.json()

  return(
    <div>
      <h1>This is product page</h1>
      <Link href="/products/new">
        <button>Add new product</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            products.map(product=>(
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>
                  <Link href={`products/edit/${product._id}`}><FiEdit/></Link>
                  <Link href={`products/delete/${product._id}`}><FiTrash2/></Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}