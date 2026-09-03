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

function convertCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && 'Z' >= str[i]) {
            result += str[i].toLowerCase();
        } else if (str[i] >= 'a' && 'z' >= str[i]) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

function sumEvenDigits(num) {
    const value = num.toString();
    let result = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i] % 2 === 0) {
            result += Number(value[i]);
        }
    }
    return result;
}

function findHighScoringStudents(marks) {
    const result = [];
    for (const key of Object.keys(marks)) {
        if (marks[key] >= 60) {
            result.push(key);
        }
    }
    return result;
}

function reverseLongestWord(sentence) {
    const strs = sentence.split(' ');
    let max = strs[0];
    for (let i = 0; i < strs.length; i++) {
        if (max.length < strs[i].length) {
            max = strs[i];
        }
    }
    let reverse = '';
    for (let i = max.length-1; i >= 0; i--) {
        reverse += max[i];
    }
    return reverse;
}