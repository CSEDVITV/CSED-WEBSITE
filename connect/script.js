document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('2024-09-27T00:00:00'); // Set the target date

    function updateCountdown() {
        const currentDate = new Date();
        const differenceInTime = eventDate.getTime() - currentDate.getTime();

        // Calculate time remaining
        const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
        
        // Display the result
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m Left`;

        // Check if the countdown is over
        if (differenceInTime <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "Event Started!";
        }
    }

    // Update the countdown every 1 second
    const timer = setInterval(updateCountdown, 1000);

    // Initial call to display immediately
    updateCountdown();
});
