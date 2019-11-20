//===================
//  EXPRESS ROUTER
//===================
const   express     = require("express"),
        router      = express.Router();

/*HOME PAGE*/
router.get("/" , (req , res) => {
    res.render("home");
});

router.get("/api/quote/random" , (req , res) => {
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
// app.get("/scratchit" , (req , res) => {
// 	res.render("scratchpad");
// });



/* Registration Page */
router.get("/signup" , (req , res) => {
    res.render("signup");
});

router.post("/register" , (req , res) => {
    let newUser = new User(req.body);
});

/* Login Route */
router.get("/login" , (req , res) => {
    res.render("login");
});

// for micro
router.get("/micro" , (req, res) => {
    res.render("microdose");
});

//=======================|
// 	    	SERVER
//  	 CONFIGURATION
//=======================|
// router.listen(port , (req , res) => {console.log("uPawnDirect Initialized....");});

module.exports = router;