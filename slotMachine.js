$(document).ready(function(){

// Event
$("#spin").click(slotMachine);

// Function


var spin = [0, 0, 0];
var initialBalance = 50;

var result = {
    cherry: "111",
    orange: "222",
    grape: "333",
    mango: "444",
    diamond: "555"
}
$("#balance").text(initialBalance);

function slotMachine (){

    initialBalance -= 2;
    spin[0] = Math.floor(Math.random() * 2 ) + 1; 
    spin[1] = Math.floor(Math.random() * 2 ) + 1; 
    spin[2] = Math.floor(Math.random() * 2 ) + 1;
    
    $("#slotOne").text(spin[0]);
    $("#slotTwo").text(spin[1]);
    $("#slotThree").text(spin[2]);
    $("#balance").text(initialBalance);

    var joinarray = spin.join("");

    console.log(joinarray);

    if (result.cherry === joinarray)
    {
        initialBalance += 2;
        $("#balance").text(initialBalance);
        $("#message").text("Cherry won");  
    }
    else if (result.orange === joinarray)
    {
        initialBalance += 4;
        $("#balance").text(initialBalance);
        $("#message").text("Orange won");
    }
    else if (result.grape === joinarray)
    {
        initialBalance += 6;
        $("#balance").text(initialBalance);
        $("#message").text("Grape won");
    }
    else if (result.mango === joinarray)
    {
        initialBalance += 8;
        $("#balance").text(initialBalance);
        $("#message").text("Mango won");
    }
    else if (result.diamond === joinarray)
    {
        initialBalance += 10;
        $("#balance").text(initialBalance);
        $("#message").text("Diamond won");
    }
    else
    {
        $("#message").text("You Lost");
    }


    
} 

});
