jQuery(function() {
  $('body').prepend('<div id="fb-root"></div>');
  $.ajax({
    url: "" + window.location.protocol + "//connect.facebook.net/en_US/all.js",
    dataType: 'script',
    cache: true
  });
});

window.fbAsyncInit = function() {
  FB.init({
    appId: gon.config.facebookAppId,
    cookie: true
  });

  $('#sign-in').click(function(e) {
    e.preventDefault();
    FB.login(function(response) {
      if (response.authResponse) {
        window.location = '/auth/facebook/callback';
      }
    });
  });

  $('#sign-out').click(function(e) {
    FB.getLoginStatus(function(response) {
      if (response.authResponse) {
        return FB.logout();
      }
    });
    return true;
  });
};
