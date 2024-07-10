const e = require("express")
const app = e()
const {kv} = require("@vercel/kv")

app.get("/", async (req, res) => {
    res.send("WIP")
})

app.get("/v1/license", async (req, res) => {
    let licenses = {}
    try {
        console.log("license_"+req.query["item"])
        licenses = await kv.get("license_"+req.query["item"])
        console.log(licenses)
        if (licenses[req.query["userid"]] == 1) {
            res.send("1")
            return
        } else {
            res.send("0")
            return
        }
    } catch (err) {
        console.log(err)
        console.log(licenses)
        res.send("0")
        return
    }
    console.log("how is this even called?")
    throw new Error("someting off")
})

app.post("/v1/addlicense", async (req, res) => {
    let licenses = {}
    try {
        let header = req.header("auth")
        header = header.replace("Bearer ", "")
        if (header == process.env["APIToken"]) {
            licenses = await kv.get("license_"+req.query["item"])
            licenses[req.query["userid"]] = 1
            await kv.set("license_"+req.query["item"], JSON.stringify(licenses))
            res.sendStatus(201)
            return
        } else {
            res.sendStatus(403)
            return
        }
    } catch (err) {
        console.log(err)
        res.sendStatus(403)
        return
    }
    console.log("how is this even called?")
    throw new Error("someting off")
})

app.listen(3000)

module.exports = app