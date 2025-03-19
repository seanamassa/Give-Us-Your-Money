class CreditsScene extends Phaser.Scene {
  constructor() {
    super('CreditsScene')
    this.musicStarted = false
  }

  create() {
    this.add.text(400, 100, 'Game Credits', {
      fontSize: '32px',
      fill: '#fff'
    }).setOrigin(0.5)

    this.add.text(400, 200, 'Created by: Sean Massa\nMusic by: Abstraction \nhttps://tallbeard.itch.io/music-loop-bundle\nThanks for playing my game!', {
      fontSize: '24px',
      fill: '#fff'
    }).setOrigin(0.5)

    // Create a Back button that returns to MainMenu
    let backButton = this.add.text(400, 500, 'Back', {
      fontSize: '28px',
      fill: '#ffffff',
      backgroundColor: '#007700',
      padding: { x: 10, y: 5 }
    }).setInteractive()

    backButton.on('pointerdown', () => {
      this.stopMusic(); // Stop music before switching scenes
      this.scene.start('MainMenu')
    });

    this.startMusic()
  }

  startMusic() {
    if (!this.musicStarted) {
      this.musicStarted = true
      this.creditsMusic = this.sound.add('menuMusic', { volume: 0.5, loop: true })
      this.creditsMusic.play()
    }
  }

  stopMusic() {
    if (this.creditsMusic) {
      this.creditsMusic.stop()
      this.creditsMusic.destroy()
      this.creditsMusic = null
      this.musicStarted = false
    }
  }
}