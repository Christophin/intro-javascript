var resultsDiv = document.getElementById("results");
var textBox = document.getElementById("fizz-num");
var button = document.getElementById("submit-button");

function fizzBuzz (n) {
  var num = Number(textBox.value);
  for (var count = 1; count < num; count++)  {
    if (count % 15 === 0) {
      resultsDiv.innerHTML += ("<p>FizzBuzz</p>")
    } else if (count % 5 === 0) {
      resultsDiv.innerHTML += ("<p>Buzz</p>")
    } else if (count % 3 === 0) {
      resultsDiv.innerHTML += ("<p>Fizz</p>")
    } else {
      resultsDiv.innerHTML += "<p>" + count + "</p>"
    };
  };
};

button.addEventListener('click', fizzBuzz);
