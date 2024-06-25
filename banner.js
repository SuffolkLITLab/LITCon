var archive_msg = `This website is an archive. <a href="https://suffolklitlab.org">Click here to visit the current Suffolk LIT Lab website.</a>`

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('msg_bar').innerHTML = archive_msg;
  document.getElementById('msg_bar').style.display='block';
});
