class Load extends Phaser.Scene {
    constructor() {
        super('LoadScene')
    }

    preload() {
        // Load assets needed for the game
        this.load.image('playButton', 'assets/img/play_button.png')
        this.load.image('menuBackground', 'assets/img/menu.png')
        this.load.image('background', 'assets/img/busstop.png')
        this.load.image('coin', 'assets/img/coin.png')
        this.load.image('building', 'assets/img/building.png')
        this.load.image('school', 'assets/img/school.png')
        this.load.image('bank', 'assets/img/bank.png');
        this.load.spritesheet('terrancePhillip', 'assets/img/t_p2.png', {
          frameWidth: 140,
          frameHeight: 220
        });
        
        this.load.audio('fartSound', 'assets/audio/fart.mp3')
        this.load.audio('coinSound', 'assets/audio/coin.wav')
      }
        
      create() {
        // Once loading is complete, start the main game scene
        this.scene.start('MainMenu')
      }
    }