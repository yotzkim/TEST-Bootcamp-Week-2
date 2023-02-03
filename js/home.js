// Zoomin in
var houseImage = document.getElementById("house");
houseImage.addEventListener("click", function() {
  houseImage.classList.toggle("zoomed-in");
});

//Change text when zoomed in
var originalText = "Welcome to the Sugar Shack! Come on in!";
var zoomedText = '<a class="door-link" id="zoomed" href="file:///Users/yotokim/Documents/GitHub/TEST-Bootcamp-Week-2/list.html">Lets go!</a>';

document.getElementById("house").addEventListener("click", function() {
    var textElement = document.getElementById("welcome");
    if (textElement.innerHTML === originalText) {
      textElement.innerHTML = zoomedText;
      textElement.classList.add("zoomed");
    } else {
      textElement.innerHTML = originalText;
      textElement.classList.remove("zoomed");
    }
  });