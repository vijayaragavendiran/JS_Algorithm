// Given an array of integers. Find the surpasser count of each element of the array. 
function suprass(arr) {
  let result = [];
  let count = 0;
  if (arr.length > 0) {
    debugger;
    for (i = 0; i <= arr.length; i++) {
      for (j = i + 1; j <= arr.length - 1; j++) {
        if (arr[i] < arr[j]) {
          count = count + 1;
        }
      }
      result.push(count);
      count = 0;
    }
  }
  return result;
}

var Input = [2, 7, 5, 3, 0, 8, 1];
console.log(suprass(Input));

// Find the first unrepeated character in a given string. Solve this in a single pass.
var first_non_repeated_character = function(string) {
  var string1 = string.split('');
  var string2 = string.split('');

  var single_letters = [];

  for (var i = 0; i < string1.length; i++) {
    var count = 0;
    for (var x = 0; x < string2.length; x++) {
      if (string1[i] == string2[x]) {
        count++
      }
    }
    if (count == 1) {
      return string1[i];
    }
  }
}

console.log(first_non_repeated_character('dont doddle in the forest'));
