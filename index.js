const e = require("express")
const app = e()

const Firewall = (req, res, next) => {
    const Agent = req.getHeaders()["user-agent"]
    const spiderStrings = ["Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.1511.1269 Mobile Safari/537.36; Bytespider", "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.7997.1233 Mobile Safari/537.36; Bytespider"]
    if (spiderStrings.find(Agent) != undefined) {
        res.status(403).send("fuck you tiktok")
        next()
    } else {
        next()
    }
}

app.use(Firewall)

app.get("/", (res, req) => {
    res.send("WIP")
})

app.get("/v1/license", (req, res) => {
    req.send("{}")
})

app.listen(3000)

module.exports = app