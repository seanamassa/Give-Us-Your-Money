// Game Title: Terrance and Phillip: Give Us Your Money
// Creator: Sean Massa
// Based on the fake game from the tv show South Park
// A paradoy idle clicker game that highlights the predatory tactics of in game monetizations
// Created: 3/5/2025
// Updated: 3/18/2025

// Features added:
// [X] Load, Main Menu, Play, and Credits scenes
// [X] Use of timers to speed up buildings
// [X] Coin animation – Coins have rotating animations for visual feedback.  
// [X] Terrance/Phillip coin interaction** – Generates coins and plays a fart sound when interacted with.  
// [X] Use of timers to speed up building completion – Buildings can be accelerated by spending Gems.  
// [X] Building placement system – Players can place two buildings at specified locations.   
// [X] Building texture swapping – Different textures applied to buildings based on type or state.  
// [X] Building completion event – Fires an event when a building finishes construction. 
// [X] Terrance/Phillip character spawns a coin and plays a fart sound on player interaction 
// [X] Looping background music
// [ ] Added animation to the Terrance/Phillip character using a spritesheet, 
// [X] Credits Scene
// [X] Restart functionality from within the game
// [X] In-game instructions or tutorial for the player
// ===========================================================
// 
// fart sound found on https://pixabay.com/users/freesound_community-46691455/
// music downloaded from Abstraction https://tallbeard.itch.io/music-loop-bundle

// game config
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Load, MainMenu, CreditsScene, InstructionsScene, PlayScene ]
}

const game = new Phaser.Game(config)

// globals
const centerX = game.config.width / 2
const centerY = game.config.height / 2
let cursors = null