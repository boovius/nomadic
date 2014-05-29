console.log(gon);

jQuery(function() {
  $('body').prepend('<div id="fb-root"></div>');
  console.log($.ajax({
    url: "" + window.location.protocol + "//connect.facebook.net/en_US/all.js",
    dataType: 'script',
    cache: true
  }));
});

window.fbAsyncInit = function() {
  FB.init({
    appId: gon.config.facebookAppId,
    cookie: true
  });

  console.log(FB);

  $('#sign-in').click(function(e) {
    e.preventDefault();
    FB.login(function(response) {
      hello = response;
      console.log(hello);
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
