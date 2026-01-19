const db = require('./db')

class Table{
    async getAll(){
        const { rows } = await db.query("SELECT * FROM silver")
        return rows
    }

    async deleteRow(id){
        await db.query("DELETE FROM silver WHERE id = ($1)", [id])
    }

    async updateRow(id, brand, quantity, base){
        await db.query("UPDATE silver SET brand = ($1), quantity = ($2), base_price = ($3) WHERE id = ($4)"
            ,[brand, quantity, base, id])
    }

    async insertRow(brand, quantity, base){
        await db.query("INSERT INTO silver (brand, quantity, base_price) VALUES($1, $2, $3)",
            [brand, quantity, base]
        )
    }
}

const tableObj = new Table()
module.exports = tableObj