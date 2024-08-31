import { createContext } from "react";
import type { CartContextType } from "./CartContext.types";

export const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  expedition: {
    __typename: "Expedition",
    trackingNumber: "",
    service: "",
    status: "",
    address: {
      __typename: "Address",
      name: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      extra: ""
    },
    email: "",
    phone: 0,
    amountWithTax: 0,
    vat: 0.2
  },
  addItem: () => {},
  removeItem: () => {},
  setExpedition: () => {},
  setItemQuantity: () => {},
  isItemInCart: () => false
});
