/**
 * Class to represent configurations of the ball game
 * 
 * @class GameConfig
 */
export class GameConfig {
    
    /**
     * Pointer to instance of the div that allows editing of config
     * 
     * @private
     * @type {HTMLDivElement}
     * @memberof GameConfig
     */
    private config_div: HTMLDivElement

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

    /**
     * Creates an instance of GameConfig.
     * 
     * @param {string} div_id Element ID of the div to render the settings in
     * @memberof GameConfig
     */
    constructor(div_id: string) {

        this.config_div = <HTMLDivElement>document.getElementById(div_id)

        // Set some default values
        this.gravity = 2
        this.friction = 0.05
        this.ball_size = 12
        this.ball_elasticity = 0.8

        // render the config box
        this.renderConfigInDOM()

    }

    /**
     * Method for rendering the config slider box
     * 
     * @memberof GameConfig
     */
    renderConfigInDOM() {

        this.config_div.innerHTML = ""

        let list = document.createElement("div")

        let title = document.createElement("div")
        title.innerHTML = "<strong>Settings</strong>"
        list.appendChild(title)

        list.appendChild(this.renderSlider("Gravity", "gravity", 0, 9.5, 0.5))
        list.appendChild(this.renderSlider("Friction", "friction", 0, 0.5, 0.01))
        list.appendChild(this.renderSlider("Ball Size", "ball_size", 3, 40, 1))
        list.appendChild(this.renderSlider("Ball Elasticity", "ball_elasticity", 0, 0.95, 0.05))

        this.config_div.appendChild(list)

    }

    /**
     * Method to render an individual slider in for the config box
     * 
     * @param {string} title Title of the slider
     * @param {string} property Config propery name
     * @param {number} min Min value
     * @param {number} max Max value
     * @param {number} step Step value
     * @returns {HTMLDivElement} 
     * @memberof GameConfig
     */
    renderSlider(title: string, property: string, min: number, max: number, step: number): HTMLDivElement {

        // General ugly js code to render sliders
        let gravity_slider = document.createElement("div")
        let gravity_slider_input_label = document.createElement("div")
        gravity_slider_input_label.innerHTML = `${title} (${this[property]})`
        gravity_slider.appendChild(gravity_slider_input_label)
        let gravity_slider_input = document.createElement("input")
        gravity_slider_input.setAttribute("type", "range")
        gravity_slider_input.setAttribute("min", String(min))
        gravity_slider_input.setAttribute("max", String(max))
        gravity_slider_input.setAttribute("step", String(step))
        gravity_slider_input.value = this[property]
        gravity_slider_input.oninput = (event) => {
            this[property] = parseFloat(event.target["value"])
            gravity_slider_input_label.innerHTML = `${title} (${this[property]})`
        }
        gravity_slider.appendChild(gravity_slider_input)

        return gravity_slider

    }

}