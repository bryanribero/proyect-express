import { Router } from 'express'
import { validate } from '../middlewares/validate.js'
import { getProduct, postProduct } from '../controllers/product.controller.js'
import { nameValidator } from '../validators/product.validator.js'

const router = Router()

router.get('/', getProduct)

router.post('/', nameValidator, validate('Error al enviar producto', 400), postProduct)

export default router
