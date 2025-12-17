import { selectAllProduct, insertProduct } from '../services/product.service.js'
import { priceDTO } from '../utils/product.dto.js'

export const getProduct = async (req, res, next) => {
  try {
    const data = await selectAllProduct()

    res.status(200).json(data.map(priceDTO))
  } catch (err) {
    next(err)
  }
}

export const postProduct = async (req, res, next) => {
  try {
    const data = req.body

    const result = await insertProduct(data)

    res.status(201).json({
      message: 'Producto creado',
      result
    })
  } catch (err) {
    next(err)
  }
}
