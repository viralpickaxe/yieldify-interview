import { GameConfig } from "./GameConfig"

/**
 * Class representing a ball
 * 
 * @export
 * @class Ball
 */
export class Ball {

    /**
     * Instance of gameconfig that this Ball will follow
     * 
     * @private
     * @type {GameConfig}
     * @memberof Ball
     */
    private config: GameConfig

    /**
     * Position vector of the ball
     * 
     * @type {number}
     * @memberof Ball
     */
    public position_vector: [number]
    
    /**
     * Direction vector of the ball
     * 
     * @private
     * @type {[number]}
     * @memberof Ball
     */
    private direction_vector: [number]

    /**
     * These are the bounds the ball needs to obey
     * 
     * @private
     * @type {[number]}
     * @memberof Ball
     */
    private bounds: [number]

    /**
     * Creates an instance of Ball.
     * @param {[number]} position_vector Initial position vector of the ball
     * @param {[number]} bounds Bounds the ball needs to obey
     * @param {GameConfig} config GameConfig to follow
     * @memberof Ball
     */
    constructor(position_vector: [number], bounds: [number], config: GameConfig) {

        // Save the position vector from the click location
        this.position_vector = position_vector

        // Come up with a random direction vector (velocity) for the ball to start moving in
        // This is weighted to make the ball always fire upwards, either to the left or right
        this.direction_vector = [
            (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 25) + 5,
            -Math.floor(Math.random() * 35) + 1
        ]

        // Save the bounds and config
        this.bounds = bounds
        this.config = config

    }

    /**
     * Method to tell the ball to work out its new direction and position vectors
     * 
     * @memberof Ball
     */
    public tick() {

        // Apply gravity to the y component of the direction vector
        var new_direction_x = this.direction_vector[0],
            new_direction_y = this.direction_vector[1] + this.config.gravity

        // Apply the new direction vectors to the current position vectors
        var new_position_x = this.position_vector[0] + new_direction_x,
            new_position_y = this.position_vector[1] + new_direction_y
        
        //
        // Lets deal with boundary conditions
        //

        // If ball hits the left or right wall
        if ( new_position_x <= this.config.ball_size || new_position_x >= this.bounds[0] - this.config.ball_size ) {
            
            // Make sure it hasn't crossed the boundary
            new_position_x = new_position_x <= this.config.ball_size ? this.config.ball_size : this.bounds[0] - this.config.ball_size

            // Conserve momentum but loose energy to elasticity
            new_direction_x = -new_direction_x * this.config.ball_elasticity

        }

        // If ball hits the top or bottom wall
        if ( new_position_y <= this.config.ball_size || new_position_y >= this.bounds[1] - this.config.ball_size ) {

            // Make sure it hasn't crossed the boundary
            new_position_y = new_position_y <= this.config.ball_size ? this.config.ball_size : this.bounds[1] - this.config.ball_size
            
            // Conserve momentum but loose energy to elasticity
            new_direction_y = -new_direction_y  * this.config.ball_elasticity

        }

        // Implement friction on the bottom wall
        // If the ball is in contact with the floor
        if ( new_position_y === this.bounds[1] - this.config.ball_size ) {

            // Slow down the velocity of the ball using the friction of a particle on a plane
            // Friction force = μR (Since mass is 1 )
            new_direction_x -= (new_direction_x < 0 ? -1 : 1) * this.config.gravity * this.config.friction

            if ( Math.abs(new_direction_x) <= this.config.friction * this.config.gravity ) new_direction_x = 0

        }

        // Save the newly worked out position vector
        this.position_vector = [
            new_position_x,
            new_position_y
        ]

        // Save the newly worked out direction vector
        this.direction_vector = [
            new_direction_x,
            new_direction_y
        ]

    }
    
}