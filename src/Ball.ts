import config from "./GameConfig"

/**
 * Class representing a ball
 * 
 * @export
 * @class Ball
 */
export class Ball {

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

    private bounds: [number]

    constructor(position_vector: [number], bounds: [number]) {

        this.position_vector = position_vector
        this.direction_vector = [
            (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 15) + 5,
            -1 * Math.floor(Math.random() * 35) + 1
        ]

        this.bounds = bounds

    }

    public tick() {

        // Enforce gravity
        this.direction_vector[1] += config.gravity
        
        this.position_vector = [
            this.position_vector[0] + this.direction_vector[0],
            this.position_vector[1] + this.direction_vector[1]
        ]

        if ( this.position_vector[0] >= this.bounds[0] - 12 ) {
            this.position_vector[0] = this.bounds[0] - 12
            this.direction_vector[0] = -this.direction_vector[0] 
        }

        if ( this.position_vector[0] <= 12 ) {
            this.position_vector[0] = 12
            this.direction_vector[0] = -this.direction_vector[0] 
        }

        if ( this.position_vector[1] >= this.bounds[1] - 12 ) {
            this.position_vector[1] = this.bounds[1] - 12
            this.direction_vector[1] = -this.direction_vector[1] * 0.95
        }

        if ( this.position_vector[1] <= 12 ) {
            this.position_vector[1] = 12
            this.direction_vector[1] = -this.direction_vector[1] 
        }

    }
    
}