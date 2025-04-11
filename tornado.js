
/**
 * Tornado Module for Simulating Tornado Dynamics
 * 
 * This module provides comprehensive functionality for generating, 
 * tracking, and simulating tornado behavior in a game or simulation environment.
 * 
 * @module TornadoSystem
 */
class TornadoSystem {
    /**
     * Creates a new tornado instance with configurable properties
     * 
     * @constructor
     * @param {Object} config - Configuration parameters for the tornado
     * @param {number} config.x - Initial x-coordinate of tornado
     * @param {number} config.y - Initial y-coordinate of tornado
     * @param {number} [config.intensity=1] - Strength of the tornado (1-10 scale)
     * @param {number} [config.radius=50] - Radius of tornado's destructive area
     * @param {number} [config.duration=30] - Total lifetime of tornado in seconds
     */
    constructor(config) {
        this.x = config.x;
        this.y = config.y;
        this.intensity = config.intensity || 1;
        this.radius = config.radius || 50;
        this.duration = config.duration || 30;
        this.active = true;
        this.elapsedTime = 0;
    }

    /**
     * Updates tornado's position and state each game tick
     * 
     * @method update
     * @param {number} deltaTime - Time elapsed since last update
     */
    update(deltaTime) {
        // Implement tornado movement and decay logic
        this.elapsedTime += deltaTime;
        
        if (this.elapsedTime >= this.duration) {
            this.active = false;
        }
    }

    /**
     * Determines destructive impact on objects within tornado's radius
     * 
     * @method checkCollisions
     * @param {Array} gameObjects - List of objects in the game world
     * @returns {Array} Affected objects
     */
    checkCollisions(gameObjects) {
        return gameObjects.filter(obj => {
            const distance = Math.sqrt(
                Math.pow(obj.x - this.x, 2) + 
                Math.pow(obj.y - this.y, 2)
            );
            return distance <= this.radius;
        });
    }

    /**
     * Generates a random tornado with procedural characteristics
     * 
     * @static
     * @method generateRandom
     * @param {Object} worldBounds - Boundaries of game world
     * @returns {TornadoSystem} Randomly generated tornado
     */
    static generateRandom(worldBounds) {
        return new TornadoSystem({
            x: Math.random() * worldBounds.width,
            y: Math.random() * worldBounds.height,
            intensity: Math.random() * 10,
            radius: 50 + Math.random() * 100,
            duration: 15 + Math.random() * 45
        });
    }
}

// Tornado management system
class TornadoManager {
    constructor() {
        this.tornadoes = [];
    }

    /**
     * Spawns a new tornado in the game world
     * 
     * @method spawnTornado
     * @param {Object} config - Tornado configuration
     */
    spawnTornado(config) {
        const tornado = new TornadoSystem(config);
        this.tornadoes.push(tornado);
    }

    /**
     * Updates all active tornadoes
     * 
     * @method updateTornadoes
     * @param {number} deltaTime - Time elapsed since last update
     */
    updateTornadoes(deltaTime) {
        this.tornadoes = this.tornadoes.filter(tornado => {
            tornado.update(deltaTime);
            return tornado.active;
        });
    }
}

// Export modules for use in game systems
module.exports = {
    TornadoSystem,
    TornadoManager
};
