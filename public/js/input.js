

function onClick() {
        const $inputText = $('input[name="user_talk"]');
        const text = $inputText.val();
        console.log(text);
        $('#output').html(text);
        if(!text) {
            console.log("none");
            return
    }
    fetch('http://localhost:8080/chat?text=' + text)
        .then(response => response.json())
        .then(reply => {
            console.log("###### reply ######");
            console.log(reply);
            console.log("###### reply-end ######");
            $('#output_weather').html(reply.text);
        })
    }
