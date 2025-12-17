export const getProduct = (req, res) => {
  res.json([
    {
      name: 'Jose'
    },
    {
      name: 'Maria'
    }
  ])
}

export const postProduct = (req, res, _next) => {
  res.send('Funciono correctamente')
}
