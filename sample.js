(() => {
  let canvas = null
  let ctx = null

  window.addEventListener('load', () => {
    initialize()
    render()
  }, false)

  function initialize() {
    canvas = document.body.querySelector('#main_canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx = canvas.getContext('2d');
  }

  function render() {
    let points = [
      100, 100,
      300, 100,
      100, 300,
      300, 500
    ]

    drawPolygon(points, '#119900')
  }

  function drawPolygon(points, color) {
    if (Array.isArray(points) !== true || points.length < 6) {
      return
    }

    if (color != null) {
      ctx.fillStyle = color
    }

    ctx.beginPath()
    ctx.moveTo(points[0], points[1])
    for(let i = 2; i < points.length; i += 2) {
      ctx.lineTo(points[i], points[i + 1])
    }

    ctx.closePath()
    ctx.fill();
  }

  function drawRect(x, y, width, height, color) {
    if (color != null) {
      ctx.context.fillStyle = color;
    }
    ctx.fillRect(x, y, width, height)
  }

  function drawLine(x1, y1, x2, y2, color, width = 1) {
    if (color != null) {
      ctx.strokeStyle = color;
    }
    ctx.lineWidth = width;

    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.closePath();
    ctx.stroke();
  }
})()