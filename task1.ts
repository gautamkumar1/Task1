interface User {
    id: number; // Unique user ID
    logged_in: Date; // Timestamp when user logged in
    logged_out: Date; // Timestamp when user logged out
    lastSeenAt: Date; // Timestamp for last interaction with the device
}

// Example user data (you can replace this with your actual data)
const users: User[] = [
    {
        id: 1,
        logged_in: new Date('2023-01-01T10:00:00Z'),
        logged_out: new Date('2023-01-01T18:00:00Z'),
        lastSeenAt: new Date('2023-01-01T17:30:00Z'),
    },
    // Add more user objects here...
];

// Calculate the total duration a user was logged in
function calculateLoggedInDuration(user: User): number {
    const loggedInTime = user.logged_out.getTime() - user.logged_in.getTime();
    return loggedInTime;
}

// Find the user with the longest logged-in duration
function findUserWithLongestSession(users: User[]): User | undefined {
    let longestSessionUser: User | undefined;
    let maxDuration = 0;

    for (const user of users) {
        const loggedInDuration = calculateLoggedInDuration(user);
        if (loggedInDuration > maxDuration) {
            maxDuration = loggedInDuration;
            longestSessionUser = user;
        }
    }

    return longestSessionUser;
}

// Example usage
const longestSessionUser = findUserWithLongestSession(users);
if (longestSessionUser) {
    console.log(`User ${longestSessionUser.id} had the longest session.`);
    console.log(`Logged in from ${longestSessionUser.logged_in} to ${longestSessionUser.logged_out}.`);
} else {
    console.log('No users found.');
}
