class Shapes {
    constructor(color) {
        this.color = ""
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
    setColor(color) {
        this.color = color;
    }

};

class Triangle extends Shapes {
    constructor(color) {
        super(color);
    }

}

module.exports = Triangle;
module.exports = Shapes;