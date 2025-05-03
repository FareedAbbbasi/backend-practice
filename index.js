let express = require("express")

let app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send({status: 1, msg: "hello I'm Abbasi"})
})

app.get("/contact",(req, res) => {
    res.send("This is the news API")
})

app.post("/login", (req, res) => {
    console.log(req.body)
    res.send({ status: 1, msg:"Login successfully!", data: req.body})
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