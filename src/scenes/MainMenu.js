/* Terrance and Phillip: Give Us Your Money
Based on the fake game from the tv show South Park
// Created by Sean Massa
*/
class MainMenu extends Phaser.Scene {
    constructor() {
      super('MainMenu');
    }
  
    preload() {
      // Load assets for the main menu (replace with your actual asset paths)
      this.load.image('playButton', 'assets/play_button.png')
      this.load.image('menuBackground', 'assets/img/Title.png')
    }
  
    create() {
      // Display background and title
      this.add.image(400, 300, 'menuBackground')
      this.add.text(400, 150, 'Terrance and Phillip: Give Us Your Money', {
        fontSize: '24px',
        fill: '#fff'
      }).setOrigin(0.5)
  
      // Create a Play button that starts the GameScene on click
      let playButton = this.add.image(400, 300, 'playButton').setInteractive()
      playButton.on('pointerdown', () => {
        this.scene.start('PlayScene')
      })
    }
  }
  