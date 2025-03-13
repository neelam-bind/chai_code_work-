/*function createCounter(){
    var count=0;
    return function(){
        count++;
        return count;
    }
}
var x=createCounter();
var y=createCounter();
console.log(x());
console.log(x());
console.log(y());
console.log(x());
*/


// array methods
/*let arr=['2','3','4']
let data =arr.pop();
console.log(data);*/
let arr = ['apple', 'banana', 'cherry'];

arr.forEach((element, index) => {
    console.log(`${index + 1} : ${element}`);
});

let person = {
    name: "Neelam",
    age: 25,
    isStudent: false,
    hobbies: ["reading", "coding", "traveling"],
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
console.log();

console.log(person.greet);


function truthy(value){
    if(value){
        console.log("truthy");
    }else{
        console.log("falsy");
    }
}


truthy(0);
truthy([]);
truthy("");
truthy("neelam");
