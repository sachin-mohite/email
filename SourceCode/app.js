#!/usr/bin/env node

// Paste your API key here...
var POSTMARK_KEY = "00000000-0xxx-0xx0-x000-xx00x00xx00x";

var postmark = require("postmark")(POSTMARK_KEY);

postmark.send({
    "From": "outgoing@server.com", 
    "To": "user@domain.com", 
    "Subject": "This is a subject", 
    "TextBody": "This is a message body"
}, function (err, to) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Email sent to: %s", to);
});