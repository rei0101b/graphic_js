
let r = 2
let theta = 120
let A = [0.0, 0.0];
let radian = degToRad(theta);

let s = Math.sin(radian);
let c = Math.cos(radian);

let B = [
  A[0] + c * r,
  A[1] + s * r,
]

function degTorad(theta) {
  return theta * Math.PI / 180
}

