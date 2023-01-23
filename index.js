require("dotenv").config()
const app = require("express")()
const mariadb = require("mariadb")
const port = process.env.APP_PORT

const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./docs/swagger.json")
app.use("/docs", swaggerUi.serve,swaggerUi.setup(swaggerDocument))

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