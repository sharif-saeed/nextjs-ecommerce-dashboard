"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditProduct(){

    const {id} = useParams()
    const router = useRouter()

    const [formData, setFormData] = useState({
            title:"",
            price:"",
            image:"",
            description:"",
            category:"لپتاپ"
    })

    useEffect(
           ()=>{
            async function fetchProduct(){
                const res = await fetch(`/api/products/${id}`)
                const data = await res.json()
                setFormData(data.product)
            }
            fetchProduct()
           } 
        , [])

    function handleChange(e){
            setFormData({...formData, [e.target.name]: e.target.value})
    }

    async function handleSumbit(e){
            e.preventDefault()
            const res = await fetch(`/api/products/${id}`,{
                method:"PUT",
                headers:{"content-type":"application/json"},
                body: JSON.stringify(formData)
        })

        if(res.ok){
                router.push("/products")
        }
    }

    return(
        <div>
        <h1>Edit the product below</h1>
        <form onSubmit={handleSumbit}>
            <input value={formData.title} onChange={handleChange} type="text" name="title" placeholder="title" />
            <input value={formData.price} onChange={handleChange} type="number" name="price" placeholder="price" />
            <input value={formData.image} onChange={handleChange} type="text" name="image" placeholder="image url" />
            <textarea value={formData.description} onChange={handleChange} name="description" placeholder="description"></textarea>
            <select value={formData.category} onChange={handleChange} name="category" >
                <option value="لپتاپ">لپتاپ</option>
                <option value="موبایل">موبایل</option>
                <option value="تبلت">تبلت</option>
            </select>
            <button type="sumbit">Save new info</button>
        </form>
    </div>
    )
}