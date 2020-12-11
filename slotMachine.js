$(document).ready(function(){

// Event
$("#spin").click(slotMachine);

// Function


// Array
var spin = [0, 0, 0];
var initialBalance = 500;


// Object
var result = {
    cherry: "111",
    orange: "222",
    grape: "333",
    mango: "444",
    diamond: "555"
}

$("#balance").text(`$${initialBalance}`);

// Slot Machine function
function slotMachine (){

    // validate initial balance
    if (initialBalance > 0)
    {
        initialBalance -= 10;

        // generate random values
        spin[0] = Math.floor(Math.random() * 5 ) + 1; 
        spin[1] = Math.floor(Math.random() * 5 ) + 1; 
        spin[2] = Math.floor(Math.random() * 5 ) + 1;
        
        $("#slotOne").text(spin[0]);
        $("#slotTwo").text(spin[1]);
        $("#slotThree").text(spin[2]);
        $("#balance").text(`$${initialBalance}`);

        var joinarray = spin.join("");

        console.log(joinarray);

        // decisions are used
        if (result.cherry === joinarray)
        {
            initialBalance += 200;
            $("#balance").text(`$${initialBalance}`);
            $("#message").text("You won $200");  
        }
        else if (result.orange === joinarray)
        {
            initialBalance += 400;
            $("#balance").text(`$${initialBalance}`);
            $("#message").text("You won $400");
        }
        else if (result.grape === joinarray)
        {
            initialBalance += 600;
            $("#balance").text(`$${initialBalance}`);
            $("#message").text("You won $600");
        }
        else if (result.mango === joinarray)
        {
            initialBalance += 800;
            $("#balance").text(`$${initialBalance}`);
            $("#message").text("You won $800");
        }
        else if (result.diamond === joinarray)
        {
            initialBalance += 1000;
            $("#balance").text(`$${initialBalance}`);
            $("#message").text("You won $1,000");
        }
        else
        {
            $("#message").text("You Lost");
        }
    }
    else
    {
        $("#message").text("Add more credits!");

    }

    
} 

});
