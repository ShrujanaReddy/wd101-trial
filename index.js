
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('registrationForm');
        const tableBody = document.getElementById('dataTableBody');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const dob = document.getElementById('dob').value;
            const termsAccepted = document.getElementById('termsAccepted').checked;

            // Validate age between 18 and 55
            const dobDate = new Date(dob);
            const today = new Date();
            const age = today.getFullYear() - dobDate.getFullYear();
            if (age < 18 || age > 55) {
                alert('Age must be between 18 and 55 years.');
                return;
            }

            // Validate email
            if (!isValidEmail(email)) {
                alert('Invalid email address.');
                return;
            }

            const newRow = tableBody.insertRow();
            newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${termsAccepted}</td>`;

            // Clear form fields
            form.reset();
        });

        function isValidEmail(email) {
            // Basic email validation using regex
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    });
