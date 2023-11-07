"use client";

import Loader from "@/components/Loader";
import { DonatedItem } from "@/types";
import React, { useEffect, useState } from "react";

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<DonatedItem[]>([]);

    const [isFetching, setIsFetching] = useState(true);

    const handleRemoveFromCart = async (food: DonatedItem) => {
        await fetch("/api/inventory", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(food),
        });

        await fetchCartItems();
    };

    async function fetchCartItems() {
        setIsFetching(true);
        const res = await fetch("/api/inventory", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const cartItemsData = await res.json();
        setCartItems(cartItemsData);
        setIsFetching(false);
    }

    useEffect(() => {
        fetchCartItems();
    }, []);

    return (
        <div className="p-6 min-h-screen">
            <h1 className="text-2xl font-semibold mb-4 text-center">Item List</h1>

            {cartItems.length > 0 ? (
                <div className="dn-box bg-box p-4 shadow-md relative px-4 py-2 rounded w-[100%]">
                    <h2 className="text-lg font-semibold mb-2">Selected Foods</h2>
                    <ul className="list-disc ml-6">
                        {cartItems.map((food) => (
                            <li
                                key={`${food.foodName}-${food.amount}`}
                                className="flex justify-between items-center"
                            >
                                <span>{`${food.foodName} (${food.amount})`}</span>
                                <button
                                    className="text-red-600 hover:text-red-800"
                                    onClick={() => handleRemoveFromCart(food)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : isFetching ? (
                <Loader />
            )
                : (
                    <p className="text-center text-lg">List is empty.</p>
                )}
        </div>
    );
};

export default CartPage;