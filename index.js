class Polygon {
    constructor (side){
        this.side = side
    }
    get countSides(){
        return this.side.length
    }
    get perimeter(){
        return this.side.reduce((acc,val) => acc+val)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (this.side[0] + this.side[1] > this.side[2] && this.side[0] + this.side[2] > this.side[1] && this.side[1] + this.side[2] > this.side[0] ) {
            return true
        }
        else {
            return false
        }
    }
} 

class Square extends Polygon {
    get isValid(){
        if (this.side[0] === this.side[1] && this.side[2] === this.side[3] && this.side[3] === this.side[0] ) {
            return true
        }
        else {
            return false
        }
    }
    get area(){
        return this.side[0] * this.side[1]
    }

}