#Mars Rover Kata
## Introduction
This package is design to emulate rovers move on the surface of Mars. The surface is described as a rectangular region. The co-ordination (x,y) is specified for the location of rover inside the surface region. The emulation is designed with the assumption as following:-
- rover cannot move outside the rectangular region.
- rover will retain in same position when reach the edge of the rectangular region
- rover is designed to have assigned action:
    M - move ahead 1 unit
    L - turn left
    R - turn right
- rover move north is represent as y+1
- rover move south is represent as y-1
- rover move east is represent as x+1
- rover move west is represent as x-1
- rover turn the head 90 degrees for each direction change
- rover turn left is represent head direction -90 degrees
- rover turn right is represent head direction +90 degrees

## Type Script Modules functionality
Modules used in Mars Rover Kata Project:-
- kataMarsRover.ts: main user module for operate the emulation. 
  fucntion call procMarsRover is design to emulate the movement of rover and output the final distination after the given action list is processed.
- roverMap.ts: the class collection to navigate the diamension for rover to work
  through
- roverLocator.ts: the class to store/retrieve the location of the specific rover 
  in terms of (x,y,head)
- roverCommander.ts: the class to collect the action list/ navigate the action 
  of the rover next step/ get the current rover status 
- roverDriver.ts: the class to perform the moving logic on each move of rover 
  base on the Map and the return location in terms of (x,y,head)

## Play the Mars Rover on Type Script 
Call the function of procMarsRover to emulate the movement of rover. Import the kataMarsRover.ts and run the function procMarsRover{defMap:navMap, defPos:navPos, defPath:string}
  where defMap is the diamonsion of the map in (x*y)
        defPos is the initial position(x,y) from the map {defMap}
        defPath is the string of action list of movement (ie: LRM) 
to returns the co-ordination in terms of object class roverLocator (x,y,head).

## Test Drive for the Mars Rover Kata Considerations
Base on the elementary operation, the testing data will designed into scenerios:
- action L: move direction left 4 times will go back to original direction
- action R: move direction right 4 times will go back to original direction
- action M: the co-ordination change by increase/decrease no in X or Y dependent
  on head direction
- mix action: real action emulation on evaluate the mix operation of the all
  routine.

## Other enhancement
- Map can extend the availablity on move in specific location
- Can add addition module into main on parameter such as wind/speed in kataDrive 
  Module  

