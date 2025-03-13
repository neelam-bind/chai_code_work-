function increament(){
    var count=0;
    return function(){
        count++;
        return count;
    }
}
var x=increament();
var y=increament();
console.log(x());
console.log(x());
console.log(y());
console.log(x());
