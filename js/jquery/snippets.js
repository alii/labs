//remove class after delay

var link = $('#link');
link.addClass('current');
setTimeout(function() {
	link.removeClass('current');
}, 3000);

//--------------------------//

//Div full height/width of viewport

// global vars
var winWidth = $(window).width();
var winHeight = $(window).height();

// set initial div height / width
$('div').css({
    'width': winWidth,
'height': winHeight,
});

// make sure div stays full width/height on resize
$(window).resize(function(){
    $('div').css({
    'width': winWidth,
    'height': winHeight,
});
});

//--------------------------//

//setInterval and setTimeout
var timer = setInterval(function(){
    if(someConditionIsTrue){
        clearTimeout(timer);
    }
},100);
/*But if, due to some reasons, the 'someCondition' never gets true than you need to
clear the timer otherwise it might turn into an infinite loop*/
setTimeout("clearTimeout(timer)",10000) //10 seconds or more



//Check if a value is in an Array
jQuery.inArray("value", arr); // Usage: if( jQuery.inArray("value", arr) != -1 ) { true };

//[1,2,3].inArray(2) > true
//[1,2,3].inArray(22) > false

//--------------------------//

//cookie GET/SET/DELETE

//get cookie
function getCookie( name ) {	
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
		return null;
	}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ';', len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}

//set cookie
function setCookie( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name+'='+escape( value ) +
		( ( expires ) ? ';expires='+expires_date.toGMTString() : '' ) + //expires.toGMTString()
		( ( path ) ? ';path=' + path : '' ) + 
		( ( domain ) ? ';domain=' + domain : '' ) +
		( ( secure ) ? ';secure' : '' );
}

//delete cookie
function deleteCookie( name, path, domain ) {
	if ( getCookie( name ) ) document.cookie = name + '=' +
			( ( path ) ? ';path=' + path : '') +
			( ( domain ) ? ';domain=' + domain : '' ) +
			';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}

//--------------------------//

//text blinker

function blink(selector){
	$(selector).fadeOut('slow', function(){
		$(this).fadeIn('slow', function(){
			blink(this);
		});
	});
}
	
$(document).ready(function(){
	blink('.blink');	
});

//--------------------------//

//Grab latest tweets from any user

//REQUIRES <ul class=="tweets"></ul> to drop tweets into
twitter_user  = 'username_goes_here';
twitter_count = 5;

twitter_url = "http://twitter.com/status/user_timeline/" + twitter_user + ".json?count=" + twitter_count + "&callback=?";

$.getJSON(twitter_url, function(data) {
	$.each(data, function(i, item) {
		var txt = item.text
			.replace(/(https?:\/\/[-a-z0-9._~:\/?#@!$&\'()*+,;=%]+)/ig, '<a href="$1">$1</a>')
			.replace(/@+([_A-Za-z0-9-]+)/ig, '<a href="http://twitter.com/#!/$1">@$1</a>')
			.replace(/#+([_A-Za-z0-9-]+)/ig, '<a href="http://search.twitter.com/#!/search/$1">#$1</a>');

		$('<li>' + txt + '</li>').appendTo('ul.tweets');
	});
});

//--------------------------//

// Prevent Scrolling (antiscroll)

 $(document).on("touchmove",function(event){
	event.preventDefault();
});
$(document).on("scroll",function(event) {
	event.preventDefault();
}
