import {navMap, roverMap} from './roverMap'
import {direction, navPos, roverLocator} from './roverLocator'
import {moveType, movement, roverCommandPath} from './roverCommander'

export class roverDrive {

    constructor(){}
    
    move(map:navMap, position:navPos , move:moveType) {
        var headDirection = "NWSE"

        var moveToPos = position 
        //console.log("Start from (" + moveToPos.x.toString() + "," + moveToPos.y.toString()+ ")")
        switch(move){
            case 'L':
                //console.log("From " + position.head)
                moveToPos.head = (headDirection.indexOf(moveToPos.head) < headDirection.length - 1) ? headDirection[headDirection.indexOf(moveToPos.head) + 1] as direction : headDirection[0] as direction
                //console.log("turn left to " + moveToPos.head)
                break
            case 'R':
                //console.log("From " + position.head)
                moveToPos.head = (headDirection.indexOf(moveToPos.head) !== 0) ? headDirection[headDirection.indexOf(moveToPos.head) - 1] as direction : headDirection[headDirection.length - 1] as direction
                //console.log("turn right to " + moveToPos.head)
                break
            case 'M':
                //console.log("move ahead.")
                if (moveToPos.head === 'N'){ moveToPos.y < map.length ? moveToPos.y += 1 : moveToPos }
                if (moveToPos.head === 'W'){ moveToPos.x > 0 ? moveToPos.x -= 1 : moveToPos }
                if (moveToPos.head === 'S'){ moveToPos.y > 0 ? moveToPos.y -= 1 : moveToPos }
                if (moveToPos.head === 'E'){ moveToPos.x < map.width ? moveToPos.x += 1 : moveToPos }
                //console.log("rover head to " + moveToPos.head + ",move to (" + moveToPos.x.toString() + "," + moveToPos.y.toString()+ ") in (" + map.length.toString() + "," + map.width.toString() + ")")
                break
            default: 
                break     
        }
    }

}