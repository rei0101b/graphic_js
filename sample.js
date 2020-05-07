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
    // 二次ベジェ曲線を描画する
    drawQuadraticBezier(
      100, 100, // 始点
      100, 300, // 終点
      200, 200, // 制御点
      '#ff9900'
    );
    // 三次ベジェ曲線を描画する
    drawCubicBezier(
      300, 100, // 始点
      300, 300, // 終点
      500, 100, // 始点の制御点
      500, 400, // 終点の制御点
      '#ff9900'
    );
  }

  function drawQuadraticBezier(x1, y1, x2, y2, cx, cy, color, width = 1) {
    if(color != null) {
      ctx.strokeStyle = color
    }

    ctx.lineWidth = width
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.quadraticCurveTo(cx, cy, x2, y2)
    ctx.closePath()
    ctx.stroke()
    
  }

  function drawCubicBezier(x1, y1, x2, y2, cx1, cy1, cx2, cy2, color, width = 1) {
    if (color != null) {
      ctx.strokeStyle = color
    }
    ctx.lineWidth = width;
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2)
    ctx.closePath()
    ctx.stroke()
  }

  function drawCircle(x, y, radius, color) {
    if (color != null) {
      ctx.fillStyle = color
    }

    ctx.beginPath()
    ctx.arc(x, y, radius, 0.0, Math.PI * 2.0)

    ctx.closePath()
    ctx.fill()
  }

  function drawFan(x, y, radius, startRadian, endRadian, color) {
    if (color != null) {
      ctx.fillStyle = color
    }

    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.arc(x, y, radius, startRadian, endRadian)
    ctx.closePath()
    ctx.stroke();
  }

  function generateRandomInt(range) {
    let random = Math.random()
    return Math.floor(random * range)
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