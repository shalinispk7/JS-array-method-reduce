// Solve Using Reduce Method:

// let num = [29.76, 41.85, 46.5];

// Output: 39.37

let num = [29.76, 41.85, 46.5];

let newvalue = num.reduce(function(acc,cv){

    return  acc+cv;
})

document.write(`Average of given number is : ${newvalue/num.length}`)