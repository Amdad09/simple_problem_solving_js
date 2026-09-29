function missingNumber(nums) {
    let total = 0;
    for (let i = 0; i <= nums.length; i++) {
        total += i;
    }
    // const total = (n * (n + 1)) / 2;

    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    return total - sum;
}

function formatAttendanceReport(students) {
    return students.map((student) => {
        const cal = Math.round((student.present / student.total) * 100);
        let marks = '';
        if (cal >= 90) {
            marks = 'Excellent';
        } else if (cal >= 75) {
            marks = 'Good';
        } else {
            marks = 'At Risk';
        }

        return `${student.name}: ${student.present}/${student.total} (${cal}%) - ${marks}`;
    });
}

function generateProfileCard(user) {
    return `${user?.name ?? 'Anonymous'} | ${user?.address?.city ?? 'Unknown'} | followers: ${user?.social?.followers ?? 0}`;
}

function getPageMetadata(totalItems, pageSize, currentPage) {
    const totalPages = Math.ceil(totalItems / pageSize);
    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);
    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPages;

    return { totalPages, startItem, endItem, hasPrev, hasNext };
}
console.log(getPageMetadata(30, 10, 1));
// Input: totalItems = 95, pageSize = 10, currentPage = 10
// Output: { totalPages: 10, startItem: 91, endItem: 95, hasPrev: true, hasNext: false }