jQuery('document').ready($(function () {
    $('#dp').datepicker({dateFormat: 'dd-mm-yy'});
    $('#range1').change(() => {$('#text1').val($('#range1').val())})
    $('#text1').change(() => {$('#range1').val($('#text1').val())})
    $('#range2').change(() => {$('#text2').val($('#range2').val())})
    $('#text2').change(() => {$('#range2').val($('#text2').val())})

    $('#rb1').change(() => {
        $('#rb2').prop('checked', false);
        $('#text2').prop('disabled', true);
        $('#range2').prop('disabled', true);
    })
    $('#rb2').change(() => {
        $('#rb1').prop('checked', false);
        $('#text2').prop('disabled', false);
        $('#range2').prop('disabled', false);
    })
    $('#submit').click(() => {
        $.post('calc.php', {
            date: $('#dp').val(),
            sum_start: $('#text1').val(),
            term: $('#term').val(),
            sum_add: $("#rb2").is(":checked") ? $('#text2').val() : 0
        }, (data) => {
            $('#res').html('Результат: ' + data + ' руб');
        })
        console.log($("#rb2").is(":checked"));
    });
    $('#text2').prop('disabled', true);
    $('#range2').prop('disabled', true);
    $('a').click((e) => {$('#bc').val(alert(e.val()))})
}));
