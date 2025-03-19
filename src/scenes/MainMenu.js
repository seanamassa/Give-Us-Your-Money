class MainMenu extends Phaser.Scene {
    constructor() {
      super('MainMenu');
    }
  
    create() {
      // Display background and title
      this.add.image(400, 300, 'menuBackground')
      this.add.text(400, 150, 'Terrance and Phillip: Give Us Your Money', {
        fontStyle: 'Impact',
        fontSize: '24px',
        fill: '#fff'
      }).setOrigin(0.5)
  
      // Create a Play button that starts the GameScene on click
      let playButton = this.add.image(400, 450, 'playButton').setScale(.5,.5).setInteractive()
      playButton.on('pointerdown', () => {
        this.scene.start('PlayScene')
      })

      // Create a Credits button that transitions to CreditsScene on click
      let creditsButton = this.add.text(600, 500, 'Credits', {
        fontSize: '28px',
        fill: '#ffffff',
        backgroundColor: '#007700',
        padding: { x: 10, y: 5 }
      }).setInteractive()
  
      creditsButton.on('pointerdown', () => {
        this.scene.start('CreditsScene')
      })  
    }
  }
  