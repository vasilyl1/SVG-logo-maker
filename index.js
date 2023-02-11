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

const arg1 = process.argv[1]; // gets app path here
const arg2 = process.argv[2]; // expect to get filename here
const arg3 = process.argv[3]; // expect to get -D param here
init(arg1,arg2,arg3);
