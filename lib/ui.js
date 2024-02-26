const fs = require('fs'); // filesystem init
const inq = require('inquirer'); // inquirer init
const Triangle = require("./triangle.js");
const Square = require("./square.js");
const Circle = require("./circle.js");
const colorString = require("color-string");
const qr = require('qrcode');

function userInterview(fileName, path, data) { // interview the user and generate the file content
    inq.prompt([
        {
            type: 'input',
            message: "Please enter logo text, up to 3 symbols:",
            name: "logoText",
            validate(value) {
                if ((value.length > 3) || (value === "")) {
                    return `The logo can use:
                    - no more than 3 symbols,
                    - at least 1 symbol
                     Please try again!`
                } else return true;
            }
        },
        {
            type: 'input',
            message: "Text color:",
            name: "textColor",
        },
        {
            type: 'list',
            message: "Please select one of the following shape forms currently available for the logo:",
            choices: ["Circle", "Triangle", "Square"],
            name: "shapeForm",
        },
        {
            type: 'input',
            message: "Background color for the logo shape:",
            name: "shapeColor",
        }
    ])
        .then((response) => {
            let shape = {};
            switch (response.shapeForm) {
                case "Circle":
                    const shapeCircle = new Circle;
                    shape = shapeCircle;
                    break;
                case "Triangle":
                    const shapeTriangle = new Triangle;
                    shape = shapeTriangle;
                    break;
                case "Square":
                    const shapeSquare = new Square;
                    shape = shapeSquare;

            }
            shape.setColor(
                colorString.to.rgb(colorString.get.rgb(response.shapeColor)),
                colorString.to.rgb(colorString.get.rgb(response.textColor)),
                response.logoText); // write colors info into the SVG string, in Shapes
            shape.render();
            fs.writeFile(fileName, shape.SVG(), error => //write to the file
                error ? console.error(error) :
                    console.log(`Success: created file: ${fileName} \n at ${path.substring(0, path.lastIndexOf("/") + 1)}`)
            );
        });

};

function userInterviewQR(fileName, path) { // interview the user and generate the file content
    inq.prompt([
        {
            type: 'input',
            message: "Please enter URL to be encoded into QR code:",
            name: "url",
        }
    ])
        .then((res) => {
            qr.toFile(fileName, res.url, error => //write to the file
                error ? console.error(error) :
                    console.log(`Success: created file: ${fileName} \n at ${path.substring(0, path.lastIndexOf("/") + 1)}`)
            );
        });

};

module.exports = { userInterview, userInterviewQR };