function drawPolygon(points, color) {
  // points が配列であるかどうか確認し、多角形を描くために
  // 十分な個数のデータが存在するか調べる
  if (Array.isArray(points) !== true || points.length < 6) {
    return;
  }
  // 色が指定されている場合はスタイルを設定する
  if (color != null) {
    ctx.fillStyle = color;
  }
  // パスの設定を開始することを明示する
  ctx.beginPath();
  // パスの始点を設定する
  ctx.moveTo(points[0], points[1]);
  // 各頂点を結ぶパスを設定する
  for (let i = 2; i < points.length; i += 2) {
    ctx.lineTo(points[i], points[i + 1]);
  }
  // パスを閉じることを明示する
  ctx.closePath();
  // 設定したパスで多角形の描画を行う
  ctx.fill();
}