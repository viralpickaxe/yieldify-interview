import { GameConfig } from "./GameConfig"
import { GameBoard } from "./GameBoard"

let gameconfig = new GameConfig(2, 0.05, 12, 0.8)
let gameboard = new GameBoard("gameboard", gameconfig)