//1)total sales
Sales=[
    {product:"laptop",price:2100},
    {product:"book",price:110},
    {product:"pen",price:23},
    {product:"eraser",price:10}
]
//using normal for loop 
let sum=0;
for(let i=0;i<Sales.length;i++){
    sum+=Sales[i].price;
}
//console.log(sum)
// using reduce function 
let initial_value=0;
let total=Sales.reduce((acc,sale)=>acc+sale.price,initial_value)
////console.log(total)

//2)printing low price product
let low_price=Sales.reduce((acc,sale)=>acc.price<sale.price?acc:sale);
//console.log(low_price)

//3)report genertaing function
let expenses=[
    {description:"laptop",amount:2100,categories:"utilites"},
    {description:"apple",amount:100,categories:"food"},
    {description:"orange",amount:100,categories:"food"},
    {description:"laptop",amount:2100,categories:"utilites"},
]
let report=expenses.reduce((report,expense)=>{
     report[expense.categories]+= expense.amount;
     //report[expense.categories] = ( 0 || report[expense.categories] )+ expense.amount;
     return report;
},{food:0,utilites:0});
//console.log(report)

//4)todo list (sorting and filtering )
tasks =[
    {description:"write report",status:"done",priority:1},
    {description:"upload",status:"pending",priority:2},
    {description:"run",status:"done",priority:1},
    {description:"cook",status:"pending",priority:3}
]
let todo=tasks
.filter((task)=>task.status==="pending")
.sort((a,b)=>a.priority-b.priority)
//console.log(todo);

//5)movie ratings
let movie_rating=[
    {title:"movie A",ratings:[1,4,5]},
    {title:"movie B",ratings:[11,5,3]},
    {title:"movie C",ratings:[11,34,4]},
];

let average_movie_ratings=movie_rating.map((movie)=>{
    let total=movie.ratings.reduce((acc,rate)=>acc+rate,0);
    let avg=total/movie.ratings.length;
    return {title:movie.title,avg_ratings:avg.toFixed(2)};
});
console.log(average_movie_ratings)