import dotenv from 'dotenv'
import expess, { urlencoded } from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger_output.json'
import movieReview from './router/MovieReview.Router';

dotenv.config()

const app = expess()
app.use(urlencoded({extended:true}))

const PORT  = process.env.PORT

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/moviewReview",movieReview)

app.listen(PORT,()=>{
    console.log(`Server is on port http://localhost:${PORT}`);
    
})