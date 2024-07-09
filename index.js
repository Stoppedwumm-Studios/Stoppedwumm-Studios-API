const e = require("express")
const app = e()

app.get("/", (res, req) => {
    req.send("WIP")
})

app.get("/v1/license", (req, res) => {
    req.send("{}")
})

app.listen(3000)

module.exports = app