function OpenClicked() {
            //$('#tmpDialogue').show('slow');
            //$('#tmpDialogue').slideDown('slow');
            $('#box1').fadeIn('slow');

        }
function CloseClicked() {
    // $('#tmpDialogue').hide(50000);
    //  $('#tmpDialogue').slideUp(5000);
    $('#box1').fadeOut('slow');
}
$(document).ready(function () {

    $('#box1').hide();

    $('#open1').click(OpenClicked);
    $('#close1').click(CloseClicked);
});

function OpenClicked() {
    //$('#tmpDialogue').show('slow');
    //$('#tmpDialogue').slideDown('slow');
    $('#box2').fadeIn('slow');

}
function CloseClicked() {
    // $('#tmpDialogue').hide(50000);
    //  $('#tmpDialogue').slideUp(5000);
    $('#box2').fadeOut('slow');
}
$(document).ready(function () {

    $('#box2').hide();

    $('#open2').click(OpenClicked);
    $('#close2').click(CloseClicked);
});