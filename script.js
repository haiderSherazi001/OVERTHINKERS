// Get references to DOM elements
const submitButton = document.getElementById("submitButton");
const thoughtInput = document.getElementById("thoughtInput");
const thoughtsContainer = document.getElementById("thoughtsContainer");

// Function to create a new thought card and add it to the display
function displayThought(thought) {
  const thoughtCard = document.createElement("div");
  thoughtCard.classList.add("thought-card");
  thoughtCard.textContent = thought;
  thoughtsContainer.appendChild(thoughtCard);
}

// Event listener for the submit button
submitButton.addEventListener("click", function () {
  const newThought = thoughtInput.value.trim();

  // Check if the input is not empty
  if (newThought) {
    displayThought(newThought); // Display the thought
    thoughtInput.value = ""; // Clear the input field
  } else {
    alert("Please write something before submitting!");
  }
});
