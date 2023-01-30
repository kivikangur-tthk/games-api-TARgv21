require("dotenv").config()
const express = require("express")
const app = express()
const mariadb = require("mariadb")
const port = process.env.APP_PORT

const swaggerUi = require("swagger-ui-express")
//const swaggerDocument = require("./docs/swagger.json")
const yamljs = require("yamljs")
const swaggerDocument = yamljs.load("./docs/swagger.yaml")
app.use("/docs", swaggerUi.serve,swaggerUi.setup(swaggerDocument))
app.use(express.json())
require("./routes/app_routes")(app)


app.get("/customers",async (req,res)=>{
    let conn
    try {
        conn = await pool.getConnection()
        const rows = await conn.query("SELECT id, CONCAT(firstname,' ', lastname) AS name FROM customers")
        res.send(JSON.stringify(rows))
    } catch (error) {
        console.log(error)       
    } finally {
        conn.end()
    }
})


app.listen(port, async ()=>{
    await require("./db").Sync()
    console.log(`API up at: http://localhost:${port}`)
})