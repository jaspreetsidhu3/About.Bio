// DOM
var usernameInput = document.getElementById('username');
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

var save_button = document.getElementById('save');

let userdetailsKey = ["username", "phonenumber", "mail", "facebook", "instagram", "twitter", "discord", "snapchat", "telegram", "youtube", "linkedIn"];
chrome.storage.local.get(userdetailsKey, function(userdetails) {
    console.log("getting userdetails value..");
    if (!chrome.runtime.error) {
        console.log(userdetails);
        if (userdetails.username)
            usernameInput.value = userdetails.username;
        if (userdetails.phonenumber)
            phonenumberInput.value = userdetails.phonenumber;
        if (userdetails.mail)
            mailInput.value = userdetails.mail;
        if (userdetails.facebook)
            facebookInput.value = userdetails.facebook;
        if (userdetails.instagram)
            instagramInput.value = userdetails.instagram;
        if (userdetails.twitter)
            twitterInput.value = userdetails.twitter;
        if (userdetails.snapchat)
            snapchatInput.value = userdetails.snapchat;
        if (userdetails.telegram)
            telegramInput.value = userdetails.telegram;
        if (userdetails.youtube)
            youtubeInput.value = userdetails.youtube;
        if (userdetails.linkedIn)
            linkedInInput.value = userdetails.linkedIn;
        if (userdetails.discord)
            discordInput.value = userdetails.discord;
    }
});

// save btn action
save_button.addEventListener('click', function() {
    console.log("saved btn cliked");
    saveLinks();
});

function saveLinks() {
    console.log("saveLinks function called");
    var isValid = validateURLs();
    if (isValid) {
        let dictLinks = {
            "username": usernameInput.value,
            "phonenumber": phonenumberInput.value,
            "mail": mailInput.value,
            "facebook": facebookInput.value,
            "instagram": instagramInput.value,
            "twitter": twitterInput.value,
            "discord": discordInput.value,
            "snapchat": snapchatInput.value,
            "telegram": telegramInput.value,
            "youtube": youtubeInput.value,
            "linkedIn": linkedInInput.value
        }
        console.log(dictLinks)
        chrome.storage.local.set(dictLinks, function() {
            if (!chrome.runtime.error) {
                console.log("links saved");
                document.getElementById('errormessages').innerText = "";
                document.getElementById('messages').innerText = "Saved!";
            } else {
                document.getElementById('errormessages').innerText = "*Something went wrong!*";
            }
        })
    }
}

function validateURLs() {
    var re = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    var inputFields = [mailInput, facebookInput, instagramInput, twitterInput, linkedInInput, discordInput, snapchatInput, telegramInput, youtubeInput];
    for (var i = 0; i < inputFields.length; i++) {
        if (!re.test(inputFields[i].value)) {
            if (inputFields[i].value) {
                console.log(inputFields[i].getAttribute('id'));
                document.getElementById('messages').innerText = "";
                document.getElementById('errormessages').innerText = "*Invalid" + " " + inputFields[i].getAttribute('id') + " *";
                return false;
            }
        }
    }
    return true;
}