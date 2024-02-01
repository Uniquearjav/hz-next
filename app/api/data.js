import Products_react from "../../Model/Products";
import connectDB from "../lib/connectDB"

export default async function handler(req, res) {
    await connectDB()
    
    const {prod_id,prod_name,prod_price,prod_desc} = req.body;
    const person = new user({
        prod_desc:prod_id,
        prod_name:prod_name,
        prod_price:prod_price,
        prod_desc:prod_desc,
    })
    await person.save()
    console.log("inside api",prod_id,prod_name,prod_price,prod_desc)
    res.status(200).json({ done: true })
  }

//   prod_id: Number,
//         prod_name:String,
//         prod_price: Number,
//         prod_desc: String,