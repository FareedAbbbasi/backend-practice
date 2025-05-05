let express = require("express")

let app = express();
app.use(express.json());

let mytoken = 1234
let mypass = 1234


let checkToken = (req, res, next) =>{ 
    if(req.query.token === "" || req.query.token === undefined) {
        return res.send({
            status: 0, 
            msg: "Please fill the empty token"
        })
    }

    if(req.query.token!=mytoken ) {
        return res.send({
            status: 0,
            msg: "Please enter a valid token"
        })
    }
    next();
}

app.use(checkToken);

app.use((req, res, next) => {
    if(req.query.pass === "" || req.query.undefined) {
        return res.send({status: 0, msg: "Please fill the password"})
    }

    if(req.query.pass != mypass) {
        return res.send({status: 0, msg: "please enter the valid password"})
    }
    next();
})

app.get("/", (req, res) => {
    res.send({status: 1, msg: "hello I'm Abbasi"})
})

app.post("/news/:id", (req, res) => {
    const currentId = req.params.id
    res.send("The news api " + currentId)
})

app.get("/contact",(req, res) => {
    res.send("This is the news API")
})

app.post("/login", (req, res) => {
    console.log(req.body)
    res.status(200).json
({ status: 1, msg:"Login successfully!", data: req.body})
})

app.get("/home", (req, res) => {
    res.send("This is the home page API")
})

app.post("/sigUp", (req, res) => {
    res.send({status: 1, msg: "Create account successfully", data:req.body,  queryData: req.query})
})

app.post("/product", (req, res) => {
    console.log(req.body)
    res.send({status: 1,
         msg: "Product data show successfully!",
          bodyData: req.body,
          queryData: req.query
        })
})

app.listen("5000")