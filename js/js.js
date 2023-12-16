var leftItem = document.getElementById('item0'),
    rightItem = document.getElementById('item1'),
    clock = document.getElementById('clock'),
    minute = document.getElementById('minute'),
    hour = document.getElementById('hour'),
    smallG0 = document.getElementById("smallG0"),
    bigG0 = document.getElementById("bigG0"),
    smallG1 = document.getElementById("smallG1"),
    bigG1 = document.getElementById("bigG1"),
    text = document.getElementById("text"),
    explore = document.getElementById("explore");


;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
    let value = window.scrollY;

    clock.style.marginTop = value * -5 + "px";

    minute.style.marginTop = value * -5 + "px";
    hour.style.marginTop = value * -5 + "px";

    minute.style.transform = "rotate(" + value * 5 + "deg)";
    hour.style.transform = "rotate(" + value * .5 + "deg)";

    leftItem.style.marginRight = value * -5 + "px";
    leftItem.style.opacity = 1 - value * .0031;

    rightItem.style.marginLeft = value * -5 + "px";
    rightItem.style.opacity = 1 - value * .0031;

    text.style.top = 40 + value * -0.2 + "%";
    explore.style.top = 40 + value * 0.5 + "px";

    

    leftItem.style.transform = "rotate(" + value * -1 + "deg)";
    rightItem.style.transform = "rotate(" + window.pageYOffset + "deg)";

   

    smallG0.style.transform = "rotate(" + value * 4 + "deg)";
    bigG0.style.transform = "rotate(" + value * -4 + "deg)";

    smallG1.style.transform = "rotate(" + value * 4 + "deg)";
    bigG1.style.transform = "rotate(" + value * -4 + "deg)";

})