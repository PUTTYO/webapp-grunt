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
    stage.update();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addListener(stage);
    //createjs.Ticker.addEventListener(stage);
});
