import { getUser } from "@/lib/utils";

export async function GET() {
    try {
        let test = {
            "name": "Aman"
        };
        const user = await getUser();
        return new Response(JSON.stringify(test));
    } catch (error) {
        console.error("GET error:", error);
        return new Response("An error occurred.", { status: 500 });
    }
}