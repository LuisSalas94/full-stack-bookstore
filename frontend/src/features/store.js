import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/booksSlice";
import bookDetailReducer from "../features/book/bookSlice";
import cartReducer from "../features/cart/cartSlice";
import isbnReducer from "../features/isbn/isbnSlice";
import { getTotals } from "../features/cart/cartSlice";

const store = configureStore({
	reducer: {
		books: bookReducer,
		book: bookDetailReducer,
		cart: cartReducer,
		isbn: isbnReducer,
	},
});

store.dispatch(getTotals());

export default store;
