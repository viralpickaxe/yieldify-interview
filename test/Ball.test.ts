import { expect } from 'chai'

import { Ball } from "../src/Ball"
import { GameConfig } from "../src/GameConfig"

describe('Ball', () => {

    describe('constructor', () => {
      
        it('it should create a ball at a position vector', () => {
            
            let config = new GameConfig()
            let ball = new Ball([1,2],[5,5],config)

            expect(ball.position_vector[0]).to.equal(1)
            expect(ball.position_vector[1]).to.equal(2)

        })

        it('it should create a ball with a random direction vector', () => {
            
            let config = new GameConfig()
            let ball = new Ball([1,2],[5,5],config)

            expect(typeof ball['direction_vector'][0]).to.equal("number")
            expect(typeof ball['direction_vector'][1]).to.equal("number")

        })

    })

    describe('tick', () => {
      
        it('it should fall by a gravity unit in 1 tick', () => {
            
            let config = new GameConfig()
            let ball = new Ball([50,50],[100,100],config)

            let before_y_position = ball.position_vector[1],
                before_y_direction = ball['direction_vector'][1]
            
            ball.tick()

            expect(ball.position_vector[1]).to.equal(before_y_position + before_y_direction + config.gravity)

        })

    })

})