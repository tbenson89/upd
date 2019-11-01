const mongoose = require("mongoose");

// Each Admin object will have the following:  
/*
	An ID - mongooose does this! 
	adminDate
	REF User: 
		Username
		Name (FIrst and Last)
		Password (handled with passport later)
		Location (Address or GPS)
		Plan {Super Permissions}
		Email
		Phone number 
		Date when the user was given Admin Access.
*/
const adminSchema = new mongoose.Schema({
	adminDate: String
});

module.exports = mongoose.model("Admin" , adminSchema);