const Shapes = require("./shapes.js");

class Triangle extends Shapes {
    constructor(shapeColor, textColor, text, svgHeader) {
        super(shapeColor, textColor, text, svgHeader);
    }
    render() {
        this.svgHeader[2] = `polygon points="150, 18 244, 182 56, 182" fill="`;
        this.svgHeader[5] = `<text x="150" y="140" font-size="40" text-anchor="middle" fill="`;
    }
};

module.exports = Triangle;