import React, { useState, useEffect } from "react";
import { generateUniqueId } from "@/lib/utils";

type DonateModalProps = {
    onClose: () => void;
    onDonate: (item: DonatedItem) => void;
    editedItem?: DonatedItem;
};

type DonatedItem = {
    foodName: string;
    itemId: string;
    rawOrCooked: string;
    location: string;
    amount: string;
    manufactureTime: string;
    expiry: string;
    [key: string]: any;
};

const formFields = [
    { name: "foodName", label: "Food Name", type: "text" },
    {
        name: "rawOrCooked",
        label: "Raw or Cooked",
        type: "select",
        options: ["Raw", "Cooked"],
    },
    { name: "location", label: "Location", type: "text" },
    { name: "amount", label: "Amount", type: "number" },
    {
        name: "manufactureTime",
        label: "Manufacture/Cook Time",
        type: "datetime-local",
    },
    { name: "expiry", label: "Estimated Expiry", type: "datetime-local" },
];

const DonateModal: React.FC<DonateModalProps> = ({
    onClose,
    onDonate,
    editedItem,
}) => {
    const [formData, setFormData] = useState<DonatedItem>({
        foodName: "",
        itemId: generateUniqueId(),
        rawOrCooked: "raw",
        location: "",
        amount: "",
        manufactureTime: "",
        expiry: "",
    });

    useEffect(() => {
        if (editedItem) {
            setFormData(editedItem);
        }
    }, [editedItem]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem: DonatedItem = formData;
        onDonate(newItem);
    };

    return (
        <div className="pt-10 overflow-y-auto flex justify-center items-center">
            <div className="w-full max-w-md p-4 bg-box rounded-md shadow-xl">
                <h3 className="text-lg font-medium text-center mb-4">
                    Donate Food Item
                </h3>
                <form className="space-y-2" onSubmit={handleSubmit}>
                    {formFields.map((field) => (
                        <div key={field.name}>
                            <label className="block">{field.label}</label>
                            {field.type === "select" ? (
                                <select
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full text-black rounded-md border shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                                >
                                    {field.options?.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full rounded-md text-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-1 border"
                                    required
                                />
                            )}
                        </div>
                    ))}
                    <div className="flex space-x-4 items-center justify-center">
                        <button
                            type="submit"
                            className="flex justify-center items-center gap-2 w-48 h-12 cursor-pointer rounded-md shadow-2xl font-semibold bg-gradient-to-r from-[#71fb88] via-[#1de147] to-[#12be12] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#12be20] hover:to-[#71fb78]"
                        >
                            Donate
                        </button>
                        <button
                            type="button"
                            className="flex justify-center items-center gap-2 w-48 h-12 cursor-pointer rounded-md shadow-2xl font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DonateModal;