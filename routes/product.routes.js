import { Router } from 'express'
import { validate } from '../middlewares/validate.js'
import { getProduct, postProduct } from '../controllers/product.controller.js'
import { validatorPostProduct, validatorPriceProduct } from '../validators/product.validator.js'

const router = Router()

router.get('/', validatorPriceProduct, getProduct)

router.post('/', validatorPostProduct, validate('Error al cargar producto', 400), postProduct)

export default router
