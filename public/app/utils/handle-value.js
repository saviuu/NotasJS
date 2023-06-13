export class HandleValue {

    constructor(value){
        this._value = value;
    }

    static of(value){
       return new HandleValue(value);
    }

    isNothing() {
        return this._value === null || this._value === undefined;
    }

    customMap(fn){
        if(this.isNothing()) return HandleValue.of(null);
        return HandleValue.of(fn(this._value));
    }

    getOrElse(value){
        if(this.isNothing()) return value;
        return this._value;
    }
}