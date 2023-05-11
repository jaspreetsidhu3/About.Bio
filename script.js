// DOM
var usernameGreet = document.getElementById('greetings');
var phonenumberInput = document.getElementById('phonenumber');
var mailInput = document.getElementById('mail');
var facebookInput = document.getElementById('facebook');
var instagramInput = document.getElementById('instagram');
var twitterInput = document.getElementById('twitter');
var discordInput = document.getElementById('discord');
var snapchatInput = document.getElementById('snapchat');
var telegramInput = document.getElementById('telegram');
var youtubeInput = document.getElementById('youtube');
var linkedInInput = document.getElementById('linkedIn');

let userDetailsKey = ["username", "phonenumber", "mail", "facebook", "instagram", "twitter", "discord", "snapchat", "telegram", "youtube", "linkedIn"];
chrome.storage.local.get(userDetailsKey, function(links) {
    if (!chrome.runtime.error) {
        console.log(links);
        if (links.username) {
            console.log(links.username);
            usernameGreet.textContent += " " + links.username;
        }

        if (links.phonenumber) {
            phonenumberInput.href = "tel:" + links.phonenumber;
        } else {
            phonenumberInput.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }

        if (links.mail) {
            mailInput.href = links.mailInput;
        } else {
            mailInput.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }

        if (links.facebook) {
            facebookInput.href = links.facebook;

        } else {
            facebookInput.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }

        if (links.instagram) {
            instagramInput.href = links.instagram;

        } else {
            instagramInput.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }


        if (links.twitter) {
            twitterInput.href = links.twitter;
        } else {
            twitterInput.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }

        if (links.discord) {
            discordInput.href = links.discord;
        } else {
            discordInput.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }

        if (links.snapchat) {
            snapchatInput.href = links.snapchat;
        } else {
            snapchatInput.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }
        if (links.telegram) {
            telegramInput.href = links.telegram;
        } else {
            telegramInput.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }
        if (links.youtube) {
            youtubeInput.href = links.youtube;
        } else {
            youtubeInput.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }
        if (links.linkedIn) {
            linkedInInput.href = links.linkedIn;
        } else {
            linkedInInput.addEventListener('click', function(event) {
                event.preventDefault();
            });
        }
    }
});


var template_button = document.getElementById('template');

// template btn action
template_button.addEventListener('click', function() {
    console.log("template btn cliked");
    template_click();
});

function template_click() {
    window.location.href = "template.html";
}