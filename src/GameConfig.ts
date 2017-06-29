/**
 * Class to represent configurations of the ball game
 * 
 * @class GameConfig
 */
export class GameConfig {

    /**
     * Gravity to impose on the balls
     * 
     * @type {number}
     * @memberof GameConfig
     */
    public gravity: number

    /**
     * Coefficient of friction of the walls
     * 
     * @type {number}
     * @memberof GameConfig
     */
    public friction: number

    /**
     * Size of the balls
     * 
     * @type {number}
     * @memberof GameConfig
     */
    public ball_size: number

    /**
     * Elasticity of the balls
     * 
     * @type {number}
     * @memberof GameConfig
     */
    public ball_elasticity: number

    constructor(gravity: number, friction: number, ball_size: number, ball_elasticity: number) {

        this.gravity = gravity
        this.friction = friction
        this.ball_size = ball_size
        this.ball_elasticity = ball_elasticity

    }

}