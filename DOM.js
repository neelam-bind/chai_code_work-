Function.prototype.describe= function(){
    console.log(`function name is ${this.name}`);
}
function geet(name){
    return `hello ${name}`;
}
geet.describe();