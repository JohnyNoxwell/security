(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"],[type="checkbox"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }

    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
            .done(done_func)
            .fail(fail_func);
    });

})(jQuery);
(function ($) {
    'use strict';

    var form1 = $('.contact__form1'),
        message1 = $('.contact__msg1'),
        form_data1;

    // Success function
    function done_func(response) {
        message1.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message1.text(response);
        setTimeout(function () {
            message1.fadeOut();
        }, 2000);
        form1.find('input:not([type="submit"],[type="checkbox"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message1.fadeIn().removeClass('alert-success').addClass('alert-success');
        message1.text(data.responseText);
        setTimeout(function () {
            message1.fadeOut();
        }, 2000);
    }

    form1.submit(function (e) {
        e.preventDefault();
        form_data1 = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form1.attr('action'),
            data: form_data1
        })
            .done(done_func)
            .fail(fail_func);
    });

})(jQuery);