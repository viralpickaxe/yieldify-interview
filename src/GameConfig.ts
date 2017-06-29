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
    private config_div?: HTMLDivElement

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
     * Should the canvas be cleaned each render cycle
     * 
     * @type {boolean}
     * @memberof GameConfig
     */
    public clear_canvas: boolean

    /**
     * Creates an instance of GameConfig.
     * 
     * @param {string} div_id Element ID of the div to render the settings in
     * @memberof GameConfig
     */
    constructor(div_id?: string) {

        if ( div_id ) this.config_div = <HTMLDivElement>document.getElementById(div_id)

        // Set some default values
        this.gravity = 2
        this.friction = 0.05
        this.ball_size = 12
        this.ball_elasticity = 0.8
        this.clear_canvas = true

        // render the config box
        if ( div_id ) this.renderConfigInDOM()

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
        list.appendChild(this.renderToggle("Clear Canvas", "clear_canvas"))

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
        let slider = document.createElement("div")
        let slider_input_label = document.createElement("div")
        slider_input_label.innerHTML = `${title} (${this[property]})`
        slider.appendChild(slider_input_label)
        let slider_input = document.createElement("input")
        slider_input.setAttribute("type", "range")
        slider_input.setAttribute("min", String(min))
        slider_input.setAttribute("max", String(max))
        slider_input.setAttribute("step", String(step))
        slider_input.value = this[property]
        slider_input.oninput = (event) => {
            this[property] = parseFloat(event.target["value"])
            slider_input_label.innerHTML = `${title} (${this[property]})`
        }
        slider.appendChild(slider_input)

        return slider

    }

    /**
     * Method to render an individual toggle in for the config box
     * 
     * @param {string} title Title of the toggle
     * @param {string} property Config propery name
     * @returns {HTMLDivElement} 
     * @memberof GameConfig
     */
    renderToggle(title: string, property: string): HTMLDivElement {

        // General ugly js code to render sliders
        let toggle = document.createElement("div")
        let toggle_input_label = document.createElement("div")
        toggle_input_label.innerHTML = title
        toggle.appendChild(toggle_input_label)
        let toggle_input = document.createElement("input")
        toggle_input.setAttribute("type", "checkbox")
        toggle_input.checked = this[property]
        toggle_input.onchange = (event) => {
            this[property] = event.target["checked"]
        }
        toggle.appendChild(toggle_input)

        return toggle

    }

}