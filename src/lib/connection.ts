import mongoose from "mongoose"

const URL:any= process.env.MONGO_URL

export const ConnectDB = async () => {
    
    try {
       const conn = await mongoose.connect(URL);
        console.log("Connection Created>>", conn.connection.host)

    } catch (error) {
        console.log("Error :", error)
    }
}