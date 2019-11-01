const port = process.env.PORT || 9000;
const uri = "mongodb+srv://tbenson:fake123@dreamsnthings.mongodb.net/dnt?retryWrites=true&w=majority";

const 	express 		= require('express'),
		app 			= express(),
		bodyParser 		= require("body-parser"), // Let us Read the REQ.
		passport 		= require("passport"),
		methodOverride	= require("method-override"), // Method - Override
		expressSession 	= require("express-session"),
		LocalStrategy	= require("passport-local"), // Local Package passport
		mongoPassport	= require("passport-local-mongoose"), // mongo local passport package
		mongoose		= require("mongoose"); // DB ODM

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
mongoose.connect("mongodb://localhost:27017/dnt_db" , { useUnifiedTopology: true , useNewUrlParser: true });

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

/*SCRATCHPAD*/
app.get("/scratchit" , (req , res) => {
	res.render("scratchpad");
});


//=======================|
//	Artist Route creator |
//=======================|
app.get("/creators" , (req , res) => {
	res.render("creators");
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
app.listen(port , (req , res) =>  {
	console.log("uPawnDirect Initialized....");
});