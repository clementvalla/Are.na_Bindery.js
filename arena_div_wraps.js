var new_html = "";

//get everything in <body>
// var body = document.getElementsByTagName("body");
var html = document.getElementsByTagName('body')[0].innerHTML
// console.log(html);

//split on <hr>
var blocks = html.split("<hr>");

//wrap everything in a "content" div
new_html += "<div id=\"content\">";

for (var i = 0; i < blocks.length; i++) {
	//the classes we will add to this div
	var classes = "block";

	//a tmp html element so we can manipulate our HTMLK like a DOM element
	var tmp = document.createElement( 'html' );
	tmp.innerHTML = blocks[i];

    //get rid of line breaks
	blocks[i] = blocks[i].replace(/(\r\n\t|\n|\r\t)/gm,"");

	//Deal with the last paragraph that's always the "added by info"
	//get the last node which is always the "added by paragraph node"
	var ps = tmp.getElementsByTagName('p')
	var  added_by = ps[ps.length-1];

	//remove it from tmp
	added_by.remove();

	//add it to an empty div
	var newDiv = document.createElement("div");
	newDiv.className = 'added_by';
	newDiv.appendChild(added_by);
	tmp.appendChild(newDiv);
	
	//title page
	// if (blocks[i].includes("<h1>")) classes += " title_page";
	if (tmp.getElementsByTagName("h1").length > 0)
		classes += " title_page";

	//attachment (image, video, pdf) page
	else if (blocks[i].startsWith("<p><a ")){
		classes += " attachment";
	}
	//text only blocks
	else {
		classes += " text";
	}

	new_html += "<div class=\""+ classes +"\" >";
	new_html += tmp.innerHTML;
	new_html += "</div><!-- end block -->";
	new_html += "<hr>";
}

//close content div
new_html += "</div><!-- end #content -->";

console.log(new_html);

//swap body html for new html
document.getElementsByTagName('body')[0].innerHTML = new_html;
