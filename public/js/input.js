
function onClick() {
        const $inputText = $('input[name="user_talk"]');
        const text = $inputText.val();
        console.log(text);
        $('#output').html(text);
        if(!text) {
            console.log("none");
            return
        }
    callBackend(text);
    addUserTalk(text);
}

function callBackend(text) {
    addBotTalk();
    scrollBottom();
    fetch('http://localhost:8080/chat?text=' + text)
        .then(response => response.json())
        .then(reply => {
            console.log("###### reply ######");
            console.log(reply);
            console.log("###### reply-end ######");
            setReplyToBotMessage(reply);
        });
}