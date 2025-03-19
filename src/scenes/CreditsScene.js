class CreditsScene extends Phaser.Scene {
    constructor() {
      super('CreditsScene');
    }
  
    create() {
      // Display background and title
      //this.add.image(400, 300, 'menuBackground');
      this.add.text(400, 100, 'Credits', {
        fontStyle: 'Impact',
        fontSize: '32px',
        fill: '#fff'
      }).setOrigin(0.5);
  
      // Credits text (you can change this to include real credits)
      this.add.text(400, 200, 'Developed by: Your Name', {
        fontSize: '24px',
        fill: '#fff'
      }).setOrigin(0.5);
  
      this.add.text(400, 250, 'Music by: Composer Name', {
        fontSize: '24px',
        fill: '#fff'
      }).setOrigin(0.5);
  
      // Add back button to return to the main menu
      let backButton = this.add.text(400, 450, 'Back to Main Menu', {
        fontSize: '28px',
        fill: '#ffffff',
        backgroundColor: '#007700',
        padding: { x: 10, y: 5 }
      }).setInteractive();
  
      backButton.on('pointerdown', () => {
        this.scene.start('MainMenu');
      });
    }
  }