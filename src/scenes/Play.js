// Game Scene
class PlayScene extends Phaser.Scene {
    constructor() {
      super('PlayScene')
      this.money = 0
    }
  
    preload() {
      // Load assets for the game scene (update with your actual assets)
      this.load.image('background', 'assets/img/busstop.png')
      this.load.spritesheet('terrancePhillip', 'assets/img/Character_002.png', {
        frameWidth: 64,
        frameHeight: 64
      });
  
      //this.load.audio('fartSound', 'assets/fart.mp3')
    }
  
    create() {
      // Set up background and UI text
      this.add.image(400, 300, 'background')
      this.moneyText = this.add.text(16, 16, 'Money: 0', {
        fontSize: '32px',
        fill: '#fff'
      })
  
      // Add fart sound
      //this.fartSound = this.sound.add('fartSound')
  
      // Add Terrance and Phillip sprite and set it interactive
      this.terrancePhillipSprite = this.add.sprite(400, 300, 'terrancePhillip').setInteractive()
      this.terrancePhillipSprite.on('pointerdown', () => {
        this.fartSound.play()
        this.money += 1
        this.moneyText.setText('Money: ' + this.money)
      })
  
    }
  
    update() {

    }
  }