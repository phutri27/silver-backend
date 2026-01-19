const tableObj = require("../db/queries")

const renderTable = async (req, res) => {
    const rows = await tableObj.getAll()
    return res.status(200).json({rows})
} 

const createRow = async (req, res) => {
    const {brand, quantity, base} = req.body
    await tableObj.insertRow(brand, quantity, base)
    return res.json({ok: true})
}

const updateRow = async (req, res) => {
    const id = Number(req.params.id)
    await tableObj.deleteRow(id)
    return res.status(201).json({
      message: "Update row successfully"
    })
}

const deleteRow = async (req, res) => {
  const id = Number(req.params.id)
  await tableObj.deleteRow(id)
  return res.status(201).json({
    message: "Delete row successfully"
  })
}

module.exports = {
    renderTable,
    createRow,
    updateRow,
    deleteRow
}