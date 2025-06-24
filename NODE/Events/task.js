// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// let eventCounts = {
//     "Login": 0,
//     "Logout": 0,
//     "Purchase": 0,
//     "Profile Update": 0
// }

// username = "Krushit Kaneriya";

// emitter.on("Login", (username) => {
//     eventCounts["Login"]++;
//     console.log(`${username} has logged in`);
// });


// emitter.on("Logout", (username) => {
//     eventCounts["Logout"]++;
//     console.log(`${username} has logged out`);
// });


// emitter.on("Purchase", (arg) => {
//     eventCounts["Purchase"]++;
//     console.log(`${arg.username} purchased ${arg.item}`);
// });


// emitter.on("Profile Update", (args) => {
//     eventCounts["Profile Update"]++;
//     console.log(`${args.username} updated their ${args.changed} in their profile`);
// });


// emitter.on("summary", () => {
//     console.log(eventCounts);
// });

// emitter.emit("Login",username);
// emitter.emit("Purchase",{username, item: "Laptop"});
// emitter.emit("Profile Update",{username,changed: "email"});
// emitter.emit("Logout",username);

// emitter.emit("summary");



const EventEmitter = require("events");
const fs = require('fs');
const path = require('path');
const counterFile = path.join(__dirname, 'eventCounts.json');

let eventCounts = {
    "Login": 0,
    "Logout": 0,
    "Purchase": 0,
    "Profile Update": 0
};

if (fs.existsSync(counterFile)) {
    const data = fs.readFileSync(counterFile, 'utf-8');
    eventCounts = JSON.parse(data);
}

const emitter = new EventEmitter();

const username = "Krushit Kaneriya";

function saveCounts() {
    fs.writeFileSync(counterFile, JSON.stringify(eventCounts, null, 2));
}

emitter.on("Login", (username) => {
    eventCounts["Login"]++;
    console.log(`${username} has logged in`);
    saveCounts();
});

emitter.on("Logout", (username) => {
    eventCounts["Logout"]++;
    console.log(`${username} has logged out`);
    saveCounts();
});

emitter.on("Purchase", ({ username, item }) => {
    eventCounts["Purchase"]++;
    console.log(`${username} purchased ${item}`);
    saveCounts();
});

emitter.on("Profile Update", ({ username, changed }) => {
    eventCounts["Profile Update"]++;
    console.log(`${username} updated their ${changed} in their profile`);
    saveCounts();
});

emitter.on("summary", () => {
    console.log(eventCounts);
    saveCounts();
});

// Emit events
emitter.emit("Login", username);
// emitter.emit("Purchase", { username, item: "Laptop" });
// emitter.emit("Profile Update", { username, changed: "email" });
emitter.emit("Logout", username);

// Print summary
emitter.emit("summary");
