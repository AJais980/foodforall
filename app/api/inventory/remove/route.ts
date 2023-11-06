import UserModel from "@/lib/models/User";
import { getUser } from "@/lib/utils";
import { NextRequest } from "next/server";
import { DonatedItem } from "@/types";

export async function DELETE(req: NextRequest) {
    try {
        const user = await getUser();
        const food = await req.json();
        const dbUser = await UserModel.findOne({ id: user.id });
        if (dbUser) {
            if (dbUser.addedToCart) {
                dbUser.addedToCart.filter((d: any) => d.itemId !== food.itemId)
                await dbUser.save();
            }
        }
        return new Response("OK");
    } catch (error) {
        // Handle and log the error appropriately
        console.error("DELETE error:", error);
        return new Response("An error occurred.", { status: 500 });
    }
}