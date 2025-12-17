export const hadleErrors = (err, req, res, _next) => {
  if (err.originalError) {
    console.error(err.originalError)
  }

  res.status(err.status || 500).json({
    message: err.message || 'Error interno del servidor',
    details: err.details ?? null
  })
}
