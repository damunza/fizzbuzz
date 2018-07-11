$(document).ready(function(){
  $("form#slap").submit(function(event){
    event.preventDefault();
    var userInput=parseInt($("input#number").val());
    var result=fuzz(userInput);
    // $("#result").text(result);
    console.log(userInput);
  })
})

 var fuzz=function(userInput){
   if (userInput % 3===0 && userInput % 5===0){
     console.log("fizzbuzz");
} else if (userInput % 3 ===0) {
  console.log("fizz");
}else if (userInput % 5 ===0) {
  console.log("buzz");
}else {
  console.log(userInput);
}
}
//   if (userInput % 3===0) {
//     $("#result").text("fizz");
//   }else {
//     $("#result").text(userInput);
//   }
//
// };
