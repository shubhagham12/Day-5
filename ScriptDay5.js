// Q/ 1) Programs in anonymous function & IIFE

// a) Print odd numbers in an array
// IIFE
(function (arr) {
    let odd = [];
    for (let i in arr) {
      if (arr[i] % 2 !== 0) {
        odd.push(arr[i]);
      }
    }
    console.log(odd);                       //  Output: [ 11, 33, 55, 77, 99]
  })([11, 22, 33, 44, 55, 66, 77, 88, 99, 100]);
    
  // Anonymous function
  const findOddNumbers = function (arr) {
    let odd = [];
    for (let i in arr) {
      if (arr[i] % 2 !== 0) {
        odd.push(arr[i]);
      }
    }
    return odd;
  };
  
  console.log(findOddNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100]));

  // Output: [ 11, 33, 55, 77, 99]

  //------------------------------------------------------------------------------------
  
  // b) Convert all the strings to title caps in a string array
  // IIFE function
  (function (arr) {
    let titleCaps = arr.map((el) => el[0].toUpperCase() + el.slice(1));
    console.log(titleCaps);
  })(["rohit", "virat", "rahul", "rishabh", "ishan"]);
  
  // Output: ["Rohit", "Virat", "Rahul", "Rishabh", "Ishan"]
  
  
  // Anonymous function
  const titleCaps = function (arr) {
    let titleCaps = arr.map((title) => title[0].toUpperCase() + title.slice(1));
    return titleCaps;
  };
  
  console.log(titleCaps(["rohit", "virat", "rahul", "rishabh", "ishan"]));
  // Output: ["Rohit", "Virat", "Rahul", "Rishabh", "Ishan"]

  //-----------------------------------------------------------------------------------
  
  // c) Sum of all numbers in an array
  // IIFE
  (function (arr) {
    let sum = 0;
    arr.forEach(function (num) {
      sum += num;
    });
    console.log(sum);               // Output: 131
  })([45, 18, 1, 17, 33, 7, 10]);
  
 
  
  // Anonymous function
  const sumOfAllNumbers = function (arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  };
  
  console.log(sumOfAllNumbers([45, 18, 1, 17, 33, 7, 10]));   // Output:  131
 

  //----------------------------------------------------------------------------------
  
  // d) Return all the prime numbers in an array
  // IIFE
  (function (arr) {
    let primes = [];
    arr.forEach((num) => {
      let factor = 0;
      for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
          factor++;
        }
      }
      if (factor === 2) {
        primes.push(num);
      }
    });
    console.log(primes);    // Output: [ 17, 7, 11 ]
  
  })([45, 17, 18, 7, 1, 11, 33]);
 
  // Anonymous function
  const allPrimes = function (arr) {
    let primes = [];
    arr.forEach((num) => {
      let factor = 0;
      for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
          factor++;
        }
      }
      if (factor === 2) {
        primes.push(num);
      }
    });
    return primes;
  };
  console.log(allPrimes([45, 17, 18, 7, 1, 11, 33]));   // Output: [ 17, 7, 11 ]
 
  //------------------------------------------------------------------------------

  // e) Return all the palindromes in an array
  // IIFE
  (function (arr) {
    let palindromes = [];
    for (let str of arr) {
      // for (let k = 0; k < arr.length; k++) {
      let reversedWord = "";
      for (let i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
      }
  
      if (str === reversedWord) {
        palindromes.push(reversedWord);
      }
    }
    console.log(palindromes);
  })([ "nayan","Rohit","bob","Sachin","arora","Virat","anna","kanak",
 ]);
  
  // Output: [ 'nayan', 'bob', 'arora', 'anna', 'kanak' ]
  
  // Anonymous function
  const palindromes = function (arr) {
    let palindromeWords = arr.filter(function (str) {
      let reversedString = "";
      for (let j = str.length - 1; j >= 0; j--) {
        reversedString += str[j];
      }
      if (str === reversedString) {
        return reversedString;
      }
    });
  
    return palindromeWords;
  };
  
  console.log(
    palindromes([
        "nayan","Rohit","bob","Sachin","arora","Virat","anna","kanak",
    ])
  );
  // Output: [ 'nayan', 'bob', 'arora', 'anna', 'kanak' ]
  
  
  //---------------------------------------------------------------------------------

  // f) Return median of two sorted arrays of the same size
  // IIFE
  (function (arr1, arr2) {
    let arr3 = arr1.concat(arr2).sort((a, b) => a - b);
    let m1, median;
    if (arr3.length % 2 === 0) {
      m1 = arr3.length / 2;
      median = (arr3[m1] + arr3[m1 - 1]) / 2;
    }
    console.log(median);
  })([99, 18, 45, 33, 10], [7, 17, 1, 65, 77]);
  
  // Output 25.5
  
  // Anonymous function
  const median = function (arr1, arr2) {
    let arr3 = arr1.concat(arr2).sort((a, b) => a - b);
    let m1, median;
    if (arr3.length % 2 === 0) {
      m1 = arr3.length / 2;
      median = (arr3[m1] + arr3[m1 - 1]) / 2;
    }
    return median;
  };
  
  console.log(median([99, 18, 45, 33, 10], [7, 17, 1, 65, 77]));
  // Output 25.5
  
  //--------------------------------------------------------------------------------


  // g) Remove duplicates from an array
  // IIFE
  (function (arr) {
    const newSet = new Set(arr);
    console.log([...newSet]);
  })(["Rohit", "Virat", "Surya", "Hardik", "Virat", "Surya", "Sachin"]);

 // Output:- [ 'Rohit', 'Virat', 'Surya', 'Hardik', 'Sachin' ]
  
  // Anonymous function
  const removeDuplicates = function (arr) {
    const removingDuplicates = new Set(arr);
    return [...removingDuplicates];
  };
  console.log(
    removeDuplicates([
        "Rohit", "Virat", "Surya", "Hardik", "Virat", "Surya", "Sachin",
    ])
  );
  // Output:- [ 'Rohit', 'Virat', 'Surya', 'Hardik', 'Sachin' ]
  
  console.log(removeDuplicates([33, 1, 45, 12, 6, 45, 33, 7, 10, 1, 99, 10, 18, 17, 77]));
  // Output:- [ 33,  1, 45, 12,  6, 7, 10, 99, 18, 17, 77 ]


  //--------------------------------------------------------------------------------
  
  // h) Rotate an array by k times
  // IIFE
  (function (arr, k) {
    const revArr = function (arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    };
  
    k = k % arr.length;
    arr.reverse();
    revArr(arr, 0, k - 1);
    revArr(arr, k, k.length - 1);
    console.log(arr);    // Output : -  [ 2, 5, 4, 3, 1 ]
  })([1, 3, 4, 2, 5], 2);
  
  // Anonymous function
  const revArr = function (arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };
  
  const rotate = function (arr, k) {
    k = k % arr.length;
  
    arr.reverse();
    revArr(arr, 0, k - 1);
    revArr(arr, k, k.length - 1);
    return arr;
  };
  
  console.log(rotate([1, 3, 4, 2, 5], 2));  //  Output :- [ 2, 5, 4, 3, 1 ]

  //////////////////////////////////////////////////////////////////////////////////////
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Q 2. Programs in arrow functions
  // a) Print odd numbers in an array
  const GetOddNumbers = (arr) => {
    let odd = [];
    for (let i in arr) {
      if (arr[i] % 2 !== 0) {
        odd.push(arr[i]);
      }
    }
    return odd;
  };
  
  console.log(GetOddNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100]));
   //  Output: [ 11, 33, 55, 77, 99]

   //------------------------------------------------------------------------------------
  
  // b) Convert all the strings to title caps in a string array
  const titleUppercase = (arr) => {
    let titleUppercase = arr.map(
      (title) => title[0].toUpperCase() + title.slice(1)
    );
    return titleUppercase;
  };
  
  console.log(titleUppercase(["rohit", "virat", "rahul", "rishabh", "ishan"]));
  
  // Output: ["Rohit", "Virat", "Rahul", "Rishabh", "Ishan"]


  //------------------------------------------------------------------------------
  
  // c) Sum of all numbers in an array
  const sum_of_all_numbers = (arr) => {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  };
  
  console.log(sum_of_all_numbers([33, 99, 7, 18, 10, 1, 45]));
  // Output: 213
  
  //-----------------------------------------------------------------

  // d) Return all the prime numbers in an array
  const allPrimeNumbers = (arr) => {
    let primes = [];
    arr.forEach((num) => {
      let factor = 0;
      for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
          factor++;
        }
      }
      if (factor === 2) {
        primes.push(num);
      }
    });
    return primes;
  };
  console.log(allPrimeNumbers([45, 17, 18, 7, 1, 11, 33]));
  // Output: [ 17, 7, 11 ]
  
     
//-----------------------------------------------------------------------------------

  // e) Return all the palindromes in an array
  const palindrome = (arr) => {
    let palindromeWords = arr.filter(function (str) {
      let reversedString = "";
      for (let j = str.length - 1; j >= 0; j--) {
        reversedString += str[j];
      }
      if (str === reversedString) {
        return reversedString;
      }
    });
  
    return palindromeWords;
  };
  
  console.log(
  palindromes(["nayan","Rohit","bob","Sachin","arora","Virat","anna","kanak",])
);

// Output: [ 'nayan', 'bob', 'arora', 'anna', 'kanak' ]
