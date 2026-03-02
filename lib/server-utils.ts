import { currentUser } from "@clerk/nextjs/server";
import { connectDB } from "./mongoose";
import UserModel from "./models/User";

export async function getUser() {
    try {
        await connectDB();
        const currentuser = await currentUser();
        if (!currentuser) return null;
        const dbUser = await UserModel.findOne({ id: currentuser?.id });
        if (!dbUser) return null;
        return dbUser;
    } catch (error) { }
}

export async function removeItemFromUser(
    userId: string,
    itemIdsToRemove: string[]
) {
    try {
        await UserModel.findByIdAndUpdate(
            userId,
            {
                $pull: { addedToCart: { itemId: { $in: itemIdsToRemove } } },
            },
            { new: true }
        );
    } catch (error) {
        console.error("Error removing items from user:", error);
        throw error;
    }
}

export async function saveUser(user: any) {
    await connectDB();
    try {
        const currentUser = {
            name: user?.username || "",
            id: user?.id || "",
            avatar: user?.imageUrl || "",
            email: user?.emailAddresses[0].emailAddress || "",
            foodItems: [],
            addedToCart: [],
        };

        let dbUser = await UserModel.findOne({ id: user?.id });
        if (!dbUser) {
            await UserModel.create(currentUser);
            dbUser = await UserModel.findOne({ id: user?.id });
        }
        return dbUser;
    } catch (error) {
        console.log(error);
    }
}
