const Shapes = require("./shapes.js");

class Square extends Shapes {
    constructor(shapeColor, textColor, svgHeader) {
        super(shapeColor, textColor, svgHeader);
    }
    render() {
        this.svgHeader[2] = `polygon points="56, 18 244, 18 244, 182 56, 182" fill="`;
        this.svgHeader[5] = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="`;
    }

}

module.exports = Square;