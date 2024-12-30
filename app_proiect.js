const express = require('express');
const path = require('path');
const app = express();

app.use(express.static("html_proiect"));

app.get("/ticket", function(req, res) {
    let gameid = req.query.gameid;
    let issue = req.query.issue;
    let resultHtml = `
        <p>Ticket ID: XXXXXXXX</p>
        <p>You will be contacted via email. Estimated time of response: 24h</p>
        <p>Note! Do not send the same ticket multiple times as this will increase the time of response</p>
        <p><strong>Game ID:</strong> ${gameid}</p>
        <p><strong>Issue:</strong> ${issue}</p>
    `;
    res.send(resultHtml);
});

app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'html_proiect', '404.html'));
});

app.listen(4000, function() {
    console.log("Serverul proiectului a pornit");
});
