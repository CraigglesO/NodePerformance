var now = require('performance-now');
var randomWords = require('random-words');

var data = [];

function test(d_number,test_count){
   while(test_count--){
      var start = now();
      // include test
      var finish = now();
      data.push(finish-start);
   }
}

function num_array(min, max, count){
   var ar = [];
   while(count--){
      ar.push(Math.floor(Math.random() * (max - min + 1)) + min);
   }
   return ar;
}

function num_array_2d(i,j,min,max){
   var ar = [];
   for (y = 0; y < j; y++){
      ar.push([]);
      for (x = 0; x < i; x++){
         ar[j].push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
   }
}

function word_array(total){
   return randomWords(total);
}

function sentance_array(word_count,sentance_count){
   var ar = [];
   while (sentance_count--){
      ar.push(randomWords({ exactly: word_count, join: ' '}));
   }
}
