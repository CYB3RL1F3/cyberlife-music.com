import { CartItem } from "~/hooks/db/useCart";

export const round = (value: number, decimals: number) => {
    return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
}


export const getHtPrice = (items: CartItem[]) => {
    const htPrice = items.reduce((acc, item) => {
        return acc + (item.release?.price || 0) * item.quantity;
    }, 0);
    return round(htPrice, 2);
}

export const getTtcPrice = (items: CartItem[]) => {
    const ttcPrice = getHtPrice(items) * 1.2;
    return round(ttcPrice, 2);
}