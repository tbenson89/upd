const port = process.env.PORT || 9000;
const uri = "mongodb+srv://tbenson:fake123@upd.mongodb.net/upd?retryWrites=true&w=majority";

const 	express 		= require('express'),
		app 			= express(),
		bodyParser 		= require("body-parser"), // Let us Read the REQ.
		passport 		= require("passport"),
		methodOverride	= require("method-override"), // Method - Override
		expressSession 	= require("express-session"),
		LocalStrategy	= require("passport-local"), // Local Package passport
		mongoPassport	= require("passport-local-mongoose"), // mongo local passport package
		mongoose		= require("mongoose"), // DB ODM
		rp  			= require('request-promise'), // API Request tool
		requestify 		= require('requestify'); // Another API Requester


const 	User  			= require("./models/User"), // The User Model
		Admin  			= require("./models/Admin"); // The Admin Model

//==================|
// 	    DATABASE
//   CONFIGURATION
//==================|
// Cloud Connection
// mongoose.connect(uri , {
// 	useUnifiedTopology: true,
// 	useNewUrlParser: true,
// 	useCreateIndex: true
// }).then(() => {
// 	console.log("Connected to DB");
// }).catch(err => {
// 	console.log("ERROR! What is going on.... Details: " + err.message);
// });
// Local Connection
mongoose.connect("mongodb://localhost:27017/upd_db" , { useUnifiedTopology: true , useNewUrlParser: true });

//==================|
// 	  APPLICATION
//   CONFIGURATION
//==================|
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Serving the directory
app.use(express.static(__dirname + "/public"));

// Implementing Method Override 
app.use(methodOverride("_method"));

//================|
// Passport Config
//================|
// app.use(expressSession ({
// 	secret: "Utah is so beautiful!!!!",
// 	resave: false,
// 	saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


//=======================|
//    ROUTES 
//=======================|
/*HOME PAGE*/
app.get("/" , (req , res) => {
	res.render("home");
});

app.get("/api/quote/random" , (req , res) => {
	// get request to API
	rp('http://quotes.rest/qod.json')
		.then((id) => {
			const parseData = JSON.parse(id);
			console.log("Object: " , parseData);
			console.log("Contents: " , parseData["contents"]["quotes"]);
			console.log(["quote"]);
			let QOTD 	= parseData["contents"]["quotes"]["quote"],
				author 	= parseData["contents"]["quotes"]["author"],
				date 	= parseData["contents"]["quotes"]["date"],
				title 	= parseData["contents"]["quotes"]["quoteTtl"];
			res.send(QOTD , author , date , title);
		}).catch((err) => {
			console.log("Error Obtaining DataJSON");
			console.log(err);
	});

	// requestify.get('http://quotes.rest/quote/random.json').then(function(response) {
	// 	console.log(response.body);
	// 	res.send(response.body);
	// });
});



/*SCRATCHPAD*/
app.get("/scratchit" , (req , res) => {
	res.render("scratchpad");
});



/* Registration Page */
app.get("/signup" , (req , res) => {
	res.render("signup");
});

app.post("/register" , (req , res) => {
	let newUser = new User(req.body);
});

/* Login Route */
app.get("/login" , (req , res) => {
	res.render("login");
});



//=======================|
// 	    	SERVER
//  	 CONFIGURATION
//=======================|
app.listen(port  =>  {console.log("uPawnDirect Initialized....");});