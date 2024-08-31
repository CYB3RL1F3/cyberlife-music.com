import type {
  CartContextAction,
  CartContextState,
  CartItem,
  QuantityPayload
} from "./CartContext.types";

export const initialState: CartContextState = {
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
  }
};

const getTotalAmount = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.amount * item.quantity, 0);
};

const addItem = (state: CartContextState, value: CartItem) => {
  const items = [...state.items, value];
  const totalAmount = getTotalAmount(items);
  return {
    ...state,
    items,
    totalAmount
  };
};

const removeItem = (state: CartContextState, id: CartItem["id"]) => {
  const items = state.items.filter((item) => item.id !== id);
  const totalAmount = getTotalAmount(items);
  return {
    ...state,
    items,
    totalAmount
  };
};

const setItemQuantity = (state: CartContextState, payload: QuantityPayload) => {
  const { quantity, id } = payload;
  const items = state.items.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity
      };
    }
    return item;
  });
  const totalAmount = getTotalAmount(items);
  return {
    ...state,
    items,
    totalAmount
  };
};

const setExpedition = (
  state: CartContextState,
  expedition: CartContextState["expedition"]
) => {
  return {
    ...state,
    expedition
  };
};

const playerContextReducer = (
  state = initialState,
  { type, payload }: CartContextAction
) => {
  switch (type) {
    case "ADD_ITEM": {
      const updatedState = addItem(state, payload);
      return updatedState;
    }
    case "REMOVE_ITEM": {
      const updatedState = removeItem(state, payload);
      return updatedState;
    }
    case "SET_ITEM_QUANTITY": {
      const updatedState = setItemQuantity(state, payload);
      return updatedState;
    }
    case "SET_EXPEDITION": {
      const updatedState = setExpedition(state, payload);
      return updatedState;
    }
    default:
      return state;
  }
};

export default playerContextReducer;
