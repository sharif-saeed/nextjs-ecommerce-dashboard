"use client"

import TrashIcon from "@/components/icons/Trash";
import { CartContext } from "@/contexts/CartContext";
import { enTofa } from "@/utils/Utilities";
import Image from "next/image";
import { useContext } from "react";


export default function Cart(){

    let {cart, removeFromCart, updateQuantity, getTotal} = useContext(CartContext)

    return(
        <div className="cart-grid">
            <div className="cart-box">
                <h2>سبد خرید</h2>

                {cart.length == 0 && <div>سبد خرید خالی است</div>}

                {
                    cart.length > 0 && (
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>کالا</th>
                                    <th>قیمت (تومان)</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cart.map(
                                        (product)=> (
                                            <tr key={product._id}>
                                                <td className="cart-product">
                                                    <Image src={product.image} width={80} height={80}
                                                        className="cart-product-image"
                                                        alt={product.title}/>
                                                    {product.title}
                                                    <input type="number" value={product.quantity} min="1"
                                                    onChange={(event)=>updateQuantity(product._id, Number(event.target.value))}/>
                                                    <button onClick={()=>removeFromCart(product._id)}><TrashIcon/></button>
                                                </td>

                                                <td>
                                                    {enTofa(product.price) }
                                                </td>
                                            </tr>
                                        )
                                    )
                                }

                                <tr>
                                    <td> <strong>مجموع</strong></td>
                                    <td><strong>{enTofa(getTotal()) }</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            </div>

            {
                cart.length > 0 && (
                    <div className="cart-box">
                        <h2 className="cart-title">اطلاعات شما</h2>
                        <form className="cart-form">
                            <input type="text" className="cart-input" placeholder="نام" />
                            <input type="email" className="cart-input" placeholder="ایمیل" />
                            <input type="text" className="cart-input" placeholder="کشور" />
                            <input type="text" className="cart-input" placeholder="شهر" />
                            <input type="text" className="cart-input" placeholder="آدرس" />
                            <input type="number" className="cart-input" placeholder="کدپستی" />
                            <button className="cart-button">پرداخت آنلاین</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}