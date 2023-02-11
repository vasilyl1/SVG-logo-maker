class Shapes {
    constructor(shapeColor,textColor, 
        svgHeader = 
        [`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">`,
        `<`,
        `circle cx="150" cy="100" r="80" fill="`,//2
        `green`,//3
        `" />`,
        `<text x="150" y="125" font-size="60" text-anchor="middle" fill="`,//5
        `white`,//6
        `">SVG</text>`,
        `</svg>`]) 
    {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.svgHeader = svgHeader;
    }
    SVG() { // returns one string for SVG HTML
        return this.svgHeader.join(""); 
    }
    setColor(shapeColor, textColor) { // sets the text and shape colors
        this.svgHeader[3] = shapeColor;
        this.svgHeader[6] = textColor;
    }

};

module.exports = Shapes;