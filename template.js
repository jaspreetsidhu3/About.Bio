var textEditor = document.getElementById('textEditor');
var copy_button = document.getElementById('copy');

let userdetailsKey = ["username", "phonenumber", "mail", "portfolio", "facebook", "instagram", "twitter", "discord", "snapchat", "telegram", "youtube", "linkedIn"];
chrome.storage.local.get(userdetailsKey, function(userdetails) {
    console.log("getting userdetails value..");
    var userData = "";
    if (!chrome.runtime.error) {
        console.log(userdetails);
        if (userdetails.username)
            userData = 'Name: ' + userdetails.username + "\n";
        if (userdetails.phonenumber)
            userData += 'Contact: ' + userdetails.phonenumber + "\n";
        if (userdetails.mail)
            userData += 'Mail: ' + userdetails.mail + "\n";
        if (userdetails.portfolio)
            userData += 'Portfolio: ' + userdetails.portfolio + "\n";
        if (userdetails.facebook)
            userData += 'Facebook: ' + userdetails.facebook + "\n";
        if (userdetails.linkedIn)
            userData += 'LinkedIn: ' + userdetails.linkedIn + "\n";
        if (userdetails.instagram)
            userData += 'Instagram: ' + userdetails.instagram + "\n";
        if (userdetails.twitter)
            userData += 'Twitter: ' + userdetails.twitter + "\n";
        if (userdetails.snapchat)
            userData += 'Snapchat: ' + userdetails.snapchat + "\n";
        if (userdetails.telegram)
            userData += 'Telegram Channel: ' + userdetails.telegram + "\n";
        if (userdetails.youtube)
            userData += 'YouTube channel: ' + userdetails.youtube + "\n";
        if (userdetails.discord)
            userData += 'Discord channel: ' + userdetails.discord + "\n";

        textEditor.value += userData;
    }
});


// save btn action
copy_button.addEventListener('click', function() {
    console.log("copy btn cliked");
    copyUserDetails();
});

function copyUserDetails() {
    // Select the text field
    textEditor.select();

    // Copy the text inside the text field
    navigator.clipboard.writeText(textEditor.value);
    document.getElementById('messages').innerText = "*Copied text to clipboard*";
}