$(document).ready(function () {
    
    let submit: any = {
        email: true,
        firstName: false,
        lastName: false
    };
    console.log('ready!');
    $('#emailMandatory').hide();
    $('#otherMediaChannel').hide();
    checkFinished();

    /*   The message *First name is mandatory* should only be visible if the corresponding input field is empty.
   
       1. The message *Last name is mandatory* should only be visible if the corresponding input field is empty.
       
       1. The message *Email is mandatory if you want to receive our newsletter* should only be visible if the checkbox *Subscribe to newsletter* is set **and** the email input field is empty.
       
       
       1. The button *Submit* must be disabled as long as there is at least one validation error.*/
    $('#newsletter').change(function () {
        if ($('#newsletter').is(':checked')&& $('#email').val() == '' ){
            $('#emailMandatory').show();
            submit.email = false;
        } else {
            $('#emailMandatory').hide();
            submit.email = true;
            
        }
        checkFinished();
    })
    showOrHide('#firstName', '#firstNameMandatory', 'firstName');
    showOrHide('#lastName', '#lastNameMandatory', 'lastName');
    showOrHide('#email', '#emailMandatory','email' );


    function showOrHide(id: String, field: String, isSubmitted: String) {
        $(id).change(function () {
            console.log(`${id} changed`);
            if ($(id).val() == '') {
                $(field).show();
                submit[isSubmitted.toString()]=false;
            } else {
                $(field).hide();
                submit[isSubmitted.toString()]=true;
            }
            checkFinished();
        });
    }
    // The text area *Please describe where you have read about us...* should only be visible if *How did you hear from us?* has the value *Other*.
    $('#mediaChannelSelect').change(function () {
        if ($('#mediaChannelSelect').val() === 'Other') {
            console.log('Other selected');
            $('#otherMediaChannel').show();
        } else {
            $('#otherMediaChannel').hide();
        }
    });
    function checkFinished(){
        if (submit.email && submit.firstName && submit.lastName) {
            $('.btn-primary').prop('disabled', false);
            
        } else {
            submit.email && submit.fname && submit.lname
            $('.btn-primary').prop('disabled', true);
            console.log(submit.email+submit.lastName+submit.firstName)
        }
    }
});

