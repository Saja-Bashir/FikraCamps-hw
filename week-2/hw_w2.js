//Q1
function sortByLength(array){
  let temp=0;
  for(let i=0 ; i<array.length - 1 ; i++){
    for(let j=i+1 ; j<array.length ; j++){
      if(array[i].length > array[j].length)
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
      }
    }
  }
  console.log("Array after sorting : " , array);

sortByLength(["may", "april", "september", "august"]);
console.log("---------------Q1----------------");
//Q2??
function sortDrinkByPrice(drinks) {
  drinks.sort((a,b)=> (a.price > b.price ? 1 : -1))
  console.log(drinks);
}
drinks = [
   {name: "lemonade", price: 50},
   {name: "lime", price: 10},
   {name: "Apple", price: 40}
   ];
sortDrinkByPrice(drinks);
console.log("---------------Q2?----------------")

//Q3
function toArray(arrayOfJson){
  if (Object.keys(arrayOfJson).length === 0 && arrayOfJson.constructor === Object){
    console.log("Empty");
  }else{
  let array = Object.entries(arrayOfJson);
    console.log("Convert Json to Array : ", array)
  }
}
toArray({ a: 1, b: 2 }) ;
toArray({ shrimp: 15, tots: 12 });
toArray({});
console.log("---------------Q3----------------")

//Q4
function keysAndValues(arr){
  array=[Object.keys(arr) , Object.values(arr)];
  return array;
}
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log("---------------Q4----------------")

//Q5
function century(year){
 // return Math.ceil(year/100) ;
  return parseInt((year/100)+1);
}
console.log(" \""+century(1756)+"th century\"");
console.log("---------------Q5----------------")

//Q6
function numOfSubbarrays(subArray){
 let count=0;
  for(let i=0 ; i<subArray.length;i++){
    if (Array.isArray(subArray[i])){
      count++;
    }
  }
  return count;
  //return subArray.length;
}
console.log(numOfSubbarrays([1, 2, 3]));
console.log("---------------Q6----------------")

//Q7
function numbersSum(numSum){
  let sum=0
    for(let i=0 ; i<numSum.length ; i++){
    if(Number.isFinite(numSum[i])){
      sum += numSum[i];
    }
  }
  return sum;
}
console.log(numbersSum([1, 2, 3, 4, 5, true]));
console.log("---------------Q7----------------")

//Q8
function isMultiplesOfTwo(num){
  return (num%2 == 0) ? true : false;
}
console.log(isMultiplesOfTwo(2));
console.log("---------------Q8----------------")