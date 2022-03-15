export interface navMap {
    width:number,
    length:number   
}

export class roverMap{
    Map:navMap

    constructor(Map:navMap) {
        this.Map = Map
    }

    getMap() {
        return this.Map
    }
}
