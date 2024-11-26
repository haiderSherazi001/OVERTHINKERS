// Get references to DOM elements
const submitButton = document.getElementById("submitButton");
const thoughtInput = document.getElementById("thoughtInput");
const thoughtsContainer = document.getElementById("thoughtsContainer");
const addThoughtButton = document.getElementById("addThoughtButton");
const goBackButton = document.getElementById("goBackButton");
const clearThoughtsButton = document.getElementById("clearThoughtsButton");

// Function to create a new thought card and add it to the display (Feed page)
function displayThought(thought) {
  const thoughtCard = document.createElement("div");
  thoughtCard.classList.add("thought-card");
  thoughtCard.textContent = thought;
  thoughtsContainer.appendChild(thoughtCard);
}

// Event listener for the submit button on the Add Thought page
if (submitButton) {
  submitButton.addEventListener("click", function () {
    const newThought = thoughtInput.value.trim();

    if (newThought) {
      // Save the thought to localStorage
      let savedThoughts = JSON.parse(localStorage.getItem("thoughts")) || [];
      savedThoughts.push(newThought);
      localStorage.setItem("thoughts", JSON.stringify(savedThoughts));

      // Redirect back to the Feed page
      window.location.href = "index.html";
    } else {
      alert("Please write something before submitting!");
    }
  });
}

// Optional: Handle "Enter" key to submit the thought on the Add Thought page
if (thoughtInput) {
  thoughtInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      // Prevent new line on Enter key
      e.preventDefault();
      submitButton.click(); // Trigger the submit button click
    }
  });
}

// Event listener for the "Go Back" button (Add Thought page)
if (goBackButton) {
  goBackButton.addEventListener("click", function () {
    window.location.href = "index.html"; // Navigate back to the Feed page without saving the thought
  });
}

// Event listener for the "Add a Thought" button on the Feed page
if (addThoughtButton) {
  addThoughtButton.addEventListener("click", function () {
    window.location.href = "addThought.html"; // Navigate to the Add Thought page
  });
}

// Function to load thoughts from localStorage on the Feed page
function loadThoughtsFromLocalStorage() {
  const savedThoughts = JSON.parse(localStorage.getItem("thoughts")) || [];
  savedThoughts.forEach(displayThought);
}

// Event listener for the "Clear All Thoughts" button on the Feed page
if (clearThoughtsButton) {
  clearThoughtsButton.addEventListener("click", () => {
    thoughtsContainer.innerHTML = ""; // Clear all thoughts
    localStorage.removeItem("thoughts"); // Clear saved thoughts in localStorage
  });
}

// Load thoughts on page load for the Feed page
window.addEventListener("load", loadThoughtsFromLocalStorage);
