  //detecting button press
var numberOfPianoButtons = document.querySelectorAll(".sound").length;

for (var i = 0; i < numberOfPianoButtons; i++) {
    document.querySelectorAll(".sound")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

   //detecting keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var do1 = new Audio('sounds/do.mp3');
      do1.play();
      break;
    case "a":
      var re = new Audio('sounds/re.mp3');
      re.play();
      break;
    case "s":
      var mi = new Audio('sounds/mi.mp3');
      mi.play();
      break;
    case "d":
      var fa = new Audio('sounds/fa.mp3');
      fa.play();
      break;
    case "j":
      var sol = new Audio('sounds/sol.mp3');
      sol.play();
      break;
    case "k":
      var la = new Audio('sounds/la.mp3');
      la.play();
      break;
    case "l":
      var si = new Audio('sounds/si.mp3');
      si.play();
      break;
    default:
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
}

