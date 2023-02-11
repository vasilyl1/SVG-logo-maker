const Shapes = require("./shapes.js");

class Circle extends Shapes {
    constructor(shapeColor, textColor, text, svgHeader) {
        super(shapeColor, textColor, text, svgHeader);
    }
    render() {
        this.svgHeader[2] = `circle cx="150" cy="100" r="80" fill="`;
        this.svgHeader[5] = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="`;
    }

};

module.exports = Circle;