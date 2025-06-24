// Import EventEmitter class
const EventEmitter = require ("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// 1. Define an event listener (addlistener)
// emitter.on("greet", () => {
//     console.log("Hello Krushit Kaneriya");
// });

// // 2. Trigger (emit) the "greet" event
// emitter.emit("greet");

//* You can also pass arguments while emitting.

// emitter.on("greet", (username,profession) => {
//     console.log(`${username} is a ${profession}`);
// });

// emitter.emit("greet","Krushit Kaneriya","Web Developer");


//! but it's best idea to take single argument as a object.

emitter.on("greet", (arg) => {
    console.log(`${arg.username} is a ${arg.profession}`); // ${username} is a ${profession}`);
});

emitter.emit("greet",{username: "Krushit Kaneriya",profession: "Web Developer"});

