import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = "mongodb+srv://sanskarsinha:qwerty12345@ecom.xg97s3o.mongodb.net/graminudyogini";
        const conn = await mongoose.connect(url);
        if (conn) {
            console.log(`Connected to DB: ${conn.connection.host}`);
        }
    }
    catch (err) {
        console.log(err);
    }
}
