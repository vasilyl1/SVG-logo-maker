const fs = require('fs'); // filesystem init
const inq = require('inquirer'); // inquirer init

function userInterview(fileName,path,data) { // interview the user and generate the file content
    const input = true;
    while (input) {
        inq.prompt([
            {
                type: 'input',
                message: "Please enter logo text, up to 3 symbols:",
                name: "logoText",
            },
            {
                type: 'input',
                message: "Text color:",
                name: "textColor",
            }

        ])
            .then((response) => {
                if ((response.logoText.length > 2) || (response.logoText === "")) {
                    console.log(
                        `The logo can use:\n
                           - no more than 3 symbols,\n
                           - at least 1 symbol\n
                            Please try again!`
                        );
                    return;
                } else { // up to 3 symbols entered correctly
                    input = False;
                    data.text = response.logoText;
                    data.textColor = response.textColor;
                    // another prompt
                    inq.prompt([
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
                                switch (response.shapeForm) {
                                    case "Circle":
                                        const shape = new Circle;
                                        break;
                                    case "Triangle":
                                        const shape = new Triangle;
                                        break;
                                    case "Square":
                                        const shape = new Square;

                                }
                                shape.shapeColor = response.shapeColor; //set up shapecolor, textcolor is inherited from Shapes
                                shape.setColor(shape.shapeColor,shape.textColor); // write colors info into the SVG string, in Shapes
                                fs.writeFile(fileName, shape.SVG(), error => //write to the file
                                    error ? console.error(error) :
                                    console.log(`Success: created file: ${fileName} \n at ${path.substring(0,path.lastIndexOf("/")+1)}`)
                                );
                        });
                }
            });
    };
};

module.exports = userInterview;