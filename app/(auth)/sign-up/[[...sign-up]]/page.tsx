import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-md bg-base-200 bg-opacity-25 filter backdrop-filter backdrop-blur-lg bg-transparent rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center px-4 py-4">
                    Sign Up to Access the Full Features of the Website
                </h1>
                <SignUp />
            </div>
        </div>
    );
};

export default Page;