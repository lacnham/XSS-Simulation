function displayTextMail() {
    var mail_name = document.getElementById("mail").value
    var notice = document.getElementById("notice")
    document.getElementById("notice").innerHTML ="Your email: " + "'"+mail_name+"'"  + " is now subcribed";
}
