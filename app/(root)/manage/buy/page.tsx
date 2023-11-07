"use client";

import React, { useState, useEffect } from "react";
import FoodCard from "@/components/FoodCard";
import SearchBar from "@/components/SearchBar";
import { UserType, DonatedItem } from "@/types";
import Loader from "@/components/Loader";

const HomePage: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredItems, setFilteredItems] = useState<DonatedItem[]>([]);
    const [userInventory, setUserInventory] = useState<DonatedItem[]>([]);
    const [isFetching, setIsFetching] = useState(true);

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
            setIsFetching(true);
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
            setIsFetching(false);
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
        <div className="px-6 min-h-screen">
            <div className="container flex flex-col gap-4 mx-auto px-7 md:px-12 p-10 fd-cont">
                <div className="mx-auto justify-items-center prose justify-center">
                    <h1 className="text-center font-extrabold">
                        Add Food Items From Here
                    </h1>
                </div>
                <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
                {!isFetching ?
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
                    </div> : <Loader />
                }
            </div>
        </div>
    );
};

export default HomePage;