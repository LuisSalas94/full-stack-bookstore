import axios from "axios";
export default axios.create({
	baseURL:
		"https://fernando-bookstore.netlify.app/.netlify/functions/api/books",
});
