// JavaScript source code
//display a message based obn the time od the day


function start() {
    var current = new Date();
    //get the hour
    var hour = current.getHours();
    //Display goodmorning

    /*
    if (hour > 5) {
        document.getElementById('if/else').innerHTML = 'Good Evening';
        //msg = 'Good Evening';
    }
    else if (hour > 12 && hour < 6) {
        document.getElementById('if/else').innerHTML = 'Good afternoon';
        //msg = 'Good afternoon';
    }
    else
        document.getElementById('if/else').innerHTML = 'Good Morning';
        //msg = 'Good morning';
     

    switch (hour) {
        case 12:
            document.getElementById('if/else').innerHTML = 'Its noon';
            break;
        case 0:
            document.getElementById('if/else').innerHTML = 'Its Midnight';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            document.getElementById('if/else').innerHTML = 'Its Early morning';
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            document.getElementById('if/else').innerHTML = 'Its Morning';
            break;
        
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            document.getElementById('if/else').innerHTML = 'Its afternoon';
            break;
        default:
            document.getElementById('if/else').innerHTML = 'Its night';


    }
        */

    if (hour === 0)
        document.getElementById('if/else').innerHTML = 'Its Midnight';
    else if (hour === 12)
        document.getElementById('if/else').innerHTML = 'Its noon';
    else if (hour >= 1 && hour <= 5)
        document.getElementById('if/else').innerHTML = 'Its early morning';
    else if (hour >= 6 && hour <= 11)
        document.getElementById('if/else').innerHTML = 'Its Morning';
    else if (hour >= 13 && hour <= 17)
        document.getElementById('if/else').innerHTML = 'It afternoon';
    else
        document.getElementById('if/else').innerHTML = 'Its night';

    if (10 / 2 == -5)
        document.write("true");
    else
        document.write("false")
    
}

window.addEventListener("load", start, false);


//iffe
//function() {
    //
    //
//}   