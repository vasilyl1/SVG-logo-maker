const fs = require('fs'); // filesystem init
const inq = require('inquirer'); // inquirer init
const Shapes = require("./lib/shapes.js");
const { userInterview, userInterviewQR } = require("./lib/ui.js");

function init(arg1, arg2, arg3, arg4) { // arg1 path arg2 filename arg3 -D switch
    const data = new Shapes; // initialise parent object with the data
    console.log(
        `         ***************************************************\n
         * SVG logo and QR code generator utility v 2.0   *\n
         *            by vasilyl1                         *\n
         **************************************************\n`
    );

    fs.readFile(arg2, (error) => { // attempt to read the file to check if it exists
        //console.log(error, arg3, arg4);
        if (((error && (arg3 === "")) || (arg3 === "-D")) && (arg4 === 'SVG')) { // if error or -D param - proceed to write/rewrite
            userInterview(arg2, arg1, data); //arg2 - filename, arg1 - path, data - parent object
        } else if (((error && (arg3 === "")) || (arg3 === "-D")) && (arg4 === 'QR')) { 
            userInterviewQR(arg2, arg1); //arg2 - filename, arg1 - path, data - parent object
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
let arg2 = process.argv[2]; // expect to get filename here
let arg3 = process.argv[3]; // expect to get -D param here
let arg4 = process.argv[4]; // expect to get -Q param for QR code generation here
console.log(arg1, arg2, arg3, arg4);
if ((arg2 === undefined) || (arg2 === "-Q") || (arg2 === "-D"))

    console.log(
        `         * ************************************************* *\n
         * Output file name is missing.                     *\n
         * SYNTAX: node index.js <path\\filename> <-D> <-Q> *\n
         * use <-D> switch to overwrite existing file       *\n
         * * use <-Q> switch to generate QR code            *\n
         * ************************************************ *`
    );

else if ((arg3 === "-D") && ((arg4 === undefined)||(arg4 !== '-Q'))) init(arg1, arg2, '-D', 'SVG');
else if ((arg3 === "-D") && (arg4 === "-Q")) init(arg1, arg2, '-D', 'QR');
else if ((arg3 === "-Q") && (arg4 === undefined)) init(arg1, arg2, '', 'QR');
else if (arg3 === undefined) init(arg1, arg2, '', 'SVG');
else if ((arg3 === "-Q") && (arg4 === "-D")) init(arg1, arg2, '-D', 'QR');
else console.log('Error: wrong syntax. Please try again. \n SYNTAX: node index.js <path\\filename> <-D> <-Q>');
