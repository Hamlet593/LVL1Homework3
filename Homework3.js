/*Write a recursive function to determine whether all digits of the number are odd or not.

Solution*/

function odd(num){
  while(num){
    let eachDigit = num % 10;
    num = (num - eachDigit) / 10;
    if(eachDigit % 2 !== 0){
      return odd(num)
    }
    else{
      return false
    }
  }
  return true;
}
console.log(odd(4211133))
console.log(odd(7791))
console.log(odd(5))

/*Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․

Solution 1*/

function minimalPositive(arr){
  arr.sort((a, b) => a - b);
  if(arr[0] < 0){
    arr.splice(0, 1);
    return minimalPositive(arr);
  }
  else if(arr[0] >= 0){
    return arr[0]
  }
  else{
    return -1
  }
}
console.log(minimalPositive([56, -9, 87, -23, 0, -105, 55, 1]))
console.log(minimalPositive([45, -9, 15, 5, -78]))
console.log(minimalPositive([-5, -9, -111, -1000, -7]))

/*Solution 2*/


function minimalPositive(arr, result = Infinity){
  if(arr[0] < 0 || arr[0] > result){
    arr.shift()
    return minimalPositive(arr, result)
  }
  else if(arr[0] <= result){
    result = arr[0];
    arr.shift();
    return minimalPositive(arr, result)
  }
  else if(result === Infinity){
    return -1
  }
  return result;
}
console.log(minimalPositive([56, -9, 87, -23, 0, -105, 55, 1]))
console.log(minimalPositive([45, -9, 15, 5, -78]))
console.log(minimalPositive([-5, -9, -111, -1000, -7]))

/*Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.

Solution 1*/

function viravorIndex(arr){
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] <= arr[i + 1]) continue;
    else{
      return i + 1
    }
  }
  return -1
}
console.log(viravorIndex([2, 12, 15, 48, 64]))
console.log(viravorIndex([-9, -4, -4, 3, 12, 4, 5]))

/*Solution 2*/

function viravorIndex(arr, i = 0){
  debugger;
  if(arr[0] <= arr[1]){
    arr.shift();
    i++;
    return viravorIndex(arr, i)
  }
  else if(arr[0] > arr[1]){
    return i + 1
  }
  else if(arr[1] === undefined){
    return -1
  }
}
console.log(viravorIndex([2, 12, 15, 48, 64]))
console.log(viravorIndex([-9, -4, -4, 3, 12, 4, 5]))

/*Write recursive, memorized function to get n-th Fibonacci number.

Solution*/

function fibonacci(num, memo = {}) {
  if (num <= 1) return num;
  if (memo[num]) return memo[num];
  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
console.log(fibonacci(4))

/*Given an array. Write a recursive function that removes the first element and returns the given array.
(without using arr.unshift(),assign second element to first, third element to second...)

Solution*/

function removeFirstElement(arr, index = 0){
  while(index !== arr.length){
    arr[index] = arr[index + 1];
    index++;
    return removeFirstElement(arr, index)
  }
  arr.pop();
  return arr;
}
console.log(removeFirstElement([6, 78, 'n', 0, 1]))
console.log(removeFirstElement([5]))
console.log(removeFirstElement([]))

/*BUBBLE SORT WHILE > FOR*/

function sort(arr){
  let swipe = true;
  while(swipe){
    swipe = false;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i + 1]){
        swipe = true;
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
  }
  return arr;
}
console.log(sort([1, 7, 5, 2, 6, 3, 4, 5, 18, -9, 42]))

/*BUBBLE SORT FOR > FOR*/

function sorting(arr) {
  debugger;
  let moved = true;
  for(let i = 0; i < arr.length && moved; i++){
    moved = false;
    for(let j = 0; j < arr.length - 1 - i; j++){
      if(arr[j] > arr[j + 1]){
        moved = true;
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
console.log(sorting([1, 2, 3, 1, 5, 8, -5, -54, 9]))
