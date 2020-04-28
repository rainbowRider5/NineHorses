export default class Horse {

    constructor(i = 0 , j = 0, mode = Horse.HORSE_W()){
        this.i = i;
        this.j = j;
        this.mode = this.validateMode(mode)
    }

    static get HORSE_W() {
        return 0;
    }

      static get HORSE_B() {
        return 1;
    }

    static getInitialHorsesPositions(size){
        let horses = [];
        for (let k = 0; k < size; k++) {
            let wi = 0;
            let wj = k;
            horses.push(new Horse(wi, wj, Horse.HORSE_W));
        }
        for (let k = size; k > 0; k--) {
            let bi = size-1;
            let bj = k-1;
            horses.push(new Horse(bi, bj, Horse.HORSE_B));
        }
        
        return horses;
    }

    validateMode(val) {
        if (val !== Horse.HORSE_W && val !== Horse.HORSE_B) {
            return Horse.HORSE_W; // Default to white
        }
        return val;
    }

    getClassList(){
        return `horse ${this.mode === Horse.HORSE_W ? 'white' : 'black'}`;
    }

    getPosition(){
        return {'i':this.i, 'j':this.j};
    }

    setPosition(_i, _j){
        if (!_i || !_j) {
            throw "Invalid position!";
        }
        if (_i <= 0 || _j <= 0) {
            throw "Invalid position!";
        }
        this.i = _i;
        this.j = _j;
    }
}