function checkPasswordStrength(password) {
    const length = password.length;
    let uppercase = 0;
    let lowercase = 0;
    let digit = 0;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && 'Z' >= password[i]) {
            uppercase++;
        }
        if (password[i] >= 'a' && 'z' >= password[i]) {
            lowercase++;
        }
        if (password[i] >= '0' && password[i] <= '9') {
            digit++;
        }
    }
    if (length >= 8 && uppercase >= 1 && lowercase >= 1 && digit >= 1) {
        return 'Strong';
    } else {
        return 'Weak';
    }
}

