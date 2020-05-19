function render_color(color, quot, auth)
{
	document.body.style.background = color;
	document.body.style.color = color;
	var quotation = document.getElementById('quotation');
	var btn = document.getElementById('btn');
	var tweet_btn = document.getElementById('twitter');
	var tumblr_btn = document.getElementById('tumblr');
	var quotes = document.getElementById('quote');
	var authors = document.getElementById('author');

	quotation.style.color = color;
	btn.style.background = color;
	tweet_btn.style.background = color;
	tumblr_btn.style.background = color;
	quotes.innerHTML = quot;
	authors.innerHTML = auth;

	tweet_btn.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + quot);
}

function change_color()
{
	//var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c'];// '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
	var r= Math.floor(Math.random()*256);
  var g= Math.floor(Math.random()*256);
  var b= Math.floor(Math.random()*256);
  var color= "rgb(" + r + "," + g + "," + b + ")";
	var quotes = ['The Way Get Started Is To Quit Talking And Begin Doing.', 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty', 'Don\'t Let Yesterday Take Up Too Much Of Today', 'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up', 'If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You'];
	var authors = ['Walt Disney', 'Winston Churchill', 'Will Rogers', 'Vince Lombardi', 'Steve Jobs'];
	var index = Math.floor(Math.random() * quotes.length);
	render_color(color, quotes[index], authors[index]);
}