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

const getApi = async(req, res) => {
      try {
        const response = await fetch("https://giabac.ancarat.com/api/price-data");
        if (!response.ok){
            throw new Error(`Upstream of ${response.status}`)
        }
        const datas = await response.json()
        let price;
        for (const data of datas){
            if (data.includes('Ngân Long Quảng Tiến 999 - 1 lượng')){
                price = data[2]
                break
            }
        }
        const priceArr = price.split(",")
        const result = Number(priceArr.join(""))
        return res.status(200).json(result)

    } catch (error) {
        throw new Error("Loi data, lien he phu ngay")
    }
}

module.exports = {
    renderTable,
    createRow,
    updateRow,
    deleteRow,
    getApi
}