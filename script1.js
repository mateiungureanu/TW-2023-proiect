function onLoadHandler1() {
    document.addEventListener("DOMContentLoaded", function () {
        let ticket = document.querySelector("#ticket");
        if (ticket) {
            ticket.onsubmit = function (event) {
                document.getElementById('iframe').style.display = 'block';
                let gameid = document.getElementById("gameid").value;
                let issue = document.getElementById("issue").value;
                alert("Your ticket has been sent.");
            };
        }
    });
}

onLoadHandler1();
