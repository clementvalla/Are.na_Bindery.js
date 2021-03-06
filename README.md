# Are.na_Bindery.js
Make books with your Are.na channels

Uses Bindery.js by Evan Brooks:
https://github.com/evnbr/bindery



## Using
1. Download Are.na_Bindery.js
2. Download you Are.na Channel as HTML
3. unzip and place your channel in the "channels" folder
4. open your channel's index.html file
5. copy code from code_snippets.html into the index.html file
6. open your index.html file in your browser (so far works best on chrome)
7. ctrl+p or print in browser
8. save as pdf


## What it's doing
_arena_div_wraps.js_ adds some divs and classes to the html to make formatting easier. The are.na html is very bare bones and difficult to format.

_bindery_print_arena.css_ is the css. applies formatting. This is were you want to edit how your book looks, unless you want to change the page size - that's in the html from _code_snippet.html_ that you are adding to your index file generated by are.na.

_bindery.min.js_ this is really what's doing all the work formatting the html into a print-ready book.


## HTML patterns created by arena_div_wraps.js
HTML PATTERN FOR TEXT PAGES
```
<div class="block text">

    <h4> 
        Title 
    </h4>

    <p>
        ...body text...
    </p>

    <p>
        ...more body text...
    </p>

    <p>
        etc....
    </p>


    <div class="added_by">
        <p>
            <em>Added by xxxx @ 05:06pm on 2018-Jun-12</em>
        </p>
    </div>

    <hr>
</div>
```

HTML PATTERN FOR LINK PAGES:
```
<div class="block text">

    <h4>
        <a href="page_link.html">Title</a>
    </h4>

        
    <div class="added_by">
        <p>
            <em>Added by xxxx @ 05:06pm on 2018-Jun-12</em>
        </p>
    </div>

    <hr>
</div>
```

HTML PATTERN FOR IMAGE/VIDEO/PDF PAGES:
```
<div class="block attachment">
    <p>
        <a href=".....jpg">
            <img src=".....jpg">
        </a>
    </p>

    <h4>title</h4>
    
    <div class="added_by">
        <p>
            <em>Added by xxxx @ 05:06pm on 2018-Jun-12</em>
        </p>
    </div>

    <hr>
</div>
```

## Issues
Right now the CSS is pretty ugly. Are.na provides really stripped down HTML so we're using a lot of :nth-child(x) pseudo-selectors for formatting, and this doesn' produce the cleanest results. This is addressed somewhat by using the _arena_div_wraps.js_ but this could still use some cleaning up.

Oh, and I don't use git or github a lot so not sure what the best practice is for including Evan's Bindery.js library here.
