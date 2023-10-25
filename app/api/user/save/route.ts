import { NextRequest } from "next/server";
import { saveUser } from "@/lib/utils";

export async function POST(req: NextRequest) {
    try {
        // Connect to the database when the application starts
        const user = await req.json();
        let newUser = await saveUser(user);
        return new Response(JSON.stringify(newUser));
    } catch (error) {
        console.error("POST error:", error);
        return new Response("An error occurred.", { status: 500 });
    }
}