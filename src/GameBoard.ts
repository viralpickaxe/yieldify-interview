import { Ball } from "./Ball"

/**
 * Class representing a gameboard (HTML5 Canvas)
 * 
 * @export
 * @class GameBoard
 */
export class GameBoard {

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
    constructor(canvas_id: string) {

        // Assign the properties relevent to the selected canvas
        this.canvas = <HTMLCanvasElement>document.getElementById(canvas_id)
        this.ctx = this.canvas.getContext("2d")

        this.canvas.width = this.canvas.offsetWidth
        this.canvas.height = this.canvas.offsetHeight

        this.balls = [] as [Ball]

        // Bind mouse clicks
        this.canvas.addEventListener('click',this.mouseClick.bind(this), false)

        this.render()

    }

    mouseClick(event) {

        let position_vector: [number] = [
            event.clientX,
            event.clientY
        ]

        let created_ball = new Ball(position_vector)

        this.balls.push(created_ball)

    }

    render() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.balls.map((ball) => {

            this.ctx.beginPath()
            this.ctx.arc(ball.position_vector[0], ball.position_vector[1], 10, 0, Math.PI*2, true)
            this.ctx.lineWidth = 4
            this.ctx.strokeStyle = "black"
            this.ctx.fillStyle = "white"
            this.ctx.fill()
            this.ctx.stroke()
        
        })

        window.requestAnimationFrame(this.render.bind(this))

    }
    
}