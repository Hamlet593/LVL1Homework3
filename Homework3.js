/*Write a recursive function to determine whether all digits of the number are odd or not.

Solution 1 Պարզ և հեշտ :D */

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

/*Solution 2 => մի քիչ ջանջալ լուծում, բայց քանի որ վրեն տանջվել եմ, ամեն դեպքում որոշեցի թողնեմ կոդը :D */

function odd(num, sumForEachTime, defaultNum){
  let sum = sumForEachTime;
  while(num){
    let lastDigit = num % 10;
    num = (num - lastDigit) / 10;
    if(lastDigit % 2 !== 0){
      sum += 1;
      return odd(num, sum, defaultNum);
    }
    else{
      return odd(num, sum, defaultNum);
    }
  }
  if(sum === String(defaultNum).length){
    return true;
  }
  else{
    return false;
  }
}
console.log(odd(4211133, 0, 4211133))
console.log(odd(7791, 0, 7791))
console.log(odd(5, 0, 5))

/*Հ.Գ. Ինչի՞ համար եմ sum-ը և defaultNum-ը "խցկել" ֆունկցիայի արգումենտի կանչի մեջ և այնպես արել, որ դրանք ամեն անգամ ֆունկցիայի կանչի ժամանակ հայտարարվեն հենց ֆունկցիայի ներսում:
Եթե մեր տնայինի մեջ odd ֆունկցիան կանչեինք ընդամենը մեկ անգամ մեկ արժեքով՝ այլ ոչ թե 3 անգամ 3 տարբեր արժեքներով,
ապա շատ նպատակահարմար կլիներ let sum = 0 հայտարարեինք ֆունկցիայի սահմաններից դուրս և խնդիրը ավելի "լավ" syntax-ով լուծեինք՝ եզակի դեպքի համար:
Բայց քանի որ մենք ֆունկցիան պետք է կանչենք 3 անգամ 3 տարբեր արժեքներով, մտածեցի այնպիսի լուծում տալ որ ֆունկցիայի կանչը ֆունկցիան աշխատացնի մի քանի կանչերի դեպքում էլ:

Իսկ function odd-ի ներսում չենք կարող հայտարարել let sum = 0 որովհետև ռեկուրսիայի կանչվելուց sum-ի արժեքն անընդհատ վերագրվելու է 0 և sum-ի կուտակում տեղի չի ունենալու:

Մտածեցի ի՞նչ եղանակով sum-ը այնպես հայտարարենք, որ function odd-ը օրինակի համար 4211133 թվով կանչելուց և լոգ անելուց հետո տնայինի հաջորդ պահանջի՝ 7791 թվով
կանչելուց և լոգ անելուց sum-ի արժեքը նորից կարողանանք 0-յացնել և նոր արժեքով ֆունկցիայի կանչը չ՛շարունակի կուտակել նախորդ կանչի sum-ի արժեքը,
այլ նորովի հայտարաի sum-ը 0 և հենց ֆունկցիայի ներսում. միակ օպտիմալ տարբերակը համարեցի որ ֆունկցիան կանչենք 3 արգումենտով՝ ամեն անգամ տալով հիմնական արգումենտները և 
0-յացնելով նախորդ հաշվարկի num-ը և sum-ը:

Մի խոսքով կներեք գլուխ ցավացնելու համար, անցնենք երկրորդ խնդրին :D*/





// Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․

// Solution 1

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

let result = Infinity
function minimalPositive(arr){
  if(arr[0] < 0 || arr[0] > result){
    arr.shift();
    return minimalPositive(arr);
  }
  else if(arr[0] <= result){
    result = arr[0];
    arr.shift();
    return minimalPositive(arr);
  }
  else if(result === Infinity){
    return -1
  }
  return result;
}
console.log(minimalPositive([56, -9, 87, -23, 0, -105, 55, 1]))
console.log(minimalPositive([45, -9, 15, 5, -78]))
console.log(minimalPositive([-5, -9, -111, -1000, -7]))

/*Բայց ես ինչպես վերևի խնդրում այնպես էլ այստեղ համաձայն չեմ որ let result = Infinity-ն գրվի ֆունկցիայի սքոփից դուրս,
որովհետև ֆունկցիայի երկրորդ կանչի ժամանակ result = Infinity չի մնում այլևս այլ result = 0 է դարձել արդեն: Դրա համար անհրաժեշտ է,
որպեսզի result-ի արժեքը ամեն անգամ ֆունկցիային կանչելուց նորովի որպես արգումենտ փոխանցենք: Այսինքն կոդը լինի այսպես՝*/

