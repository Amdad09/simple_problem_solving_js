//Problem 1 — Student Introduction Generator
const studentIntroduction = (student) => {
    if (
        Array.isArray(student) ||
        typeof student !== 'object' ||
        student === null
    )
        return 'Invalid';

    const objectKeys = ['name', 'age', 'course'];
    const check = objectKeys.every((key) => Object.hasOwn(student, key));
    if (!check) return 'Invalid';

    const { name, age, course } = student;
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
};

//Problem 2 — Active User Filter
const filterActiveUsers = (users) => {
    if (!Array.isArray(users) || users.length === 0) return 'Invalid';

    const validObject = users.every(
        (user) =>
            user !== null &&
            typeof user === 'object' &&
            !Array.isArray(user) &&
            Object.hasOwn(user, 'isActive'),
    );

    if (!validObject) return 'Invalid';

    return users.filter((user) => user.isActive);
};

//Problem 3 —Trending Hashtag Counter
const countHashtags = (caption) => {
    if (typeof caption !== 'string') return 'Invalid';

    const words = caption.split(' ');
    const hashtags = words.filter((word) => word.startsWith('#'));
    const hashtagCount = hashtags.length;

    let max = 0;
    let tag = '';
    for (let i = 0; i < hashtags.length; i++) {
        if (hashtags[i].length > max) {
            max = hashtags[i].length;
            tag = hashtags[i];
        }
    }
    const longestTag = tag.slice(1);
    return { hashtagCount, longestTag };
};

//Problem 4 — Bonus Score Calculator
const bonusScore = (scores) => {
    if (!Array.isArray(scores) || scores.length === 0) return 'Invalid';
    const isNumber = scores.every((score) => Number.isFinite(score));
    if (!isNumber) return 'Invalid';
    return scores
        .map((score) => score + 10)
        .reduce((total, score) => {
            return total + score;
        }, 0);
};

//Problem 5 — Debugging Challenge: AI Leaderboard Generator
const generateLeaderboard = (students) => {
    if (!Array.isArray(students) || students.length === 0) return 'Invalid';

    const isObject = students.every((student) => {
        return (
            typeof student === 'object' &&
            !Array.isArray(student) &&
            student !== null &&
            Object.hasOwn(student, 'name') &&
            Object.hasOwn(student, 'score') &&
            Number.isFinite(student.score)
        );
    });
    if (!isObject) return 'Invalid';

    return students
        .filter((student) => student.score >= 70)
        .map((student) => student.name.toUpperCase())
        .slice(0, 3);
};
