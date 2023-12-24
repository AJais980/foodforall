import UserModel from "@/lib/models/User";
import { connectDB } from "@/lib/mongoose";

export async function GET() {
    try {
        // Connect to the database when the application starts
        await connectDB();

        let users = await UserModel.find();

        return new Response(JSON.stringify(users));
    } catch (error) {
        console.error("POST error:", error);
        return new Response("An error occurred.", { status: 500 });
    }
}