function minimalPositive(arr, result){
  if(arr[0] < 0 || arr[0] > result){
    arr.shift();
    return minimalPositive(arr, result);
  }
  else if(arr[0] <= result){
    result = arr[0];
    arr.shift();
    return minimalPositive(arr, result);
  }
  else if(result === Infinity){
    return -1
  }
  return result;
}
console.log(minimalPositive([56, -9, 87, -23, 0, -105, 55, 1], Infinity))
console.log(minimalPositive([45, -9, 15, 5, -78], Infinity))
console.log(minimalPositive([-5, -9, -111, -1000, -7], Infinity))

/*Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.

Solution*/

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

/*Հ.Գ. Իրականում տնայինի ֆայլի մեջ խնդրի պատասխանը սխալ է գրված, որովհետև եթե պահանջում է (find the index where sorting order is violated), այսինքն INDEX-ն է պահանջում տպել
հետևաբար console.log(viravorIndex([-9, -4, -4, 3, 12, 4, 5]))-ի դեպքում մենք պետք է տեսնենք ոչ թե 5 ինչպես գրված է տնայինի պատասխանի մեջ այլ 4,
որովհետև 0-ից սկսած 4-րդ ինդեքսն է violated. Այլ բան է, եթե պահանջվում է ոչ թե index-ը տպել այլ թե թվով որերորդն է violated այդ ժամանակ հարց չկա 0-ից սկսախ թվով 5-րդը
պետք է տպենք բայց այդ դեպքում խնդրի պահանջի մեջ թող ասի թվով violated-ը ոչ թեindex-ով violated-ը:
Դրա համար եմ 140-րդ տողում return i + 1 վերադարձնում ոչ թե return i:*/

/*Write recursive, memorized function to get n-th Fibonacci number.

Solution*/

function fibonacci(num, memo) {
  memo = memo || {};
  if (num <= 1) return num;
  if (memo[num]) return memo[num];
  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
console.log(fibonacci(4))

/*Հ.Գ. Անկեղծ ասեմ կոնկրետ լուծման էս տարբերակը գտել եմ ինտերնետից, որովհետև անհնար էր ես կարողանայի ֆայմել ու էս հանճարեղ լուծումը գտնեի:
Բայց հուսով եմ մի օր կհասնեմ սենց մակարդակի))*/


/*Given an array. Write a recursive function that removes the first element and returns the given array.
(without using arr.unshift(),assign second element to first, third element to second...)

Solution*/

let i = 0;
function removeFirstElement(arr){
  while(i !== arr.length){
    arr[i] = arr[i + 1];
    i++;
    return removeFirstElement(arr)
  }
  arr.pop();
  return arr;
}
console.log(removeFirstElement([6, 78, 'n', 0, 1]))
console.log(removeFirstElement([5]))
console.log(removeFirstElement([]))

/*Հ.Գ. Դավիթ ջան արդեն հասկացար որ էստեղ էլ եմ դեմ որ let i = 0 գրվի function removeFirstElement-ի սքոփից դուրս :D , որովհետև 186-րդ և 187-րդ տողերի լոգերը 185-րդ տողի լոգից
հետո ճիշտ չեն աշխատի: (վերևի տնայիններում մանրամասն արդեն ասել եմ թե խի): Դրա համար գերադասելի ա որ i-ի արժեքը յուրաքանչյուր կանչի հետ տրվի որպես ֆունկցիայի արգումենտ:
Այսինքն, կոդը թող լինի այսպես՝*/

function removeFirstElement(arr, index){
  while(index !== arr.length){/*կարող էինք գրել նաև  while(i !== arr.length - 1), որովհետև մեզ 4 վերագրում բավարար է, 5-րդը էսպես թե էնպես կտրելու էինք:
  	Ուղղակի 205-րդ տողի օրինակը չի աշխատի arr.length - 1-ի դեպքում դրա համար էսպես !== arr.length-ով ընդհանուր գրել եմ, բայց ճիշտը arr.length - 1-ովն ա: :D */
    arr[index] = arr[index + 1];
    index++;
    return removeFirstElement(arr, index)
  }
  arr.pop();
  return arr;
}
console.log(removeFirstElement([6, 78, 'n', 0, 1], 0))
console.log(removeFirstElement([5], 0))
console.log(removeFirstElement([], 0))