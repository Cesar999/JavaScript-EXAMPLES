const data = {
    locations: [],
    get location(){
        return this._location;
    },
    set location(value){
        this._location = value.trim();
        this.locations.push(this._location);
    }
}

data.location = '     Obregon   ';
data.location = '     Tijuana ';
console.log(data.location);
console.log(data);