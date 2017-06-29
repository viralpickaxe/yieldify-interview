import { GameConfig } from "./GameConfig"
import { Ball } from "./Ball"

/**
 * Class representing a gameboard (HTML5 Canvas)
 * 
 * @export
 * @class GameBoard
 */
export class GameBoard {

    /**
     * Instance of gameconfig that this GameBoard will follow
     * 
     * @private
     * @type {GameConfig}
     * @memberof GameBoard
     */
    private config: GameConfig

    /**
     * Pointer to instance of the canvas that is represented by this gameboard
     * 
     * @private
     * @type {HTMLCanvasElement}
     * @memberof GameBoard
     */
    private canvas: HTMLCanvasElement
    
    /**
     * Pointer to the context of the canvas that is represented by this gameboard
     * 
     * @private
     * @type {CanvasRenderingContext2D}
     * @memberof GameBoard
     */
    private ctx: CanvasRenderingContext2D

    /**
     * Array containing all the balls in the gameboard
     * 
     * @private
     * @type {[Ball]}
     * @memberof GameBoard
     */
    private balls: [Ball]

    /**
     * Creates an instance of GameBoard.
     * 
     * @param {string} canvas_id Element ID of the canvas element to link
     * @memberof GameBoard
     */
    constructor(canvas_id: string, config: GameConfig) {

        // Assign the properties relevent to the selected canvas
        this.canvas = <HTMLCanvasElement>document.getElementById(canvas_id)
        this.ctx = this.canvas.getContext("2d")

        // Save the assigned config
        this.config = config

        // Setup the canvas size properly
        this.canvas.width = this.canvas.offsetWidth
        this.canvas.height = this.canvas.offsetHeight

        // Init the balls array to an empty array
        this.balls = [] as [Ball]

        // Bind mouse clicks
        this.canvas.addEventListener('click',this.mouseClick.bind(this), false)

        // Start rending the game
        this.render()

    }

    /**
     * Detects when a mouse clicks on the canvas and creates a ball
     * 
     * @param {MouseEvent} event 
     * @memberof GameBoard
     */
    mouseClick(event: MouseEvent) {

        // The initial position vector of the ball will be at the mouse click x and y
        let position_vector: [number] = [
            event.clientX,
            event.clientY
        ]

        // Prepare to send in some bounds the ball has to obey
        let bounds: [number] = [
            this.canvas.width,
            this.canvas.height
        ]

        // Create the instance of the ball with position vector and config
        let created_ball = new Ball(position_vector, bounds, this.config)

        // Add the ball to the ball array
        this.balls.push(created_ball)

    }

    /**
     * Main render function for the ball game
     * 
     * @memberof GameBoard
     */
    render() {

        // Clears the canvas each cycle
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        // Loop over every ball
        this.balls.map((ball) => {

            // Update the balls position
            ball.tick()

            // Render the ball on the canvas
            this.ctx.beginPath()
            this.ctx.arc(ball.position_vector[0], ball.position_vector[1], this.config.ball_size - 2, 0, Math.PI*2, true)
            this.ctx.lineWidth = 4
            this.ctx.strokeStyle = "black"
            this.ctx.fillStyle = "white"
            this.ctx.fill()
            this.ctx.stroke()
        
        })

        // Using request animation frame to re-render when the browser is ready
        // TODO :- Use the returned timestamp to make sure all computers run the simulation at the same time
        window.requestAnimationFrame(this.render.bind(this))

    }
    
}