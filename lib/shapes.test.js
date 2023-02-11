const Shapes = require("./shapes.js");
const Triangle = require("./shapes.js");
const Square = require("./shapes.js");
const Circle = require("./shapes.js");

describe("Shapes", () => {
    test("should return the value when render called", () => {
        const shape = new Shapes();
        shape.setColor("blue");
        expect(shape.render()).toEqual('< />');
    });
});

describe("Triangle", () => {
    const shape = new Triangle("green","white","");
    test("instantiate", () => {
        expect(shape).toBeInstanceOf(Shapes);
    });
    test("should return the value when render called", () => {
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe("Circle", () => {
    const shape = new Circle();
    test("instantiate", () => {
        expect(shape).toBeInstanceOf(Shapes);
    });
    test("should return the value when render called", () => {
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
});