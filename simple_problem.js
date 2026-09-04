function checkwordsStrength(words) {
    const length = words.length;
    let uppercase = 0;
    let lowercase = 0;
    let digit = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] >= 'A' && 'Z' >= words[i]) {
            uppercase++;
        }
        if (words[i] >= 'a' && 'z' >= words[i]) {
            lowercase++;
        }
        if (words[i] >= '0' && words[i] <= '9') {
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
    for (let i = max.length - 1; i >= 0; i--) {
        reverse += max[i];
    }
    return reverse;
}

function convertToCamelCase(sentence) {
    const words = sentence.trim().split(/\s+/);
    let result = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return result;
}

function countEvenOdd(numbers) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    return { even, odd };
}

function findFirstUniqueChar(s) {
    for (let i = 0; i < s.length; i++) {
        let check = s[i];
        let count = 0;
        for (let j = 0; j < s.length; j++) {
            if (check === s[j]) {
                count++;
            }
        }
        if (count === 1) {
            return check;
        }
    }
    return -1;
}

function findLongestWord(sentence) {
    let current = '';
    let max = '';

    for (const char of sentence) {
        const isLetter =
            (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');

        const isDigit = char >= '0' && char <= '9';

        if (isLetter || isDigit) {
            current += char;
        } else {
            if (current.length > max.length) {
                max = current;
            }
            current = '';
        }
    }

    if (current.length > max.length) {
        max = current;
    }
    return max;
}

function findSecondLargestUnique(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < numbers.length; i++){
        if (largest < numbers[i]) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
            secondLargest = numbers[i];
        }
    }
    if (secondLargest === -Infinity) {
        return null;
    }
    return secondLargest;
}
console.log(findSecondLargestUnique([10, 5, 20, 5, 15]));