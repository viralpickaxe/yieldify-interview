const random = (min: number, max: number) => {
    
    return Math.floor(Math.random() * max) + min

}

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

    constructor(position_vector: [number]) {

        this.position_vector = position_vector
        this.direction_vector = [random(-15,15), random(-15,15)]

    }

    public tick() {



    }
    
}