import { connectedToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";


export async function GET(request){
    try{
        await connectedToDatabase()

        const {searchParams} = new URL(request.url)
        const category = searchParams.get("category")

        let products

        if(category){
            products = await Product.find({category})
        }else{
            products = await Product.find({})
        }
  
        return NextResponse.json(products, {status: 200})
    }catch(error){
        return NextResponse.json({error: "خطا در دریافت محصولات"}, {status:500})
    }
}