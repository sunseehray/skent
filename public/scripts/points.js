// Get all checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Get the element to display the total sum
const totalDisplay = document.getElementById('totalValue');

// Function to calculate the total sum
function calculateTotal() {
  let sum = 0;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      sum += parseInt(checkbox.value);
    }
  });
  return sum;
}

// Function to update the total display
function updateTotal() {
  totalDisplay.textContent = calculateTotal();
}

// Add event listeners to each checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateTotal);
});
