/**
 * 線分を二次ベジェ曲線で描画する
 * @param {number} x1 - 線分の始点の X 座標
 * @param {number} y1 - 線分の始点の Y 座標
 * @param {number} x2 - 線分の終点の X 座標
 * @param {number} y2 - 線分の終点の Y 座標
 * @param {number} cx - 制御点の X 座標
 * @param {number} cy - 制御点の Y 座標
 * @param {string} [color] - 線を描画する際の色
 * @param {number} [width=1] - 線幅
 */
function drawQuadraticBezier(x1, y1, x2, y2, cx, cy, color, width = 1) {
  // 色が指定されている場合はスタイルを設定する
  if (color != null) {
    ctx.strokeStyle = color;
  }
  // 線幅を設定する
  ctx.lineWidth = width;
  // パスの設定を開始することを明示する
  ctx.beginPath();
  // パスの始点を設定する
  ctx.moveTo(x1, y1);
  // 二次ベジェ曲線の制御点と終点を設定する
  ctx.quadraticCurveTo(cx, cy, x2, y2);
  // パスを閉じることを明示する
  ctx.closePath();
  // 設定したパスで線描画を行う
  ctx.stroke();
}

/**
 * 線分を三次ベジェ曲線で描画する
 * @param {number} x1 - 線分の始点の X 座標
 * @param {number} y1 - 線分の始点の Y 座標
 * @param {number} x2 - 線分の終点の X 座標
 * @param {number} y2 - 線分の終点の Y 座標
 * @param {number} cx1 - 始点の制御点の X 座標
 * @param {number} cy1 - 始点の制御点の Y 座標
 * @param {number} cx2 - 終点の制御点の X 座標
 * @param {number} cy2 - 終点の制御点の Y 座標
 * @param {string} [color] - 線を描画する際の色
 * @param {number} [width=1] - 線幅
 */
function drawCubicBezier(x1, y1, x2, y2, cx1, cy1, cx2, cy2, color, width = 1) {
  // 色が指定されている場合はスタイルを設定する
  if (color != null) {
    ctx.strokeStyle = color;
  }
  // 線幅を設定する
  ctx.lineWidth = width;
  // パスの設定を開始することを明示する
  ctx.beginPath();
  // パスの始点を設定する
  ctx.moveTo(x1, y1);
  // 三次ベジェ曲線の制御点と終点を設定する
  ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);
  // パスを閉じることを明示する
  ctx.closePath();
  // 設定したパスで線描画を行う
  ctx.stroke();
}