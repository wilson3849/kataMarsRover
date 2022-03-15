export type moveType = 'L'|'R'|'M'|''
export interface movement {
    move:moveType,
    step:number
}

export class roverCommandPath{
    path:string[] = []
    step:number = 0

    constructor(comPath:string){
        this.path = comPath.split("");
        this.step = 0;
    }

    getStep(){
        return  {
            move: this.step < this.path.length ? this.path[this.step] as moveType : "",
            step: this.step < this.path.length ? this.step : -1            
        }
    }

    gotoStep(jumptostep:number) {
        this.step = jumptostep
        return {
            move: this.path[this.step] as moveType, 
            step: this.step
        }
    }
    
    runStep() {
        let move = {
            move: '' as moveType, 
            step: -1
        }
        if (this.step < this.path.length) 
        {
            move = {
                move: this.path[this.step] as moveType, 
                step: this.step
            }
            this.step += 1
        }        
        return move
    }
}
