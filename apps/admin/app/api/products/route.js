import { connectedToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectedToDatabase()
        const products = await Product.find({})
        return NextResponse.json(products, {status:200})
    } catch(error){
        return NextResponse.json({error:error}, {status:500})
    }
}

export async function POST(req){
    try{
        await connectedToDatabase()
        const data = await req.json()
        const newProduct = new Product(data)
        await newProduct.save()
        return NextResponse.json({status:201})
    } catch(error){
        return NextResponse.json({status:500})
    }
}