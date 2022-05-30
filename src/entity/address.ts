export class Address {
    _sreet : string;
    _number : number;
    _zipcode : string;
    _city : string;

    constructor (_sreet : string , number : number , zipcode : string , city : string) {
        this._sreet = _sreet;
        this._number = number;
        this._zipcode = zipcode;
        this._city = city;
        this.validate ();
    }

    validate () {
        if ( this._city.length === 0 ) {
            throw new Error ( "City is empty" );
        }
        if ( this._zipcode.length === 0 ) {
            throw new Error ( "Zipcode is empty" );
        }
        if ( this._number < 0 ) {
            throw new Error ( "Number is negative" );
        }
        if ( this._sreet.length === 0 ) {
            throw new Error ( "Street is empty" );
        }
    }

    toString () : string {
        return `${this._sreet} ${this._number} ${this._zipcode} ${this._city}`;
    }

}