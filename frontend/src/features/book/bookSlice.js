import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL =
	"https://fernando-bookstore.netlify.app/.netlify/functions/api/books";

//Fetch Book by ISBN Thunk Action
export const fetchAsyncBook = createAsyncThunk(
	"books/fetchAsyncBook",
	async (isbn) => {
		const response = await axios(`${baseURL}/${isbn}`);
		return response.data;
	}
);

//Initial state
const initialState = {
	book: [],
	isLoading: true,
};

//Book Slice
const bookSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		//Reset Book
		clearBook: (state) => {
			state.book = [];
		},
	},
	extraReducers: {
		[fetchAsyncBook.fulfilled]: (state, { payload }) => {
			return {
				...state,
				book: payload,
				isLoading: false,
			};
		},
	},
});

export const { clearBook } = bookSlice.actions;
export default bookSlice.reducer;
