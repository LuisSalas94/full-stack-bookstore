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
		clearCart(state, { payload }) {
			state.cartItems = [];
		},
		decreaseCartQuantity(state, { payload }) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.isbn === payload.isbn
			);
			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const itemIndex = state.cartItems.filter(
					(item) => item.isbn !== payload.isbn
				);
				state.cartItems = itemIndex;
			}
		},
		getTotals(state, { payload }) {
			let { total, quantity } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					const { price, cartQuantity } = cartItem;
					const itemTotal = price * cartQuantity;
					cartTotal.total += itemTotal;
					cartTotal.quantity += cartQuantity;
					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);
			state.cartTotalQuantity = quantity;
			state.cartTotalAmount = total;
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	clearCart,
	decreaseCartQuantity,
	getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
