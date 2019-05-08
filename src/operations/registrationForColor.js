function registrationForColor (lot, color) {
  if (color === undefined) {
    return 'Please mention a color to look for'
  }

  const cars = Object.values(lot)

  const matches = cars.filter(car => car.color === color).map(car => car.plate)

  return matches.length > 0 ? matches.join(', ') : 'Not found'
}

module.exports = registrationForColor
