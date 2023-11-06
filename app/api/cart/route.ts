import { getUser } from "@/lib/utils";

export async function GET() {
    try {
        const user = await getUser();
        console.log("User: ", user);
        return new Response(JSON.stringify(user));
    } catch (error) {
        console.error("GET error:", error);
        return new Response("An error occurred.", { status: 500 });
    }
}