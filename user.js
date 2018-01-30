'use strict';


function up() {
    console.log('up is running');

    return new Promise((res, rej) => {
        res();
    })
}


function down() {
    console.log('down running');
}

// es6 syntax  { up, down } =  { up : up , down: down }
module.exports = { up, down }
