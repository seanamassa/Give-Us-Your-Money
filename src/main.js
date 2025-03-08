// Game Title: Terrance and Phillip: Give Us Your Money
// Creator: Sean Massa
// Based on the fake game from the tv show South Park
// A paradoy idle clicker game that highlights the predatory tactics of in game monetizations
// Created: 3/5/2025
// Updated: 3/7/2025

// fart sound found on https://pixabay.com/users/freesound_community-46691455/

// game config
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Load, MainMenu, PlayScene ]
}

const game = new Phaser.Game(config)

// globals
const centerX = game.config.width / 2
const centerY = game.config.height / 2
let cursors = null