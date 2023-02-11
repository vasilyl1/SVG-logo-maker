const fs = require('fs'); // filesystem init
const inq = require('inquirer'); // inquirer init

function init(arg1, arg2, arg3) { // arg1 path arg2 filename arg3 -D switch
    const data = new Shapes; // initialise parent object with the data
    console.log(
        `**************************************\n
         * SVG logo generator utility v 1.0   *\n
         *            by vasilyl1             *\n
         **************************************\n`
        );

    fs.readFile(arg2, (error) => { // attempt to read the file to check if it exists
        if (error || (arg3 === "-D")) { // if error or -D param - proceed to write/rewrite
            userInterview(arg2,arg1,data); arg2 - filename, arg1 - path, data - parent object
        } else { // no error - the file exists
            console.log(
                `Error: ${arg2} exists at path: ${arg1.substring(0, arg1.lastIndexOf("/") + 1)}. \n
                 Use -D to overwrite:\n
                SYNTAX: node index.js <path\\filename> <-D>`);
            return;
        }
    }
    );



}

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
}

const arg1 = process.argv[1]; // gets app path here
const arg2 = process.argv[2]; // expect to get filename here
const arg3 = process.argv[3]; // expect to get -D param here
init(arg1,arg2,arg3);
