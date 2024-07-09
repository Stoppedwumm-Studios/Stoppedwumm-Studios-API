const e = require("express")
const app = e()
const {kv} = require("@vercel/kv")

app.get("/", async (req, res) => {
    res.send("WIP")
})

app.get("/v1/license/:item/:userid", async (req, res) => {
    const licenses = JSON.parse(await kv.get("license_"+item))
    
    if (licenses[req.query["userid"]] == 1) {
        res.send("1")
        return
    } else {
        res.send("0")
        return
    }
    console.log("how is this even called?")
    throw new Error("someting off")
})

app.listen(3000)

module.exports = app