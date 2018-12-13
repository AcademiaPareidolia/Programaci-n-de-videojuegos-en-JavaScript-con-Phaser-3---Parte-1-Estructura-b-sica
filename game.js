var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    backgroundColor: 'black',
    parent: 'Juego_nave',
    scene: [{
        preload: preload,
        create: create,
        update: update
    }]
};

var game = new Phaser.Game(config);

function preload() {
    console.log('preload');
}

function create() {
    console.log('create');
}

function update() {
    console.log('update');
}