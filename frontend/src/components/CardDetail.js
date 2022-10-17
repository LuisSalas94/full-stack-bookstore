import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CardDetail = () => {
	const { isbn } = useParams();
	const dispatch = useDispatch();

	console.log(isbn);
	return <div>CardDetail</div>;
};

export default CardDetail;
