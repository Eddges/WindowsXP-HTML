$( document ).ready(function() {
    $('.Icon').on('click', function() {
        $("*").removeClass('IconClick')
        $(this).toggleClass('IconClick')
    })
    // $('.Main').on('click', function() {
    //     $("*").removeClass('IconClick')
    // })
});