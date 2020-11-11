function alertRedirect(website_address, alert_description)
{
    var answer = confirm ("Redirecting to " + alert_description + " page. Click OK if you want to continue.")
    if (answer)
    window.location = website_address;
}

function sendMail()
{
    window.location.assign("mailto:kamilarturbednarski@gmail.com");
}
