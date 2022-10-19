import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import BookURL from "../../common/apis/linkAPI";
const baseURL =
	"https://fernando-bookstore.netlify.app/.netlify/functions/api/books";

//Fetch All Books Thunk Action
export const fetchAsyncBooks = createAsyncThunk(
	"books/fetchAsyncBooks",
	async () => {
		const response = await axios(baseURL);
		return response.data;
	}
);

//Fetch Book by author or title Thunk Action
export const fetchAsyncSearch = createAsyncThunk(
	"books/fetchAsyncSearch",
	async (search) => {
		const response = await axios.get(`${baseURL}/v1/query?search=${search}`);
		return response.data;
	}
);

//Initial state
const initialState = {
	books: [],
	isLoading: true,
};

const bookSlice = createSlice({
	name: "books",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAsyncBooks.fulfilled]: (state, { payload }) => {
			return {
				...state,
				books: payload,
				isLoading: false,
			};
		},
		[fetchAsyncSearch.fulfilled]: (state, { payload }) => {
			return {
				...state,
				books: payload,
				isLoading: false,
			};
		},
	},
});

export default bookSlice.reducer;
