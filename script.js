// Get references to DOM elements
const submitButton = document.getElementById("submitButton");
const thoughtInput = document.getElementById("thoughtInput");
const thoughtsContainer = document.getElementById("thoughtsContainer");

// Function to create a new thought card and add it to the display
function displayThought(thought) {
  // Create the thought card element
  const thoughtCard = document.createElement("div");
  thoughtCard.classList.add("thought-card");

  // Add the thought text to the card
  const thoughtText = document.createElement("p");
  thoughtText.textContent = thought;
  thoughtCard.appendChild(thoughtText);

  // Add the thought card to the thoughts container
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

// Optional: Handle "Enter" key to submit the thought
thoughtInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault(); // Prevent the default behavior of the Enter key (new line)
    submitButton.click(); // Trigger the click event of the submit button
  }
});
const clearThoughtsButton = document.getElementById("clearThoughtsButton");

clearThoughtsButton.addEventListener("click", () => {
  thoughtsContainer.innerHTML = ""; // Clear all thoughts
});

function saveThoughtsToLocalStorage() {
  const thoughts = Array.from(thoughtsContainer.children).map(
    (card) => card.textContent
  );
  localStorage.setItem("thoughts", JSON.stringify(thoughts));
}

function loadThoughtsFromLocalStorage() {
  const savedThoughts = JSON.parse(localStorage.getItem("thoughts")) || [];
  savedThoughts.forEach(displayThought);
}

// Call this function when a new thought is added
submitButton.addEventListener("click", function () {
  if (thoughtInput.value.trim()) {
    saveThoughtsToLocalStorage();
  }
});

// Load thoughts on page load
window.addEventListener("load", loadThoughtsFromLocalStorage);
