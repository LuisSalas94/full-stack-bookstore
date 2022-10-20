import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, { payload }) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.isbn === payload.isbn
			);

			if (itemIndex >= 0) {
				// Item already exists in the cart
				state.cartItems[itemIndex].cartQuantity += 1;
			} else {
				// Item does not exist in the cart
				const tempItem = { ...payload, cartQuantity: 1 };
				state.cartItems.push(tempItem);
			}
		},
		removeFromCart(state, { payload }) {
			const itemIndex = state.cartItems.filter((item) => item.isbn !== payload);
			state.cartItems = itemIndex;
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
