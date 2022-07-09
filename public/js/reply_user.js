function addUserTalk(message) {
    const $item = $('#templates .user-template').clone();
    $('.message', $item).text(message);
    $('#talks').append($item);
}