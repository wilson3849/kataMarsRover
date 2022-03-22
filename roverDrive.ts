import {navMap, roverMap} from './roverMap'
import {direction, navPos, roverLocator} from './roverLocator'
import {moveType, movement, roverCommandPath} from './roverCommander'

export class roverDrive {

    constructor(){}
    
    move(map:navMap, position:navPos , move:moveType) {
        const headDirection = "NWSE"

        let moveToPos = position 
        switch(move){
            case 'L':
                moveToPos.head = (headDirection.indexOf(moveToPos.head) < headDirection.length - 1) ? headDirection[headDirection.indexOf(moveToPos.head) + 1] as direction : headDirection[0] as direction
                break
            case 'R':
                moveToPos.head = (headDirection.indexOf(moveToPos.head) !== 0) ? headDirection[headDirection.indexOf(moveToPos.head) - 1] as direction : headDirection[headDirection.length - 1] as direction
                break
            case 'M':
                if (moveToPos.head === 'N'){ moveToPos.y < map.length ? moveToPos.y += 1 : moveToPos }
                if (moveToPos.head === 'W'){ moveToPos.x > 0 ? moveToPos.x -= 1 : moveToPos }
                if (moveToPos.head === 'S'){ moveToPos.y > 0 ? moveToPos.y -= 1 : moveToPos }
                if (moveToPos.head === 'E'){ moveToPos.x < map.width ? moveToPos.x += 1 : moveToPos }
                break
            default: 
                break     
        }
    }
}
