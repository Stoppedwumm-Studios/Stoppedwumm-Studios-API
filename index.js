const e = require("express")
const app = e()
const {kv} = require("@vercel/kv")

app.get("/", (res, req) => {
    res.send(kv.get("Test"))
})

app.get("/v1/license", (req, res) => {
    req.send("{}")
})

app.listen(3000)

module.exports = app