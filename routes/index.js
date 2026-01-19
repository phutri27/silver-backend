const express = require('express')
const { renderTable, createRow, updateRow, deleteRow } = require("../controller/index.controller")

const router = express.Router()
router.get("/", renderTable)

router.post("/row", createRow)

router.put("/row/:id", updateRow)

router.delete("/row/:id", deleteRow)

module.exports = router