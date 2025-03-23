class Load extends Phaser.Scene {
    constructor() {
        super('LoadScene')
    }

    preload() {
        // Load assets needed for the game
        this.load.image('playButton', 'assets/img/play_button.png')
        this.load.image('menuBackground', 'assets/img/menu.png')
        this.load.image('background', 'assets/img/map.png')
        this.load.image('popup', 'assets/img/popup.png')
        this.load.image('building', 'assets/img/building.png')
        this.load.image('school', 'assets/img/school.png')
        this.load.image('bank', 'assets/img/bank.png');
        this.load.spritesheet('terrancePhillip', 'assets/img/t_p.png', {
          frameWidth: 840,
          frameHeight: 1436
        })
        this.load.spritesheet('coin', 'assets/img/coin_spritesheet.png', {
          frameWidth: 32,  // Replace with the actual width of each frame
          frameHeight: 32  // Replace with the actual height of each frame
        })
        this.load.audio('menuMusic', 'assets/audio/menuMusic.ogg')
        this.load.audio('bgMusic', 'assets/audio/backgroundMusic.ogg');
        this.load.audio('fartSound', 'assets/audio/fart.mp3')
        this.load.audio('coinSound', 'assets/audio/coin.wav')
        this.load.audio('cashRegister', 'assets/audio/cash-register.mp3')
      }
        
      create() {
        // Once loading is complete, start the main game scene
        this.scene.start('MainMenu')
      }
    }