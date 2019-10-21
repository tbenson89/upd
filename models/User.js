var mongoose = require("mongoose");

// Each User Object will have the following: 
/* 
	User ID
	First and Last Name
	username
	Password (handled with passport later)
	Location (Address or GPS)
	Plan the Users Subscription (Permissions) ?? which one is this lol main user? 
	An Email
	Phone number 
	Date when the user was created
*/

var userSchema = new mongoose.Schema({
	name: String,
	f_name: String,
	l_name: String,
	email: String,
	Password: String,
	location: String,
	phone: String,
	plan: String,
	dateCreated: String
});

module.exports = mongoose.model("user" , userSchema);