export default async function Orders() {

  const res = await fetch(`${process.env.PUBLIC_URL}/api/orders`)
  const orders = await res.json()

    return (
      <table>
        <thead>
          <tr>
            <th>نام کاربر</th>
            <th>ایمیل</th>
            <th>کشور - شهر - کدپستی</th>
            <th>جمع کل</th>
            <th>وضعیت</th>
            <th>تاریخ</th>
            <th>محصولات</th>
          </tr>
        </thead>

        <tbody>
          {
            orders.map((order)=>(
              <tr key={order._id}>
                <td>{order.user.name}</td>
                <td>{order.user.email}</td>
                <td>{order.user.country}-{order.user.city}-{order.user.postalCode}</td>
                <td>{order.totalPrice} تومان</td>
                <td>{order.status}</td>
                <td>{new Date(order.createAt).toLocaleDateString("fa-IR")}</td>
                <td>{order.cart.map(item=>(
                  item.title + item.quantity
                ))}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
  