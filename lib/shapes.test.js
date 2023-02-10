const Triangle = require("./shapes.js");

describe("Triangle", () => {
    test("should return the value when render called", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});