import {navMap, roverMap} from './roverMap'
import {direction, navPos, roverLocator} from './roverLocator'
import {moveType, movement, roverCommandPath} from './roverCommander'
import {roverDrive} from './roverDrive'
import {procMarsRover} from './kataMarsRover'

describe('Validate output for turn left RoverDriveModule', () => {
    it.each([
        [{width:5, length:5}, {x:1, y:2, head:'N' as direction}, "L", {"head": "W", "x": 1, "y": 2}],     
        [{width:5, length:5}, {x:1, y:2, head:'W' as direction}, "L", {"head": "S", "x": 1, "y": 2}],     
        [{width:5, length:5}, {x:1, y:2, head:'S' as direction}, "L", {"head": "E", "x": 1, "y": 2}],     
        [{width:5, length:5}, {x:1, y:2, head:'E' as direction}, "L", {"head": "N", "x": 1, "y": 2}]
    ])(
        'return final position and head of rover',
        (initMap, initPos, drivePath, result) => {
            expect(procMarsRover(initMap, initPos, drivePath)).toEqual(result)
        }
    )
})

describe('Validate output for turn right RoverDriveModule', () => {
    it.each([
        [{width:5, length:5}, {x:1, y:2, head:'N' as direction}, "R", {"head": "E", "x": 1, "y": 2}],     
        [{width:5, length:5}, {x:1, y:2, head:'E' as direction}, "R", {"head": "S", "x": 1, "y": 2}],     
        [{width:5, length:5}, {x:1, y:2, head:'S' as direction}, "R", {"head": "W", "x": 1, "y": 2}],     
        [{width:5, length:5}, {x:1, y:2, head:'W' as direction}, "R", {"head": "N", "x": 1, "y": 2}]
    ])(
        'return final position and head of rover',
        (initMap, initPos, drivePath, result) => {
            expect(procMarsRover(initMap, initPos, drivePath)).toEqual(result)
        }
    )
})

describe('Validate output for move north RoverDriveModule', () => {
    it.each([
        [{width:5, length:5}, {x:0, y:0, head:'N' as direction}, "M", {"head": "N", "x": 0, "y": 1}],     
        [{width:5, length:5}, {x:0, y:1, head:'N' as direction}, "M", {"head": "N", "x": 0, "y": 2}],     
        [{width:5, length:5}, {x:0, y:2, head:'N' as direction}, "M", {"head": "N", "x": 0, "y": 3}],     
        [{width:5, length:5}, {x:0, y:3, head:'N' as direction}, "M", {"head": "N", "x": 0, "y": 4}],
        [{width:5, length:5}, {x:0, y:4, head:'N' as direction}, "M", {"head": "N", "x": 0, "y": 5}],
        [{width:5, length:5}, {x:0, y:5, head:'N' as direction}, "M", {"head": "N", "x": 0, "y": 5}]
    ])(
        'return final position and head of rover',
        (initMap, initPos, drivePath, result) => {
            expect(procMarsRover(initMap, initPos, drivePath)).toEqual(result)
        }
    )
})

describe('Validate output for move south RoverDriveModule', () => {
    it.each([
        [{width:5, length:5}, {x:0, y:5, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 4}],     
        [{width:5, length:5}, {x:0, y:4, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 3}],     
        [{width:5, length:5}, {x:0, y:3, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 2}],     
        [{width:5, length:5}, {x:0, y:2, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 1}],
        [{width:5, length:5}, {x:0, y:1, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 0}],
        [{width:5, length:5}, {x:0, y:0, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 0}]
    ])(
        'return final position and head of rover',
        (initMap, initPos, drivePath, result) => {
            expect(procMarsRover(initMap, initPos, drivePath)).toEqual(result)
        }
    )
})

describe('Validate output for move east RoverDriveModule', () => {
    it.each([
        [{width:5, length:5}, {x:0, y:0, head:'E' as direction}, "M", {"head": "E", "x": 1, "y": 0}],     
        [{width:5, length:5}, {x:1, y:0, head:'E' as direction}, "M", {"head": "E", "x": 2, "y": 0}],     
        [{width:5, length:5}, {x:2, y:0, head:'E' as direction}, "M", {"head": "E", "x": 3, "y": 0}],     
        [{width:5, length:5}, {x:3, y:0, head:'E' as direction}, "M", {"head": "E", "x": 4, "y": 0}],
        [{width:5, length:5}, {x:4, y:0, head:'E' as direction}, "M", {"head": "E", "x": 5, "y": 0}],
        [{width:5, length:5}, {x:5, y:0, head:'E' as direction}, "M", {"head": "E", "x": 5, "y": 0}]
    ])(
        'return final position and head of rover',
        (initMap, initPos, drivePath, result) => {
            expect(procMarsRover(initMap, initPos, drivePath)).toEqual(result)
        }
    )
})

describe('Validate output for move west RoverDriveModule', () => {
    it.each([
        [{width:5, length:5}, {x:5, y:0, head:'W' as direction}, "M", {"head": "W", "x": 4, "y": 0}],     
        [{width:5, length:5}, {x:4, y:0, head:'W' as direction}, "M", {"head": "W", "x": 3, "y": 0}],     
        [{width:5, length:5}, {x:3, y:0, head:'W' as direction}, "M", {"head": "W", "x": 2, "y": 0}],     
        [{width:5, length:5}, {x:2, y:0, head:'W' as direction}, "M", {"head": "W", "x": 1, "y": 0}],
        [{width:5, length:5}, {x:1, y:0, head:'W' as direction}, "M", {"head": "W", "x": 0, "y": 0}],
        [{width:5, length:5}, {x:0, y:0, head:'W' as direction}, "M", {"head": "W", "x": 0, "y": 0}]
    ])(
        'return final position and head of rover',
        (initMap, initPos, drivePath, result) => {
            expect(procMarsRover(initMap, initPos, drivePath)).toEqual(result)
        }
    )
})

describe('Validate output for move south RoverDriveModule', () => {
    it.each([
        [{width:5, length:5}, {x:0, y:5, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 4}],     
        [{width:5, length:5}, {x:0, y:4, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 3}],     
        [{width:5, length:5}, {x:0, y:3, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 2}],     
        [{width:5, length:5}, {x:0, y:2, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 1}],
        [{width:5, length:5}, {x:0, y:1, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 0}],
        [{width:5, length:5}, {x:0, y:0, head:'S' as direction}, "M", {"head": "S", "x": 0, "y": 0}]
    ])(
        'return final position and head of rover',
        (initMap, initPos, drivePath, result) => {
            expect(procMarsRover(initMap, initPos, drivePath)).toEqual(result)
        }
    )
})

describe('Validate output for MarsRoverProject', () => {
    it.each([
        [{width:5, length:5}, {x:1, y:2, head:'N' as direction}, "LMLMLMLMM", {"head": "N", "x": 1, "y": 3}],     
        [{width:5, length:5}, {x:3, y:3, head:'E' as direction}, "MMRMMRMRRM", {"head": "E", "x": 5, "y": 1}]
    ])(
        'return final position and head of rover',
        (initMap, initPos, drivePath, result) => {
            expect(procMarsRover(initMap, initPos, drivePath)).toEqual(result)
        }
    )
})
