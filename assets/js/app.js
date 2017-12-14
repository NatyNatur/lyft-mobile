$(document).ready(function() {
	$('#appWeb').hide();
  $("#splash").fadeIn(5000).fadeOut(2000, showSite);
  $('.modal').modal();

  function showSite(){
    $('#appWeb').show();
  }
});