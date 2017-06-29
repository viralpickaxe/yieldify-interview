/**
 * Class to represent configurations of the ball game
 * 
 * @class GameConfig
 */
class GameConfig {

    public gravity: number

    constructor(gravity: number) {

        this.gravity = gravity

    }

}

// Init a singleton of the gameconfig
export default new GameConfig(2)