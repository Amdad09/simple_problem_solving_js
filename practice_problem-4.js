function reverseEachWord(str) {
    const result = str
        .split(' ')
        .map((s) => s.split('').reverse().join(''))
        .join(' ');
    console.log(result);
}

function convertTemperature(value, unit) {
    if (unit === 'C') {
        return Number(((value * 9) / 5 + 32).toFixed(2));
    } else {
        return Number((((value - 32) * 5) / 9).toFixed(2));
    }
}

function isPalindrome(str) {
    const words = str.toLowerCase();
    let result = '';
    for (let i = 0; i < words.length; i++) {
        if (
            (words[i] >= 'a' && 'z' >= words[i]) ||
            (words[i] >= '0' && '9' >= words[i])
        ) {
            result += words[i];
        }
    }
    const word = result.split('').reverse().join('');
    return word === result;
}

function classifyPassword(password) {
    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;
    let hasSpecial = false;

    for (const char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        } else if ('!@#$%^&*'.includes(char)) {
            hasSpecial = true;
        }
    }

    const types =
        Number(hasUppercase) +
        Number(hasLowercase) +
        Number(hasDigit) +
        Number(hasSpecial);

    if (password.length >= 8 && types === 4) {
        return 'Strong';
    }
    if (password.length >= 6 && types >= 2) {
        return 'Medium';
    }
    return 'Weak';
}

function repeatedDigitSum(n) {
    const s = String(n);
    if (s.length === 1) {
        return n;
    }
    
    let result = 0;
     for (const first of s) {
         result += Number(first);
     }
    return repeatedDigitSum(result);
}