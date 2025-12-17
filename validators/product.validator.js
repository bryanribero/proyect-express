import { body } from 'express-validator'

export const nameValidator = [
  body('name').isLength({ min: 5 }).withMessage('Name debe contener al menos 5 caracteres'),
  body('name').isLength({ max: 10 }).withMessage('Name demasiado largo, debe de contener menos o igual a 10 caracteres')
]
