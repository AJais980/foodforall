"use client";

import React, { useEffect, useState } from "react";
import DonateModal from "./DonateModal";
import { HiPlus, HiPencilAlt, HiTrash } from "react-icons/hi";
import { DonatedItem, DonatedItems } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { mergeArraysAndRemoveDuplicates, removeDuplicates } from "@/lib/utils";
import Loader from "@/components/Loader";

function formatDateTimeAgo(dateTimeString: any) {
    const formattedDate = formatDistanceToNow(new Date(dateTimeString), {
        addSuffix: true,
    });
    return formattedDate;
}

export type DonateModalProps = {
    onClose: () => void;
    onDonate: (item: DonatedItem) => void;
};

export type PageProps = {};

const Donate: React.FC<PageProps> = () => {
    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [donatedItems, setDonatedItems] = useState<DonatedItems>([]);
    const [isFetching, setIsFetching] = useState(true);

    const handleScroll = (scroll: Boolean) => {
        let fdCont = document.querySelector(".fd-cont");
        if (scroll) {
            fdCont?.classList.add("hidden");
        } else {
            fdCont?.classList.remove("hidden");
        }
    }

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setShowModal(true);
        handleScroll(true);
    };

    const handleDelete = async (index: number) => {
        const updatedItems = donatedItems.filter((_, i) => i !== index);
        setDonatedItems(updatedItems);
        await fetch("/api/item", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedItems),
        });
    }

    useEffect(() => {
        setIsFetching(true);
        (async () => {
            const res = await fetch("/api/item", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await res.json();
            setDonatedItems((prev) => mergeArraysAndRemoveDuplicates(prev, json));
        })();
        setIsFetching(false);
    }, []);

    useEffect(() => {
        if (donatedItems.length > 0) {
            setIsFetching(true);
            (async () => {
                await fetch("/api/item", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(donatedItems),
                });
            })();
            setIsFetching(false);
        }
    }, [donatedItems]);

    const handleDonate = (item: DonatedItem) => {
        if (editingIndex !== null) {
            const updatedItems = [...donatedItems];
            updatedItems[editingIndex] = item;
            setDonatedItems(updatedItems);
            setEditingIndex(null);
        } else {
            setDonatedItems([...donatedItems, item]);
        }
        handleScroll(false);
        setShowModal(false);
    };

    return (
        <div className="px-6 min-h-screen">
            <div className="container flex flex-col gap-4 mx-auto px-7 md:px-12 lg:px-24 p-10 fd-cont">
                <div className="mx-auto justify-items-center prose justify-center">
                    <h1 className="text-center font-extrabold">Food Donation</h1>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="btn-donate"
                        onClick={() => {
                            setEditingIndex(null);
                            handleScroll(true);
                            setShowModal(true);
                        }}
                    >
                        <HiPlus className="mr-2" />
                        Donate Food
                    </button>
                </div>
                {!isFetching ?
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {donatedItems.map((item, index) => (
                            <div
                                key={index}
                                className="dn-box bg-box p-4 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer relative"
                            >
                                <h3 className="text-lg font-semibold mb-2 capitalize">
                                    {item.foodName}
                                </h3>
                                <p>Raw/Cooked: {item.rawOrCooked == "raw" ? "Raw" : "Cooked"}</p>
                                <p>Location: {item.location}</p>
                                <p>Amount: {item.amount}</p>
                                <p>
                                    MFD/Cooked Time: {formatDateTimeAgo(item.manufactureTime)}
                                </p>
                                <p>
                                    Estimated Expiry: {formatDateTimeAgo(item.expiry)}
                                </p>
                                <div className="absolute top-2 right-2">
                                    <button
                                        onClick={() => handleEdit(index)}
                                        className="text-gray-700 hover:text-black"
                                    >
                                        <HiPencilAlt className="text-xl" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="ml-2 text-red-500 hover:text-red-600"
                                    >
                                        <HiTrash className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div> : <Loader />
                }
            </div>

            {showModal && (
                <DonateModal
                    onClose={() => {
                        setEditingIndex(null);
                        handleScroll(false);
                        setShowModal(false);
                    }}
                    onDonate={handleDonate}
                    editedItem={
                        editingIndex !== null ? donatedItems[editingIndex] : undefined
                    }
                />
            )}
        </div>
    );
};

export default Donate