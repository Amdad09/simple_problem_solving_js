// Problem 1 — Student Introduction Generator
const studentIntroduction = (student) => {
    if (
        Array.isArray(student) ||
        typeof student !== 'object' ||
        student === null
    )
        return 'Invalid';

    const objectKeys = ['name', 'age', 'course'];
    const checkObjectKeys = objectKeys.every((key) =>
        Object.hasOwn(student, key),
    );
    if (!checkObjectKeys) return 'Invalid';

    const { name, age, course } = student;
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
};

//Problem 2 — Active User Filter
const filterActiveUsers = (users) => {
    if (!Array.isArray(users) || users.length === 0) return 'Invalid';
    const isActiveCheck = users.every((user) =>
        Object.hasOwn(user, 'isActive'),
    );
    if (!isActiveCheck) return 'Invalid';
    return users.filter((user) => user.isActive);
};

//Problem 3 —Trending Hashtag Counter
const countHashtags = (caption) => {
    if (typeof caption !== 'string') return 'Invalid';
    if (!caption.includes('#')) return { hashtagCount: 0, longestTag: '' };
    const words = caption.split(' ');
    const count = words.filter((word) => word.startsWith('#'));
    let max = 0;
    let value = '';
    for (let i = 0; i < count.length; i++) {
        console.log(count[i].length);
        if (count[i].length > max) {
            max = count[i].length;
            value = count[i];
        }
    }
    const hashtagCount = count.length;
    const longestTag = value.slice(1, value.length);
    return { hashtagCount, longestTag };
};
// console.log(countHashtags('12'));

//Problem 4 — Bonus Score Calculator
const bonusScore = (scores) => {
    if (!Array.isArray(scores) || scores.length === 0) return 'Invalid';
    // if (scores.some(score => !Number.isFinite(score))) return 'Invalid';
    const check = scores.every((score) => Number.isFinite(score));
    if (!check) return 'Invalid';

    return scores
        .map((score) => {
            // if (!Number.isFinite(score)) return 'Invalid';
            return score + 10;
        })
        .reduce((accu, score) => {
            return accu + score;
        }, 0);
};
// console.log(bonusScore([0, 10]));

//Problem 5 — Debugging Challenge: AI Leaderboard Generator
function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return 'Invalid';
    }

    const check = students.every(
        (student) =>
            Object.hasOwn(student, 'score') && Number.isFinite(student.score),
    );
    if (!check) return 'Invalid';

    const qualified = students.filter((student) => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}
// console.log(generateLeaderboard([{ name: 'Rafi', score: '87' }]));
