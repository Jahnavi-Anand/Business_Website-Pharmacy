function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username) {
        alert("Username cannot be empty.");
        return false;
    }

    if (!/^[a-zA-Z]/.test(username)) {
        alert("Username must start with an alphabet.");
        return false;
    }

    if (!password) {
        alert("Password cannot be empty.");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$&])/.test(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one of the following special characters: @, #, $, &.");
        return false;
    }

    return true;
}
