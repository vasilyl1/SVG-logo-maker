const Shapes = require("./shapes.js");

class Square extends Shapes {
    constructor(shapeColor, textColor, text, svgHeader) {
        super(shapeColor, textColor, text, svgHeader);
    }
    render() {
        this.svgHeader[2] = `rect x="56" y="6" width="188" height="188" fill="`;
        this.svgHeader[5] = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="`;
    }

}

module.exports = Square;