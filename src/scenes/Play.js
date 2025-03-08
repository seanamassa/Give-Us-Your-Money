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

      // Create and display the gem counter (top-right)
      this.gemText = this.add.text(600, 16, 'Gems: 0', {
          fontSize: '32px',
          fill: '#00ffcc' // Make it stand out
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

    schedulePopup() {
      // Schedule the pop-up at a random interval (5-15 seconds)
      let delay = Phaser.Math.Between(5000, 15000);
      this.time.delayedCall(delay, () => {
          this.showMicrotransactionPopup();
          this.schedulePopup(); // Schedule the next one
      });
  }

  showMicrotransactionPopup() {
    // Create a semi-transparent background for the popup
    let popupBg = this.add.rectangle(400, 300, 500, 300, 0x000000, 0.8);
    popupBg.setDepth(1);

    // Random microtransaction text
    let offers = [
        "Buy 1000 Gems for $9.99!",
        "LIMITED DEAL: $4.99 for 500 Gems!",
        "VIP PASS: $19.99 for 3x Money!",
        "Mega Bundle: $49.99 for 10,000 Gems!"
    ];
    let offerText = this.add.text(250, 250, Phaser.Math.RND.pick(offers), {
        fontSize: '22px',
        fill: '#ffcc00',
        fontStyle: 'bold'
    }).setDepth(2);

    // Fake "BUY" button
    let buyButton = this.add.text(350, 350, 'BUY NOW', {
        fontSize: '28px',
        fill: '#ffffff',
        backgroundColor: '#ff0000',
        padding: { x: 10, y: 5 }
    }).setDepth(2).setInteractive();

    buyButton.on('pointerdown', () => {
        popupBg.destroy();
        offerText.destroy();
        buyButton.destroy();
    });

    // Auto-close the popup after 5 seconds
    this.time.delayedCall(7000, () => {
        if (popupBg.active) {
            popupBg.destroy();
            offerText.destroy();
            buyButton.destroy();
        }
    });
  }
  
    update() {
      // Update logic if needed
    }
  }