$(document).ready(function() {

    
    // Rules
    var myRules = {
        name: {
            required: true
        },
        username: {
            required: true
        },
        password: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        phoneNumber: {
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
        username: {
            required: "Fill this in!",
            min: "Enter a valid username"
        },
        password: {
            required: "Fill this in!"
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

        $("#newAccount").text(`Thank you ${customerName} for creating an account with Final Slots`);
        $("#newMessage").text(`Thank you ${customerName} for creating an account with Final Slots`);
    }


});


