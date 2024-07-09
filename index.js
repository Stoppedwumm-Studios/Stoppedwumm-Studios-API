const e = require("express")
const app = e()
const {kv} = require("@vercel/kv")

app.get("/", (req, res) => {
    res.send(kv.get("Test"))
})

app.get("/v1/license", (req, res) => {
    res.send("{}")
})

app.listen(3000)

module.exports = app