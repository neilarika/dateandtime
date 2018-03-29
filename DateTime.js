// JavaScript source code
//DateTime.js

function start() {
    var current = new Date();

    //string
    document.getElementById("strings").innerHTML =
        '<p>toString: ' + current.toDateString + '</p>' +
        '<p>toLocaleString: ' + current.toUTCString + '</p>' +
        '<p>valueOf: ' + current.valueOf + '</p>';


    //get methods
    document.getElementById("getMethods").innerHTML =
        '<p>getDate: ' + current.getDate() + '</p>' +
        '<p>getDay: ' + current.getDay() + '</p>' +
        '<p>getMonth: ' + current.getMonth() + '</p>' +
        '<p>getFullYear: ' + current.getFullYear() + '</p>' +
        '<p>getTime: ' + current.getTime() + '</p>' +
        '<p>getHours: ' + current.getHours() + '</p>' +
        '<p>getMinutes: ' + current.getMinutes() + '</p>' +
        '<p>getSeconds: ' + current.getSeconds() + '</p>' +
        '<p>getMilliseconds: ' + current.getMilliseconds() + '</p>' +
        '<p>getTimeconeOffset: ' + current.getTimezoneOffset() + '</p>';


    //create a new date
    var anotherDate = new Date(2000, 2, 18, 1, 5, 0, 0);
    document.getElementById("newArguments").innerHTML =
        '<p>Modified date: ' + anotherDate + '</p>';

    //set methods
    anotherDate.setDate(31);
    anotherDate.setHours(23);
    document.getElementById("setMethods").innerHTML =
        '<p>Modified date: ' + anotherDate + '</p>';




}


window.addEventListener("load", start, false);