import dotenv from 'dotenv'
import expess, { urlencoded } from 'express'

dotenv.config()

const app = expess()
app.use(urlencoded({extended:true}))

const PORT  = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is on port http://localhost:${PORT}`);
    
})