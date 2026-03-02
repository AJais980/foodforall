import { DonatedItem } from "@/types";

export function deleteItem(data: DonatedItem[], food: DonatedItem) {
    return data.filter((item) => item.itemId !== food.itemId);
}

export function generateUniqueId() {
    const timestamp = Math.floor(Date.now() / 1000).toString(16);
    const randomValue = Math.floor(Math.random() * 16777215).toString(16);
    return `${timestamp}${randomValue}`.padEnd(24, "0");
}

export function mergeArraysAndRemoveDuplicates(
    previousItems: DonatedItem[],
    newItems: DonatedItem[]
) {
    const itemSet = new Set(previousItems.map((item) => item.itemId));
    const mergedItems = previousItems.slice();

    for (const newItem of newItems) {
        if (!itemSet.has(newItem.itemId)) {
            itemSet.add(newItem.itemId);
            mergedItems.push(newItem);
        }
    }

    return mergedItems;
}

export function removeDuplicates(items: DonatedItem[]): DonatedItem[] {
    const uniqueItems: Record<string, DonatedItem> = {};

    for (const item of items) {
        uniqueItems[item.itemId] = item;
    }

    return Object.values(uniqueItems);
}