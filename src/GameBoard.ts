export class GameBoard {

    private canvas: HTMLCanvasElement
	private ctx: CanvasRenderingContext2D

    constructor(canvas_id: string) {

        this.canvas = <HTMLCanvasElement>document.getElementById(canvas_id)
		this.ctx = this.canvas.getContext("2d")

    }
    
}