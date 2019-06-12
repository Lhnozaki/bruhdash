var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, val) {
    return arr.indexOf(val);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, val) {
    return arr.lastIndexOf(val);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    let newArr = [];
    return arr.filter(Boolean);
    // Longer/Broken down way
    // for(i = 0; i < arr.length; i++) {
    //   if(arr[i] == false || arr[i] == null || arr[i] == 0 || arr[i] == "" || arr[i] == undefined || Number.isNaN(arr[i])) {
    //     arr.splice(i, 1);
    //     i--;
    //   }
    // }
    // return arr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, valOne, valTwo) {
    return arr.slice(valOne, valTwo);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, val){
    if(val === undefined) {
      arr.shift();
    } else {
      for(i = 0; i < val; i++) {
        if(val === 0) {
        return arr;
        } else {
        arr.shift();
        }
      }
    }
    return arr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, val) {
    if(val === undefined) {
      arr.pop();
    } else {
      for(i = 0; i < val; i++) {
        if(val === 0) {
          return arr;
        } else {
          arr.pop();
        }
      }
    }
    return arr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, val) {
    let newArr = [];
    if(val === undefined) {
      newArr.push(arr[0]);
    } else if(val >= arr.length) {
      return arr;
    } else if(val === 0) {
      return newArr;
    } else {
      for(i = 0; i < val; i++) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, val) {
    let newArr = [];
    if(val === undefined) {
      newArr.push(arr.pop());
    } else if(val >= arr.length) {
      return arr;
    } else if(val === 0) {
      return newArr;
    } else {
      for(i = 0; i < val; i++) {
        newArr.push(arr.pop());
      }
    }
    newArr.sort();
    return newArr;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, start, end) {
    let rplc = end - start;
    let newArr = [];
    if(start === undefined && end === undefined) {
      for(i = 0; i < arr.length; i++) {
        newArr.push(val);
      }
    } else {
      arr.splice(start, rplc);
      for(i = 0; i < rplc; i++) {
        arr.splice(start, 0, val)
      }
      return arr;
    }
    return newArr
  },

  // removes all given values from an array
  pull: function (arr, valOne, valTwo) {
    for(i = 0; i < arr.length; i++) {
      if(arr[i] === valOne) {
        arr.splice(arr.indexOf(arr[i]), 1);
      } 
      if(arr[i] === valTwo) {
        arr.splice(arr.indexOf(arr[i]), 1);
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, ind) {
    let newArr = [];  
    newArr.push(arr[ind[0]]);
    newArr.push(arr[ind[1]]);
    return newArr;
  },

  // creates an array excluding all the specified values
  without: function(arr, valOne, valTwo) {
    let newArr = [];
    for(i = 0; i < arr.length; i++) {
      if(arr[i] !== valOne && arr[i] !== valTwo) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // returns an array with specified values excluded
  difference: function(arr, valArr) {
    let newArr = [];
    for(i = 0; i < arr.length; i++) {
      if(valArr.indexOf(arr[i]) === -1) { //-1 means that it "never occurs in the array"
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
