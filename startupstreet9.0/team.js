document.addEventListener("DOMContentLoaded", function () {
    const numMembersSelect = document.getElementById("numMembers");
    const memberFields = [
        document.getElementById("member1Fields"),
        document.getElementById("member2Fields"),
        document.getElementById("member3Fields"),
        document.getElementById("member4Fields")
    ];

    const form = document.getElementById("teamRegistrationForm");
    const submitBtn = document.getElementById("submitBtn");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("closePopupBtn");
    const formContainer = document.querySelector('.container');

    // Hide all member fields initially
    memberFields.forEach((field) => field.classList.add("hidden"));

    // Show/hide member fields based on the selected number of members
    numMembersSelect.addEventListener("change", function () {
        const numMembers = parseInt(numMembersSelect.value);
        memberFields.forEach((field, index) => {
            if (index < numMembers - 1) {
                field.classList.remove("hidden");
            } else {
                field.classList.add("hidden");
            }
        });
    });

    // Form submission with loading state and popup confirmation
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Disable the submit button and show loading state
        submitBtn.textContent = "Submitting...";
        submitBtn.disabled = true;

        // Send form data to Google Apps Script
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        })
        .then(response => {
            if (response.ok) {
                // Form submission successful
                // Hide the form container
                formContainer.classList.add("hidden");

                // Show the popup confirmation message
                popup.classList.remove("hidden");
            } else {
                // Handle error response
                alert('There was an error submitting the form.');
                submitBtn.textContent = "Submit Team Details";
                submitBtn.disabled = false;
            }
        })
        .catch(error => {
            console.error("Error!", error.message);
            alert('Failed to submit the form. Please try again.');
            submitBtn.textContent = "Submit Team Details";
            submitBtn.disabled = false;
        });
    });
    
});
