function checkPasswordStrength(password) {
    var passwordStrengthBar = document.getElementById("password-strength-bar");
    var strength = 0;

    // Check password strength
    var uppercase = /[A-Z]/.test(password);
    var lowercase = /[a-z]/.test(password);
    var number = /[0-9]/.test(password);
    var specialChars = /[^\w]/.test(password);
    var length = password.length;

    // Calculate password strength score
    strength += uppercase ? 1 : 0;
    strength += lowercase ? 1 : 0;
    strength += number ? 1 : 0;
    strength += specialChars ? 1 : 0;
    strength += Math.min(length / 8, 1);

    // Set password strength bar color and width
    if (strength < 2) {
        passwordStrengthBar.style.backgroundColor = "#FF4136"; // red
        passwordStrengthBar.style.width = "20%";
    } else if (strength < 3) {
        passwordStrengthBar.style.backgroundColor = "#FF851B"; // orange
        passwordStrengthBar.style.width = "40%";
    } else if (strength < 4) {
        passwordStrengthBar.style.backgroundColor = "#FFDC00"; // yellow
        passwordStrengthBar.style.width = "60%";
    } else if (strength < 5) {
        passwordStrengthBar.style.backgroundColor = "#2ECC40"; // green
        passwordStrengthBar.style.width = "80%";
    } else {
        passwordStrengthBar.style.backgroundColor = "#0074D9"; // blue
        passwordStrengthBar.style.width = "100%";
    }
}