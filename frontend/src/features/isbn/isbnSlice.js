import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isbn: "",
	showConfirmation: true,
};

const isbnSlice = createSlice({
	name: "isbn",
	initialState,
	reducers: {
		getIsbn(state, { payload }) {
			state.isbn = payload;
		},
		getConfirmation(state, { payload }) {
			state.showConfirmation = false;
		},
	},
});

export const { getIsbn, getConfirmation } = isbnSlice.actions;
export default isbnSlice.reducer;
