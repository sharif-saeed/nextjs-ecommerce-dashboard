import mongoose from "mongoose"

const uri = process.env.MONGODB_URI

if(!uri) throw new Error("تنظیمات دیتابیس را وارد کنید ⛔")

let isConnected = false

export async function connectedToDatabase(){
    if(isConnected) return console.log("✅ اتصال به دیتابیس قبلاً برقرار شده است")

    try{
        await mongoose.connect(uri, {dbName: "test"})
        isConnected = true
        console.log("✅ اتصال موفقیت‌آمیز بود")
    }catch(error){
        console.error("❌ خطای اتصال به دیتابیس:", error)
        process.exit(1)
    }
}