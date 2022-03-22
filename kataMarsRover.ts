gitimport {navMap, roverMap} from './roverMap'
import {direction, navPos, roverLocator} from './roverLocator'
import {moveType, movement, roverCommandPath} from './roverCommander'
import {roverDrive} from './roverDrive'

export function procMarsRover (defMap:navMap, defPos:navPos, defPath:string){
    let objMap = new roverMap(defMap)
    let roverPOSSet = new roverLocator(defPos)
    const commandSet = new roverCommandPath(defPath)

    while (commandSet.getStep().step >= 0) {
        const roverAction = new roverDrive()
        roverAction.move(objMap.getMap(), roverPOSSet.getlocation(), commandSet.runStep().move)
    }

    return roverPOSSet.getlocation()
}



