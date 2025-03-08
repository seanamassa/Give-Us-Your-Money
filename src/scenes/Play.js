// Game Scene
class PlayScene extends Phaser.Scene {
    constructor() {
      super('PlayScene')
      this.money = 0
    }
  
    create() {
      // Add the background image
      this.add.image(400, 300, 'background');
  
      // Create and display the score text
      this.moneyText = this.add.text(16, 16, 'Money: 0', {
        fontSize: '32px',
        fill: '#fff'
      });
  
      // Add the fart sound
      this.fartSound = this.sound.add('fartSound')
      this.coinSound = this.sound.add('coinSound')

      // Add the Terrance and Phillip sprite and make it interactive
      this.terrancePhillipSprite = this.add.sprite(400, 400, 'terrancePhillip', 0).setInteractive();
  
      // When the sprite is clicked, play the fart sound and update the score
      this.terrancePhillipSprite.on('pointerdown', () => {
        this.fartSound.play()
        this.spawnCoin(); // Spawn a coin at a random location
      })

      // Start the random pop-up timer
      this.schedulePopup()
  }

  spawnCoin() {
      // Generate random X and Y positions within the game bounds
      let x = Phaser.Math.Between(50, 750);
      let y = Phaser.Math.Between(50, 550);

      // Create the coin sprite and make it interactive
      let coin = this.add.sprite(x, y, 'coin').setScale(.25,.25).setInteractive()

      // When the coin is clicked, add money and remove the coin
      coin.on('pointerdown', () => {
          this.coinSound.play()
          this.money += 10; // Increase money count
          this.moneyText.setText('Money: ' + this.money) // Update displayed money
          coin.destroy() // Remove the coin after clicking
      });
  }
  
    update() {
      // Update logic if needed
    }
  }