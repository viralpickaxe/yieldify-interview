# Yieldify Interview Question
Solution to the Yieldify Developer Interview challenge. Tasked to build a simple bouncy ball physics game in Typescript

## Solution Notes
* System split into classes and each class is self contained and handles its own physics
* Applies basic physics laws such as the forces of friction and elasticity
* Allows live editing of configuration values such as gravity and coefficient of friction
* Assumes mass of all balls is 1 unit
* Game tick is run on `requestAnimationFrame` but doesn't take into account time since last tick so it will run faster on some machines and slower on others

## Full Task

### Overview and Test Instructions:
* Use any combination of web technologies to complete the task.
* All code should be authored by the applicant: do not use game engines, physics engines or 3rd party libraries.
* Submit in a format that is easy for us to run / inspect from the browser.
* Your code should be written as if it were going to be deployed today ­ i.e. using standard technologies commonly supported by most current browsers.
* You will be evaluated both on your implementation choices and the quality of your code; so please ensure code is well­structured, extensible, testable, readable, commented etc.
* Any 3rd party code (at all) should be clearly attributed

### Challenge
* **Stage 1** Whenever the user clicks on the page, a circle is 'fired' from the clicked position at a random speed and angle. [Please ensure that your solution handles multiple balls being fired and bounching at the same time].
* **Stage 2** When the projectile reaches the bottom of the browser window it should bounce until it stops
* **Stage 3** Submit
* **Bonus** Tests and tooling for minification and automation of the workflow


## Repository Info

### Repo Structure
- `src` - Main source code folder containing all `.ts` files
- `test` - Root folder for all tests
- `resources` - Folder for all static resources
    - `public` - Contains the html to render the page and also systemjs
    - `styles` - Uncompiled scss styles
- `build` - Compiled js and css


## Development Info

### Requirements
- NodeJS (v6.X.X)

### Running the code
1. Clone the Repo onto your local machine
2. Install the npm dependancies: `npm i`
3. Build the code (and startup browserify): `npm run clusterbomb` (VSCode: `Cmd+Shift+B`)

### Running the tests
1. Clone the Repo onto your local machine
2. Install the npm dependancies: `npm i`
3. Build and run the tests: `npm test`