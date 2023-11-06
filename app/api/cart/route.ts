import { getUser } from "@/lib/utils";

export async function GET() {
    try {
        let user = await tryGetUser();
        return new Response(JSON.stringify(user));
    } catch (error) {
        console.error("GET error:", error);
        return new Response("An error occurred.", { status: 500 });
    }
}

async function tryGetUser() {
    let user = await getUser();
    if (!user)
        return tryGetUser();
    return user;
}