import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/booksSlice";
import bookDetailReducer from "../features/book/bookSlice";

const store = configureStore({
	reducer: {
		books: bookReducer,
		book: bookDetailReducer,
	},
});

export default store;
