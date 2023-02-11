class Shapes {
    constructor(shapeColor,textColor, 
        svgHeader = 
        [`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">`,
        `<`,//1
        `circle cx="150" cy="100" r="80" fill="`,//2
        `green`,//3
        `" />`,//4
        `<text x="150" y="125" font-size="60" text-anchor="middle" `,//5
        `fill="`,//6
        `white`,//7
        `">SVG</text>`,//8
        `</svg>`]) 
    {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.svgHeader = svgHeader;
    }
    SVG() { // returns one string for SVG HTML
        return this.svgHeader.toString(); 
    }
    setColor(textColor, shapeColor) { // sets the text and shape colors
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }

};

class Triangle extends Shapes {
    constructor(shapeColor, textColor, svgHeader) {
        super(shapeColor, textColor, svgHeader);
        
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
};

class Circle extends Shapes {
    constructor(shapeColor, textColor, svgHeader) {
        super(shapeColor, textColor, svgHeader);
    }
    render() {
        
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }

};

class Square extends Shapes {
    constructor(shapeColor, textColor, svgHeader) {
        super(shapeColor, textColor, svgHeader);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }

}
//module.exports = Circle;
//module.exports = Triangle;
//module.exports = Shapes;
//module.exports = Square;
module.exports = {Circle,Triangle,Shapes,Square};