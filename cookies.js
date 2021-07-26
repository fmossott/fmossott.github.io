
function acceptCookies() {
  Cookies.set('acceptedCookies', 'true')
  var e = document.getElementById("cookiePopup");
  e.className += "hidden";
}

var accepted = Cookies.get('acceptedCookies');
if (accepted) {
  acceptCookies()
}