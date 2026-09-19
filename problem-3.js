function isAnagram(s1, s2) {
    const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

    const a = clean(s1);
    const b = clean(s2);

    if (a.length !== b.length) return false;

    return a.split('').sort().join('') === b.split('').sort().join('');
}

function compressCharacters(str) {
    if (!str.length) return '';

    let result = '';
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + (count > 1 ? count : '');
            count = 1;
        }
    }

    return result;
}

function titleCaseSentence(str) {
    return str
        .trim()
        .split(/\s+/)
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(' ');
}

function countWordFrequencies(sentence) {
    const words = sentence.toLowerCase().match(/[a-z0-9]+/g) || [];

    const freq = {};
    for (const word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }

    return freq;
}

function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }

    if (maxLength <= 3) {
        return '...';
    }

    return str.slice(0, maxLength - 3) + '...';
}
