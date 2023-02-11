const fs = require('fs'); // filesystem init
const inq = require('inquirer'); // inquirer init

function init(arg1, arg2, arg3) { // arg1 path arg2 filename arg3 -D switch
    
    console.log(
        `**************************************\n
         * SVG logo generator utility v 1.0   *\n
         *            by vasilyl1             *\n
         **************************************\n`
        );

    fs.readFile(arg2, (error) => { // attempt to read the file to check if it exists
        if (error || (arg3 === "-D")) { // if error or -D param - proceed to write/rewrite
            userInterview(arg2);
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

function userInterview(fileName) { // interview the user and generate the file content
    let correctInput = false;
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
                    console.log(
                        `The logo can use:\n
                           - no more than 3 symbols,\n
                           - at least 1 symbol\n
                            Please try again!`
                        );
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

const arg1 = process.argv[1]; // gets app path here
const arg2 = process.argv[2]; // expect to get filename here
const arg3 = process.argv[3]; // expect to get -D param here
init(arg1,arg2,arg3);
