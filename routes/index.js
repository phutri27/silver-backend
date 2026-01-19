const express = require('express')
const { renderTable, createRow, updateRow, deleteRow, getApi } = require("../controller/index.controller")

const router = express.Router()
router.get("/", renderTable)

router.post("/row", createRow)

router.put("/row/:id", updateRow)

router.delete("/row/:id", deleteRow)

router.get("/api/price", getApi)
module.exports = router