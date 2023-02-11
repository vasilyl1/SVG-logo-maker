const Shapes = require("./shapes.js");
const Triangle = require("./triangle.js");
const Square = require("./square.js");
const Circle = require("./circle.js");

describe("Shapes", () => {
    test("checks for Shapes to initialize shapeColor", () => {
        const shape = new Shapes();
        shape.setColor("blue", "white");
        expect(shape.textColor).toEqual('white');
    });
});

describe("Triangle", () => {
    const shape = new Triangle();
    test("instantiate Triangle from Shapes", () => {
        expect(shape).toBeInstanceOf(Shapes);
    });
    test("should return the value when render called", () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" style="border:1px solid"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="140" font-size="40" text-anchor="middle" fill="white">AWE</text></svg>`;
        shape.setColor("blue", "white", "AWE");
        shape.render();
        expect(shape.SVG()).toEqual(xml);
    });
});

describe("Circle", () => {
    const shape = new Circle();
    test("instantiate Circle from Shapes", () => {
        expect(shape).toBeInstanceOf(Shapes);
    });
    test("should return the value when render called", () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" style="border:1px solid"><circle cx="150" cy="100" r="80" fill="purple"/><text x="150" y="120" font-size="50" text-anchor="middle" fill="yellow">UFF</text></svg>`;
        shape.setColor("purple", "yellow", "UFF");
        shape.render();
        expect(shape.SVG()).toEqual(xml);
    });
});

describe("Square", () => {
    const shape = new Square();
    test("instantiate Square from Shapes", () => {
        expect(shape).toBeInstanceOf(Shapes);
    });
    test("should return the value when render called", () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" style="border:1px solid"><rect x="56" y="6" width="188" height="188" fill="orange"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="black">WOW</text></svg>`;
        shape.setColor("orange", "black", "WOW");
        shape.render();
        expect(shape.SVG()).toEqual(xml);
    });
});