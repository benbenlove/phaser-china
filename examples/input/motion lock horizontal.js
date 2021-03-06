
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {
    game.load.image('sprite', 'assets/sprites/parsec.png');
}

var sprite;

function create() {
    game.stage.backgroundColor = 'rgb(85,85,85)';
    sprite = game.add.sprite(200, 400, 'sprite');
    // 开启交互
    sprite.inputEnabled = true;
    // 允许拖动精灵
    sprite.input.enableDrag();
    // 不允许竖直方向运动
    sprite.input.allowVerticalDrag = false;
}

function render() {
    game.debug.inputInfo(32, 32);
    game.debug.spriteInputInfo(sprite, 300, 32);
}
