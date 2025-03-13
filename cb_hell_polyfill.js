//asynchronous promises
const fs = require('fs');

async function doSome(filePath, encoding) {
    try {
        const fileContent = await fs.promises.readFile(filePath, encoding);

        await fs.promises.writeFile('hello.txt', fileContent, encoding);

        await fs.promises.unlink(filePath);

        console.log("File copied to backup.txt and deleted successfully");
    } catch (e) {
        console.log("Error occurred while performing the task:", e);
    } finally {
        console.log("Work done");
    }
}
//doSome('backup.txt', 'utf8');


//polyfill

//ployfill for forEach 

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (cb) { 
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i, this); 
        }
    };
}

const arr = [1, 2, 4, 6, 6];

/*arr.myForEach((element, index) => { 
    console.log(`index :${index},element :${element}`);
});
*/

//polyfill for map
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (cb) { 
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(cb(this[i], i, this));
        }
        return result;
    };
}

let result = arr.myMap(e => e * 3);
//console.log(result);


//polyfill for reduce 
if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (cb) {
    let acc=this[0];
    for(let i=1; i<this.length; i++){
        acc= cb( acc, this[i]);
    }
    return acc;
    }
}
let res= arr.myReduce((acc, sum)=> acc+sum);
//console.log('result', res);

///////////////////////////////////////////////////////////////////
// polyfill for promise 
/// phele promise ka basic syntax dekh le 


function wait(){
    return new Promise((resolve, reject) => {
        setTimeout(() => console.log("aayichi shapat"),1000*2);
    })
}
wait()
    .then(() => console.log("then block"))
    .catch(() => console.log("catch block"))
    .finally(() => console.log("finally block"))


///polyfill for promise 
class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = null;
    this.successCallbacks = [];
    this.errorCallbacks = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.successCallbacks.forEach((cb) => cb(value));
      }
    };

    const reject = (error) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = error;
        this.errorCallbacks.forEach((cb) => cb(error));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(callback) {
    if (this.status === "fulfilled") callback(this.value);
    else this.successCallbacks.push(callback);
    return this;
  }

  catch(callback) {
    if (this.status === "rejected") callback(this.value);
    else this.errorCallbacks.push(callback);
    return this;
  }
}

function geet(name) {
    console.log(`hi ${name}`);
}

const promise = new MyPromisePromise((resolve, reject) => {
    setTimeout(() => {
        geet("Neelam");  
        resolve();  
    }, 3 * 1000);
});
