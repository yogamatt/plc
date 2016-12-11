/* Name */

$(document).ready(function(){
    $('#showName').on('submit', function(e) {
        var inputs = $('#showName input').val();

        if (!inputs) {
            return false;
        } else {
            e.preventDefault();
            $.ajax({
                url : 'name-form.php',
                type: "GET",
                data: $(this).serialize(),
                success: function (data) {
                    $("#form_output").html(data);
                    new_options();
                },
                error: function (jXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });
        }
    });

    function new_options(){
        var col_to_hide = $('.formContainer #showName');
        var output = $('#form_output .option-section');

        if (!$.trim(output.html()) == '') {
            col_to_hide.hide();
            console.log('hizzle--nizzle-hide');
            if ($('.option-section')) {
                $('.option-section').addClass('show-options');
            }
        }
    }
});

/* End Name */

/* Options */

$(document).ready(function(){
    $('#plc_option_form').on('submit', function(e) {
        
            e.preventDefault();
            $.ajax({
                url : 'option_form.php',
                type: "GET",
                data: $(this).serialize(),
                success: function (data) {
                    $("#form_output").html(data);

                },
                error: function (jXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });
       
    });

    function new_forms(){
        var col_to_hide = $('.formContainer #showName');
        var output = $('#form_output .option-section');

        if (!$.trim(output.html()) == '') {
            col_to_hide.hide();
            console.log('hizzle--nizzle-hide');
            if ($('.option-section')) {
                $('.option-section').addClass('show-options');
            }
        }
    }

});

/* End Options */




