const form = document.getElementById('registrationForm');
        const userTable = document.getElementById('userTable');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const dob = document.getElementById('dob').value;
            const password=document.getElementById('password').value;
            //const acceptTerms=document.getElementById('acceptTerms').value;

            const userAge = calculateAge(new Date(dob));

            if (userAge < 18 || userAge > 55) {
            alert('Age must be between 18 and 55.');
            return; // Prevent form submission
            }

            const user = { name, email, dob, password/*,acceptTerms */};

            // Store data in local storage
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            // Add user data to table
            const newRow = userTable.insertRow();
            newRow.innerHTML = `
                <td class="border p-2 justify-center">${user.name}</td>
                <td class="border p-2 justify-center">${user.email}</td>
                <td class="border p-2 justify-center">${user.password}</td>
                <td class="border p-2 justify-center">${user.dob}</td>
                <td class="border p-2 justify-center">true</td>
            `;

            form.reset();
        });
function calculateAge(birthday) {
    const ageDiffMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDiffMs); // milliseconds from epoch
    return Math.floor(ageDate.getUTCFullYear() - 1970);
}
