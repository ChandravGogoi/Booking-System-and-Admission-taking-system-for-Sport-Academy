
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            const court = document.getElementById('courtSelect').value;
            const duration = document.getElementById('duration').value;

            // Calculate cost (assuming $20 per court per hour)
            const costPerHour = 350;
            const totalCost = duration * costPerHour;

            // Display booking details
            const bookingDetails = document.getElementById('bookingDetails');
            bookingDetails.innerHTML = `
                <h2>Booking Confirmed!</h2>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Court:</strong> ${court}</p>
                <p><strong>Duration:</strong> ${duration} hour(s)</p>
                <p><strong>Total Cost:</strong> $${totalCost}</p>
            `;
            bookingDetails.style.display = 'block';
        });

        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('bookingDate').min = today;
    