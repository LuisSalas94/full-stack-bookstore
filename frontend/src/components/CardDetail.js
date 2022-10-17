import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import { fetchAsyncBook } from "../features/books/booksSlice";
import { fetchAsyncBook } from "../features/book/bookSlice";

const CardDetail = () => {
	const { isbn } = useParams();
	const dispatch = useDispatch();
	const book = useSelector((state) => state.book.book);

	useEffect(() => {
		dispatch(fetchAsyncBook(isbn));
	}, [dispatch, isbn]);

	return <div>CardDetail</div>;
};

export default CardDetail;
