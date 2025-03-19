class InstructionsScene extends Phaser.Scene {
    constructor() {
      super('InstructionsScene')
    }
  
    create() {
      // Background
      //this.add.image(400, 300, 'menuBackground')
  
      // Title
      this.add.text(400, 100, 'How to Play', {
        fontSize: '32px',
        fill: '#ffffff',
        fontStyle: 'bold'
      }).setOrigin(0.5)
  
      // Instructions Text
      const instructionsText = 
        `- Clicking on Terrance and Phillip will generate coins\n` +
        `- Click on coins to earn money\n` +
        `- Build buildings with your money\n` +
        `- Buy gems to gain more money\n` +
        `- Speed up building using gems\n` +
        `- Complete building all structures to win!\n`
      
      this.add.text(400, 250, instructionsText, {
        fontSize: '22px',
        fill: '#ffffff',
        align: 'center',
        wordWrap: { width: 500 }
      }).setOrigin(0.5)
  
      // Back button
      let backButton = this.add.text(400, 500, 'Back', {
        fontSize: '28px',
        fill: '#ffffff',
        backgroundColor: '#770000',
        padding: { x: 10, y: 5 }
      }).setInteractive()
  
      backButton.on('pointerdown', () => {
        this.scene.start('MainMenu')
      })
    }
  }