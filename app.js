import express from 'express'
import productRoutes from './routes/product.routes.js'
import { handle404 } from './middlewares/error404.js'
import { hadleErrors } from './middlewares/hadleErrors.js'

const app = express()

app.use(express.json())

app.use('/api/v1/productos', productRoutes)

app.use(handle404)

app.use(hadleErrors)

export default app
