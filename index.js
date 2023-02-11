const fs = require('fs'); // filesystem init
const inq = require('inquirer'); // inquirer init

function writeToFile(fileName, data) {

    fs.readFile(fileName, function (error) { // attempt to read the file to check if it exists
        if (error || (process.argv[2] === "-D")) { // if error or -D param - proceed to write/rewrite
            userInterview(data, fileName);
        } else { // no error - the file exists
            console.log(`Error: ${fileName} exists at path: ${process.argv[1].substring(0, process.argv[1].lastIndexOf("/") + 1)}. \n Re-run with -D to overwrite.`);
            return;
        }
    }
    );



}

function userInterview(data, fileName) { // interview the user and generate the file content
    let correctInput = false;
    console.log("Welcome to the SVG logo generator utility!");
    while (correctInput) {
        inq.prompt([
            {
                type: 'input',
                message: "Please enter logo text, up to 3 symbols:",
                name: "logoText",
            }

        ])
            .then((response) => {
                if ((response.logoText.length > 2) || (response.logoText === "")) {
                    console.log("The logo can use no more than 3 symbols, please try again!");
                    return;
                } else { // up to 3 symbols entered correctly
                    correctInput = True;
                    let shape = "";
                    // another prompt
                    // case with shapes
                    fs.writeFile(fileName, util.generateMarkdown(response), error => //write to the file
                        error ? console.error(error) :
                            console.log(`Success: created file: ${fileName} \n at ${process.argv[1].substring(0, process.argv[1].lastIndexOf("/") + 1)}`)
                    );
                }
            });
    };
}
