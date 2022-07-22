function addUserTalk(message) {
    console.log('message was accepted');
    const $item = $('#templates .user-template').clone();
    $('.message', $item).text(message);
    $('#talks').append($item);
}