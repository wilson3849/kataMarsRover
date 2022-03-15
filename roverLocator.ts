export type direction = 'N'|'W'|'S'|'E'
export interface navPos {
    x: number
    y: number
    head: direction 
}
export class roverLocator{
    roverLocation:navPos

    constructor(location:navPos) {
        this.roverLocation = location
    }

    setlocation(location:navPos) {
        this.roverLocation = location
    }

    getlocation() {
        return this.roverLocation
    }

    printlocation() {
        return this.roverLocation.x + " " + this.roverLocation.y + " " + this.roverLocation.head
    }
}


