const express= require("express")
const app= express()
app.use(express.json())
let modulo = require('./ProductManager')

app.get('/products', async (req,res)=>{

    const ProductM= new ProductManager();
    
    const limite= req.query.limit
    if(limite<pro.length){
        ProductM=ProductM.slice(0,limite)
    }
    res.send(ProductM)
})

app.get('/products/:pid', async (req,res)=>{
    const pm = new ProductManager();
    let producto = await pm.getProductById(id);
    res.send({producto})
})


app.listen(8080, ()=>
console.log("servidor escuchando")
)