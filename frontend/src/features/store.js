import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/booksSlice";
import bookDetailReducer from "../features/book/bookSlice";
import cartReducer from "../features/cart/cartSlice";
import { getTotals } from "../features/cart/cartSlice";
import authReducer from "../features/authSlice";
import { loadUser } from "../features/authSlice";

const store = configureStore({
	reducer: {
		books: bookReducer,
		book: bookDetailReducer,
		cart: cartReducer,
		auth: authReducer,
	},
});

store.dispatch(getTotals());
store.dispatch(loadUser(null));

export default store;
