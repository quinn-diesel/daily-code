

// How I would write it //

var loop = function (start, end){
  // setting up the first variable
  var str = '',
  i;
  // create the loop, start at the first term, end at the second term
  for (i = start; i <= end; i += 1){
    str += i;
    if (i === end) {
      // break out of the loop when i is equal to the end
      break;
    }
    str += ', ';
  }
  return str;
};

loop(1, 10);



// function loop_plus_half(start, end) {
//     var str = '',
//         i;
//     for (i = start; i <= end; i += 1) {
//         str += i;
//         if (i === end) {
//           break;
//         }
//         str += ', ';
//     }
//     return str;
// }
//
// alert(loop_plus_half(1, 10));
