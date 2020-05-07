function linear(t) {
  return t
}

function easeInQuad(t) {
  return t*t
}

function easeOutQuad(t) {
  return t * (2-t)
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}