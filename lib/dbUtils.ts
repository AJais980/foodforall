import { currentUser } from "@clerk/nextjs";
import { connectDB } from "./mongoose";
import UserModel from "./models/User";

export async function getUser() {
    try {
        await connectDB();
        const currentuser = await currentUser();
        if (!currentuser) return null;
        let dbUser = await UserModel.findOne({ id: currentuser?.id });
        if (!dbUser) {
            dbUser = await saveUser(currentuser);
        }
        return dbUser;
    } catch (error) {
        console.log("getUser(): ", error)
    }
}

export async function saveUser(user: any) {
    try {
        const newUser = {
            name: user?.username || "",
            id: user?.id || "",
            avatar: user?.imageUrl || "",
            email: user?.emailAddresses[0].emailAddress || "",
            foodItems: [],
            addedToCart: [],
        };
        let dbUser = await UserModel.findOne({ id: user?.id });
        if (!dbUser) {
            dbUser = await UserModel.create(newUser);
        }
        return dbUser;
    } catch (error) {
        console.log("saveUser(user): ", error);
    }
}