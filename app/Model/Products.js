import mongoose from "mongoose";

const Products_react = mongoose.Schema(
    {
        prod_id: Number,
        prod_name:String,
        prod_price: Number,
        prod_desc: String,

    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Products_react || mongoose.models("Products_react",Products_react);