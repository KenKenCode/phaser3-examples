var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var marker = this.add.image(100, 100, 'block').setAlpha(0.3);
    var image = this.add.image(100, 100, 'block');

    this.tweens.add({
        targets: image,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        onComplete: onCompleteHandler,
        onCompleteParams: [ image ]
    });
}

//  The callback is always sent a reference to the Tween as the first argument,
//  then whatever you provided in the onCompleteParams array as the rest
function onCompleteHandler (tween, gameObject)
{
    console.log('onCompleteHandler');

    gameObject.setScale(2);
}
