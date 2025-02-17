const express = require("express")

const app = express()

const PORT = "8000";

app.get("/", (req, res) => {
    return res.status(200).json("Welcome to the Home page")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

module.exports = app