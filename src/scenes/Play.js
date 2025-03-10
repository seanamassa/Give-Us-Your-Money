// Game Scene
class PlayScene extends Phaser.Scene {
    constructor() {
      super('PlayScene')
      this.money = 0
      this.gems = 0
      this.buildings = []; // Store buildings under construction
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

      // "Build" Button
      this.buildButton = this.add.text(300, 500, 'Build ($500)', {
          fontSize: '28px',
          fill: '#ffffff',
          backgroundColor: '#007700',
          padding: { x: 10, y: 5 }
      }).setInteractive();

        this.buildButton.on('pointerdown', () => {
            this.startBuilding();
        });      
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

    startBuilding() {
      if (this.money >= 500) {
          this.money -= 500;
          this.moneyText.setText('Money: ' + this.money);
          this.constructBuilding();
      } else {
          this.showNotEnoughMoneyPopup();
      }
  }

  constructBuilding() {
      let x = (100)
      let y = (200)

      let building = this.add.sprite(x, y, 'building').setDepth(1)
      let timerText = this.add.text(x - 20, y + 40, '6000s', { fontSize: '20px', fill: '#ff0000' })

      let buildTime = 6000
      this.buildings.push({ building, timerText, buildTime })

      let speedUpButton = this.add.text(x - 40, y + 70, 'Speed Up!', {
          fontSize: '18px',
          fill: '#ffffff',
          backgroundColor: '#ff0000',
          padding: { x: 5, y: 3 }
      }).setInteractive().setDepth(2)

      speedUpButton.on('pointerdown', () => {
          if (this.gems >= 50) {
              this.gems -= 50;
              this.gemText.setText('Gems: ' + this.gems);
              this.completeBuilding(building, timerText, speedUpButton);
          } else {
              this.showGemPopup()
          }
      });

      this.time.addEvent({
          delay: 1000,
          callback: () => {
              buildTime--;
              timerText.setText(buildTime + 's');
              if (buildTime <= 0) {
                  this.completeBuilding(building, timerText, speedUpButton)
              }
          },
          repeat: buildTime
      })
  }

  showNotEnoughMoneyPopup() {
      let popup = this.add.rectangle(400, 300, 350, 200, 0x000000, 0.8)
      let text = this.add.text(320, 260, 'Not enough money!', { fontSize: '24px', fill: '#ffcc00' })

      let buyMoneyButton = this.add.text(330, 320, 'Buy $500 (10 Gems)', {
          fontSize: '22px',
          fill: '#ffffff',
          backgroundColor: '#008800',
          padding: { x: 8, y: 5 }
      }).setInteractive()

      buyMoneyButton.on('pointerdown', () => {
          if (this.gems >= 10) {
              this.gems -= 10;
              this.money += 500;
              this.moneyText.setText('Money: ' + this.money)
              this.gemText.setText('Gems: ' + this.gems)
              popup.destroy();
              text.destroy();
              buyMoneyButton.destroy()
          } else {
              this.showGemPopup()
          }
      });

      this.time.delayedCall(5000, () => {
          popup.destroy();
          text.destroy();
          buyMoneyButton.destroy()
      });
  }

  showGemPopup() {
      let popup = this.add.rectangle(400, 300, 350, 200, 0x000000, 0.8)
      let text = this.add.text(320, 260, 'Not enough gems! Buy more?', { fontSize: '24px', fill: '#ffcc00' })

      let buyGemsButton = this.add.text(350, 320, 'Buy 100 Gems ($9.99)', {
          fontSize: '22px',
          fill: '#ffffff',
          backgroundColor: '#ff0000',
          padding: { x: 8, y: 5 }
      }).setInteractive()

      buyGemsButton.on('pointerdown', () => {
          this.showPopup("Sorry, no real purchases here!")
      });

      this.time.delayedCall(5000, () => {
          popup.destroy();
          text.destroy();
          buyGemsButton.destroy();
      });
  }

  showPopup(message) {
      let popup = this.add.rectangle(400, 300, 300, 200, 0x000000, 0.8);
      let text = this.add.text(330, 270, message, { fontSize: '24px', fill: '#ffcc00' });

      this.time.delayedCall(2000, () => {
          popup.destroy();
          text.destroy();
      })
  }

  completeBuilding(building, timerText, speedUpButton) {
      building.setTexture('school')
      timerText.destroy()
      speedUpButton.destroy()
  }

  showPopup(message) {
      let popup = this.add.rectangle(400, 300, 300, 200, 0x000000, 0.8)
      let text = this.add.text(330, 270, message, { fontSize: '24px', fill: '#ffcc00' })

      this.time.delayedCall(2000, () => {
          popup.destroy()
          text.destroy()
      });
  }

  showGemPopup() {
      this.showPopup("Not enough Gems! Buy more!")
  }    
    schedulePopup() {
      // Schedule the pop-up at a random interval (5-15 seconds)
      let delay = Phaser.Math.Between(5000, 15000)
      this.time.delayedCall(delay, () => {
          this.showMicrotransactionPopup()
          this.schedulePopup() // Schedule the next one
      });
  }

  showMicrotransactionPopup() {
    let popupBg = this.add.rectangle(400, 300, 500, 300, 0x000000, 0.8)
    popupBg.setDepth(1)

    let offers = [
        { text: "Buy 1000 Gems for $9.99!", gems: 1000 },
        { text: "LIMITED DEAL: $4.99 for 500 Gems!", gems: 500 },
        { text: "VIP PASS: $19.99 for 3x Money!", gems: 1500 },
        { text: "Mega Bundle: $49.99 for 10,000 Gems!", gems: 10000 }
    ];

    let selectedOffer = Phaser.Math.RND.pick(offers)
    
    let offerText = this.add.text(250, 250, selectedOffer.text, {
        fontSize: '24px',
        fill: '#ffcc00',
        fontStyle: 'bold'
    }).setDepth(2)

    let buyButton = this.add.text(350, 350, 'BUY NOW', {
        fontSize: '28px',
        fill: '#ffffff',
        backgroundColor: '#ff0000',
        padding: { x: 10, y: 5 }
    }).setDepth(2).setInteractive()

    buyButton.on('pointerdown', () => {
        this.gems += selectedOffer.gems;
        this.gemText.setText('Gems: ' + this.gems)

        popupBg.destroy()
        offerText.destroy()
        buyButton.destroy()
    });

    this.time.delayedCall(5000, () => {
        if (popupBg.active) {
            popupBg.destroy()
            offerText.destroy()
            buyButton.destroy()
        }
    })
}
  
    update() {
      // Update 
    }
  }