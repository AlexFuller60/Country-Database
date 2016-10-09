
(function(){


var myButtonClasses = document.getElementById("position").classList;


document.getElementById("one").onclick = function(){
 myButtonClasses.remove("main2");
myButtonClasses.add("main");
};

document.getElementById("two").onclick = function(){
   myButtonClasses.remove("main");
myButtonClasses.add("main2");
};




})();
