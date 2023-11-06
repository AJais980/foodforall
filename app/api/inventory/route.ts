import UserModel from "@/lib/models/User";
import { getUser, mergeArraysAndRemoveDuplicates } from "@/lib/utils";
import { DonatedItem } from "@/types";
import { NextRequest } from "next/server";

export async function GET() {
    try {
        const user = await getUser();
        return new Response(JSON.stringify(user?.addedToCart));
    } catch (error) {
        console.error("GET error:", error);
        return new Response("An error occurred.", { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const user = await getUser();
        const food = await req.json();

        const dbUser = await UserModel.findOne({ id: user.id });

        // Merge the arrays and remove duplicates using Set
        const items = mergeArraysAndRemoveDuplicates(dbUser.addedToCart, [food]);

        // Update the addedToCart array directly
        dbUser.addedToCart = Array.from(items);

        await dbUser.save();

        return new Response("OK");
    } catch (error) {
        // Handle and log the error appropriately
        console.error("POST error:", error);
        return new Response("An error occurred.", { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const user = await getUser();
        const food = await req.json();
        const dbUser = await UserModel.findOne({ id: user.id });
        const items = dbUser?.addedToCart.filter((d: DonatedItem) => d.itemId !== food.itemId);
        dbUser.addedToCart = Array.from(items);
        await dbUser.save();
        return new Response("OK");
    } catch (error) {
        // Handle and log the error appropriately
        console.error("DELETE error:", error);
        return new Response("An error occurred.", { status: 500 });
    }
}