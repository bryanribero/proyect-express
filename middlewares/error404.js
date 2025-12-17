export const handle404 = (req, res) => {
  res.status(404).send('La ruta no existe')
}
