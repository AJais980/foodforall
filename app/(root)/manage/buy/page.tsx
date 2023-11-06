"use client";

import React, { useState, useEffect } from "react";
import FoodCard from "@/components/FoodCard";
import SearchBar from "@/components/SearchBar";
import { UserType, DonatedItem } from "@/types";

const HomePage: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredItems, setFilteredItems] = useState<DonatedItem[]>([]);
    const [userInventory, setUserInventory] = useState<DonatedItem[]>([]);

    const fetchUserData = async () => {
        const res = await fetch("/api/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await res.json();
        setUsers(json);
    };

    const fetchUserInventory = async () => {
        const res = await fetch("/api/inventory", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const json = await res.json();
        setUserInventory(json);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    useEffect(() => {
        fetchUserInventory();
    }, [])

    useEffect(() => {
        if (users) {
            const foods = users?.flatMap((user: UserType) =>
                user?.foodItems.map((food) => ({
                    ...food,
                    ownerId: user.id
                }))
            );

            if (searchTerm.length > 0) {
                const filteredFoods = foods.filter((food) =>
                    food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredItems(filteredFoods);
            } else {
                setFilteredItems(foods);
            }
        }
    }, [searchTerm, users]);

    const handleCartAdd = async (food: DonatedItem) => {
        // code

        await fetch("/api/inventory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(food),
        });

        await fetchUserData();
        await fetchUserInventory();
    };

    const handleCartRemove = async (food: DonatedItem) => {
        // code
        await fetch("/api/inventory", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(food),
        });

        await fetchUserData();
        await fetchUserInventory();
    };

    return (
        <div className="p-6 min-h-screen w-[100%]">
            <h1 className="text-2xl mb-4 font-bold text-center animate-gradient-text">
                Add Food Items From Here
            </h1>
            <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                {filteredItems?.map((food, index) => {
                    const isExist = userInventory?.find(
                        (item) => item.itemId === food.itemId
                    );
                    const inCart = isExist?.itemId ? true : false;
                    return (
                        <FoodCard
                            key={index}
                            food={food}
                            isAddedToCart={inCart}
                            onAddToCart={() => handleCartAdd(food)}
                            onRemoveFromCart={() => handleCartRemove(food)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default HomePage;