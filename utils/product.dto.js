export function priceDTO(row) {
  return {
    ...row,
    precio_producto: Number(row.precio_producto)
  }
}
