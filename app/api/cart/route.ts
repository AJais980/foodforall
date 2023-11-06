import { getUser } from "@/lib/utils";

export async function GET() {
    try {
        let user = await getUser();
        return new Response(JSON.stringify(user ? user : null));
    } catch (error) {
        console.error("GET error:", error);
        return new Response("An error occurred.", { status: 500 });
    }
}