
document.querySelector(".details").addEventListener("submit", function (event) {
  event.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const name = document.getElementById("name").value.trim();
  const regNo = document.getElementById("regNo").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const formContainer = document.querySelector(".container");
  const popup = document.getElementById("popup");

  clearErrors();

  setButtonLoadingState(submitBtn, true);

  // Validate input fields
  if (!name || !regNo || !phone) {
    showError("All fields are required.");
    setButtonLoadingState(submitBtn, false);
    return;
  }

  if (!validateRegNo(regNo)) {
    showError("Registration number must be 9 characters long.");
    setButtonLoadingState(submitBtn, false);
    return;
  }

  if (!validatePhoneNumber(phone)) {
    showError("Phone number must be between 10-13 digits and contain only numbers.");
    setButtonLoadingState(submitBtn, false);
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("regNo", regNo);
  formData.append("phone", phone);

  // Submit the form data
  fetch("https://script.google.com/macros/s/AKfycbyruEzUIf_tk0nXRdnxO9a1KONr2bP2dsz-nwJ4OzwJSZQwmdjUF-UxiyEO1lHI8Zdu/exec", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      setButtonLoadingState(submitBtn, false);
      if (data.result === "success") {
        displaySuccessMessage("Your registration was successful!");
        document.querySelector(".details").reset();
        formContainer.style.display = "none";
        popup.classList.remove("hidden");

        // Redirect to the desired link after a short delay
        setTimeout(() => {
          window.location.href = "YOUR_REDIRECT_URL_HERE"; // Replace with your desired URL
        }, 10000); // 10 seconds delay
      } else {
        showError("There was an error submitting your registration. Please try again.");
      }
    })
    .catch((error) => {
      showError("Network error. Please check your connection and try again.");
      setButtonLoadingState(submitBtn, false);
    });
});

// Close popup button event listener
document.getElementById("closePopupBtn").addEventListener("click", function () {
  const popup = document.getElementById("popup");
  const formContainer = document.querySelector(".container");

  
});


// Helper functions
function showError(message) {
  const errorContainer = document.getElementById("error-container");
  const errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  errorMessage.style.color = "red";
  errorContainer.appendChild(errorMessage);
  errorContainer.style.display = "block"; // Show the error container
}

function clearErrors() {
  const errorContainer = document.getElementById("error-container");
  errorContainer.innerHTML = "";
  errorContainer.style.display = "none"; // Hide error container
}

function setButtonLoadingState(button, isLoading) {
  if (isLoading) {
    button.disabled = true;
    button.textContent = "Submitting...";
  } else {
    button.disabled = false;
    button.textContent = "Submit";
  }
}

function validateRegNo(regNo) {
  return regNo.length === 9;
}

function validatePhoneNumber(phone) {
  const phonePattern = /^\d{10,13}$/; // Ensure it's only digits and the right length
  return phonePattern.test(phone);
}

function displaySuccessMessage(message) {
  const successContainer = document.getElementById("error-container"); // Use error container to display success
  const successMessage = document.createElement("p");
  successMessage.textContent = message;
  successMessage.style.color = "green";
  successContainer.appendChild(successMessage);
  successContainer.style.display = "block"; // Show the success message
}
