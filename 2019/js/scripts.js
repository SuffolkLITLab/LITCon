function msg() {
  $('#msg').html("<!--<b>Save the date (April 8th, 2019). <a href='https://docs.google.com/forms/d/e/1FAIpQLScoRWp4BlJ4n3lMXIBFpr1p1tBVO_mFsdeA9PM9rI3IZK4dZA/viewform' traget='_blank'>Apply to present a rapid-fire talk here</a>.</b>--><b><a href='https://portalpro.suffolk.edu/forms3/Forms?v:=439' target='_blank' onClick=\"ga('send', 'event', 'clicks', 'click', 'Registration');\">Register now ($25)!</a> Registration closes April 1. <a href='https://suffolklitlab.org/LITCon/2019/litbits/' target='_top'>Apply to present a rapid-fire talk</a>, and <a href='https://suffolklitlab.org/slack/' target='_blank' onClick=\"ga('send', 'event', 'clicks', 'click', 'Join Slack');\">join our Slack team</a>.</b>");
  $('#msg').show();
  return true;
}
