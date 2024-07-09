const e = require("express")
const app = e()

app.get("/", (res, req) => {
    req.send("WIP")
})

app.listen(3000)

module.exports = app