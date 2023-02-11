const Shapes = require("./shapes.js");
const Triangle = require("./triangle.js");
const Square = require("./square.js");
const Circle = require("./circle.js");

describe("Shapes", () => {
    test("checks for Shapes to initialize shapeColor", () => {
        const shape = new Shapes();
        shape.setColor("blue", "white");
        expect(shape.svgHeader[3]).toEqual('blue');
    });
});

describe("Triangle", () => {
    const shape = new Triangle();
    test("instantiate Triangle from Shapes", () => {
        expect(shape).toBeInstanceOf(Shapes);
    });
    test("should return the value when render called", () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="140" font-size="40" text-anchor="middle" fill="white">SVG</text></svg>`;
        shape.setColor("blue", "white");
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
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`;
        shape.setColor("green", "white");
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
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="56, 18 244, 18 244, 182 56, 182" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`;
        shape.setColor("blue", "white");
        shape.render();
        expect(shape.SVG()).toEqual(xml);
    });
});