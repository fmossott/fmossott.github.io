
function acceptCookies() {
  Cookies.set('acceptedCookies', 'true')
  $("#cookiePopup").addClass("hidden");
}

$( document ).ready(() => {
  var accepted = Cookies.get('acceptedCookies');
  if (accepted) {
    acceptCookies()
  }
})