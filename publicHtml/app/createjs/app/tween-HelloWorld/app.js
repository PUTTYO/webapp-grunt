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

    //Textオブジェクトを作成
    var text = new createjs.Text("Hello World", "24px Arial", "#0000");
    text.x = 100;
    text.y = 100;

    //stageにtextオブジェクトを追加
    stage.addChild(text);
    stage.update();
});
