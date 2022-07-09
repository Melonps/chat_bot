$(document).ready(function () {
    addBotTalk();
    setReplyToBotMessage({ text: '入力してください' });

    $('#send_btn').on('click', onClick);
})


function addBotTalk() {
    const $item = $('#templates .bot-template').clone();
    $('#talks').append($item);
}



function setReplyToBotMessage(reply) {
    const text = reply.text;
    const $template = $('#talks').find('.bot-template:last');
    const $operator = $template.find('operator');
    const $message = $template.find('.message');
    $message.text(text);

    const $item = $('#templates .link-template').clone();
    const $link = $('.link', $item);    
    $message.append($item);
}