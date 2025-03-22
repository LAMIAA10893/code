// app.js
var names = ["Alice", "Bob", "Charlie", "Jasmine", "John", "Mike", "Jessica"];

for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (name.charAt(0).toLowerCase() === 'j') {
        sayGoodbye(name); // Call the goodbye function
    } else {
        sayHello(name); // Call the hello function
    }
}