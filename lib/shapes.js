class Shapes {
    constructor(shapeColor,textColor,text,
        svgHeader = 
        [`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" style="border:1px solid">`,
        `<`,
        `circle cx="150" cy="100" r="80" fill="`,//2
        `green`,//3
        `"/>`,
        `<text x="150" y="125" font-size="60" text-anchor="middle" fill="`,//5
        `white`,//6
        `">`,
        `SVG`,//8
        `</text>`,
        `</svg>`]) 
    {
        
        this.svgHeader = svgHeader;
    }
    SVG() { // returns one string for SVG HTML
        return this.svgHeader.join(""); 
    }
    setColor(shapeColor,textColor,text) { // sets the text and shape colors
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
        this.svgHeader[3] = this.shapeColor;
        this.svgHeader[6] = this.textColor;
        this.svgHeader[8] = this.text;
    }

};

module.exports = Shapes;