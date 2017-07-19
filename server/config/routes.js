const path = require("path")
const user = require("./../controllers/users.js")


module.exports =(app) => {

    app.post("/login",user.login)
    app.get('*', (req,res) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
})

}