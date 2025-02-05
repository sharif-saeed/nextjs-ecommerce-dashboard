import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    description: String
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
