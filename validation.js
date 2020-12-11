$(document).ready(function() {

    // Rules
    var myRules = {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        phoneNumber: {
            min: 10,
            digits: true
        },
        message: {
            required: true     
        }
    };

    // error messages
    var myMessages = {
        name: {
            required: "Fill this in!",
            min: "Enter a valid name"
        },
        email: {
            required: "Fill this in!",
            email: "Enter a valid E-mail"
        },
        phoneNumber: {
            min: "Enter a valid phone number",
            digits: "Enter a valid phone number"
        },
        message: {
            required: "Fill this in!"
        }
    };

    $("form").validate({
        submitHandler: contactUs,
        rules: myRules,
        messages: myMessages
    });

    // functions
    function contactUs()
    {
        var customerName = $("#name").val();
        var customerEmail = $("#email").val();
        var customerPhoneNumber = $("#email").val();
        var customerMessage = $("#message").val();

        $("p").text(`You fed ${customerName} bananas to ${customerEmail} koalas ${customerPhoneNumber} ${customerMessage}`);
    }


});