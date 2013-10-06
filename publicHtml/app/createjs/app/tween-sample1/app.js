require([
    'tween',
    'easeljs',
    'preloadjs'
], function () {
    "use strict";

    //testのcanvasのオブジェクトを取得
    var canvas = document.getElementById("test");
    //Stageに描画したいcanvasのインスタンスを指定して、new()
    var stage = new createjs.Stage(canvas);

    //Graphicsオブジェクトの生成と描写
    var g = new createjs.Graphics();
    //これは外枠。
    g.setStrokeStyle(10);
    //これは外枠の色。
    g.beginStroke(createjs.Graphics.getRGB(0, 255, 0));
    //これは内側の色。
    g.beginFill(createjs.Graphics.getRGB(255, 0, 0));
    //これは円を書く設定（たぶん）
    g.drawCircle(20 , 50, 20);

    //shapeオブジェクトを生成
    var shape = new createjs.Shape(g);
    shape.x = 50;
    shape.y = 50;

    //stageにtextオブジェクトを追加
    stage.addChild(shape);
    stage.update();
});
