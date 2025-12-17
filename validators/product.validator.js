import { body } from 'express-validator'

export const validatorPostProduct = [
  body('nombre_producto').notEmpty().withMessage('El nombre del producto no puede estar vacio'),
  body('precio_producto')
    .exists()
    .withMessage('El precio es requerido')
    .toFloat()
    .isFloat({ gt: 0 })
    .withMessage('El precio debe ser un numero valido')
]

export const validatorPriceProduct = [body('precio_producto').toFloat()]
