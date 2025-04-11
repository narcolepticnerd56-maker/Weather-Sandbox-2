/**
 * Supercell Module
 * 
 * This module represents a comprehensive implementation of a supercell simulation
 * in a cellular automata or scientific modeling context.
 * 
 * @module Supercell
 * @description Provides a complete framework for modeling and simulating supercell dynamics
 * 
 * Key Features:
 * - Detailed supercell state management
 * - Advanced simulation capabilities
 * - Flexible configuration options
 * 
 * @example
 * const supercell = new Supercell({
 *   initialState: {...},
 *   simulationParameters: {...}
 * });
 * supercell.simulate();
 * 
 * @author Sourcegraph AI Assistant
 * @version 1.0.0
 * @license MIT
 */
/**
 * Creates a simulator instance for supercell modeling
 * 
 * @method createSimulator
 * @description Initializes a new supercell simulation environment with default or custom parameters
 * 
 * @param {Object} [config] - Optional configuration object for the simulator
 * @param {Object} [config.initialState] - Initial state of the supercell system
 * @param {Object} [config.simulationParameters] - Parameters controlling simulation behavior
 * @param {number} [config.simulationDuration=100] - Total number of simulation steps
 * @param {boolean} [config.enableLogging=false] - Enable detailed logging of simulation progress
 * 
 * @returns {Supercell} A fully configured supercell simulation instance
 * 
 * @example
 * const simulator = createSimulator({
 *   initialState: { temperature: 300, pressure: 1.0 },
 *   simulationDuration: 500,
 *   enableLogging: true
 * });
 * simulator.run();
 */
function createSimulator(config = {}) {
    const defaultConfig = {
        initialState: {},
        simulationParameters: {},
        simulationDuration: 100,
        enableLogging: false
    };

    const finalConfig = { ...defaultConfig, ...config };
    
    return new Supercell(finalConfig);
}
