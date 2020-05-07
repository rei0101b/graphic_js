(() => {
  let canvas = null
  let ctx = null

  window.addEventListener('load', () => {
    initialize()
    render()
  }, false)

  function render() {
    initialize()
    render()
  }

  function initialize() {
    canvas = document.body.querySelector('#main_canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx = canvas.getContext('2d');
  }

  function render() {
    drawLine(100, 100, 200, 200, '#ff0000')
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