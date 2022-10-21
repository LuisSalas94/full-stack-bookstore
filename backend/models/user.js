const moongose = require("mongoose");
const userSchema = new moongose.Schema({
	name: { type: String, required: true, minlength: 3, maxlength: 30 },
	email: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 200,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 1024,
	},
});

const User = moongose.model("User", userSchema);
exports.User = User;
