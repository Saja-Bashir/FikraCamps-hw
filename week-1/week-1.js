/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

function BestProfit(arr) {}
console.log(BestProfit([150, 146, 142, 143, 145, 144]));

/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

function CheckOverlap(t1Start, t1End, t2Start, t2End) {
    
    if((t1Start <= t2End) && (t2Start <= t1End)){
        return("overlap")
    } else {
        return("no overlap")
    }
}
console.log(CheckOverlap(
    "13/5/2021 13:00",
    "14/5/2021 13:00",
    "15/5/2021 13:00",
    "16/5/2021 13:00"
  ));

/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */

function HowManyPairs(shoes) {
  let count1=0,count2=0;

    for(let i=0 ; i< shoes.length ; i++ ){
      if(shoes[i]=='R')
      {
        count1++;
      }else if(shoes[i]=='L')
      {
        count2++;
      }
     }
     if(count1 <= count2){
       return (count1 + " Pairs Of Shose")
     }else if(count2 <= count1){
      return(count2 + " Pairs Of Shose")
     }
}
console.log(HowManyPairs("RLRRLRRLRLRRLLLLRR"));

/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */

function HowManyLetters(word) {
  let arryOfJson={};
  for(let i=0 ;i<=word.length-1;i++){
    if(arryOfJson[word[i]]){
      arryOfJson[word[i]] = arryOfJson[word[i]]+1;
    }else{
      arryOfJson[word[i]]=1;
    }
  }
  console.log("How Many Letters : ", arryOfJson)
}
HowManyLetters("kffooskssss")


/** Q5
  * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
 
 Examples
 sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
 
 sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
 
 sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
 Notes
 The arrays can contain either positive or negative elements.
 The arrays will only contain integers.
 The arrays won't contain duplicate numbers.
 This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
  */
function sortArray(array){
  let temp=0;
  for(let i=0 ; i<array.length -1  ; i++){
    for(let j=i+1 ; j<array.length ; j++){
      if(array[i] > array[j]){
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
      }
    }
  }
  return("Array after sorting : " + array);
}
//sortArray([2, -5, 1, 4, 7, 8])
console.log(sortArray([23, 15, 34, 17, -28]));

/** Q6
  * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 
 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 
 minMax([2334454, 5]) ➞ [5, 2334454]
 
 minMax([1]) ➞ [1, 1]
  */
function minMax(arr){
 let max=arr[0] ;
  for(let j=0 ; j<arr.length;j++){
    if(arr[j]>max){
      max=arr[j];
    }
  }
  let min=arr[0] ;
  for(let i=0 ; i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i];
    }
  }
   /*let min = Math.min(...arr);
   let max = Math.max(...arr);*/
   console.log("Min Max : " , [min , max])
}
minMax([1, 2, 3, 4, 5]);

/** Q7
  * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
 
 Examples
 missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 
 missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 
 missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 Notes
 The array of numbers will be unsorted (not in order).
 Only one number will be missing.
  */
function missingNum(arrayOfNum){
  let count =10;
  for(let i = 1; i <= count; i++){
      if(arrayOfNum.indexOf(i) == -1){
        console.log("The missing number is : ",i);
      }
    }
}
missingNum([ 7, 1, 8, 9, 4, 2, 3])

/** Q8
  * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
 
 Examples
 numToEng(0) ➞ "zero"
 
 numToEng(18) ➞ "eighteen"
 
 numToEng(126) ➞ "one hundred twenty six"
 
 numToEng(909) ➞ "nine hundred nine"
 Notes
 There are no hyphens used (e.g. "thirty five" not "thirty-five").
 The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
  */
