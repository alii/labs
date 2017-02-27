//remove class after delay

var link = $('#link');
link.addClass('current');
setTimeout(function() {
	link.removeClass('current');
}, 3000);
