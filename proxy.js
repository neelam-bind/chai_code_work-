user ={
    name: "neelam",
    class:"AIML",
    password:"1223"
}
let proxy= new Proxy(user,{
    get(target,prop){
        if(prop==='password'){
            throw new Error("accessed denied")
        }
        return target[prop]
    },
})

//console.log(proxy.name);      // Neelam
//console.log(proxy.class);     // AIML
// console.log(proxy.password); // Error: Access denied

function Negative_index(arr){
    return new Proxy(arr,{
        get(target,prop){
            let index=Number(prop);
            if(index<0){
                return target[target.length+index];
            }
            return target[index];
        },
        set(target,prop,value){
            let index=Number(prop);
            if(index<0){
                target[target.length +index]=value;
            }else{
                target[index]=value;
            }
            return true;
        }
})
}
let arr=[1,3,4,5,6,78,99,0];
let new_arr=Negative_index(arr)

console.log(new_arr[-1]);
new_arr[-2]=2;
console.log(new_arr);

console.log(arr);          //both the array original and the proxyed array got modified
