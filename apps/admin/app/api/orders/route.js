import { connectedToDatabase } from "@/lib/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectedToDatabase()
        const orders = await Order.find({})
        return NextResponse.json(orders, {status:200})
    } catch(error){
        return NextResponse.json({status:500})
    }
}