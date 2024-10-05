// Get the modal
var aimsModal = document.getElementById("aimsModal");
  
// Get the button that opens the modal
var aimsBtn = document.getElementById("aimsBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
aimsBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  aimsModal.style.display = "flex"; // Use flex to center the modal
  aimsModal.style.visibility = "visible"; // Make the modal visible
});

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function() {
  aimsModal.style.display = "none"; // Hide the modal
  aimsModal.style.visibility = "hidden"; // Make the modal not visible
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == aimsModal) {
	aimsModal.style.display = "none"; // Hide the modal
	aimsModal.style.visibility = "hidden"; // Make the modal not visible
  }
});