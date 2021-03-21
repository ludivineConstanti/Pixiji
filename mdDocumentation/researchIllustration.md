# Research illustration 🎨

The design part of the illustration process are not described here (since this is more focused on the coding part) but all illustrations were made by myself, based on research between pixel art and the almost square shape of kanjis (Japanese characters that were taken from the Chinese writing system).

## First approach

I made a first try to see if it was possible to create those illustrations the way I wanted (see my previous github repo [here](https://github.com/ludivineConstanti/pixiji_test_visual/blob/main/html/index.html).  

This was before I started learning React, so I just made a lot of div manually. I knew already about the possibility of making it an svg, but making divs made me have more control (or at least I thought so at the time) over the code to control the individual elements.  

I used a grid system where I just define how big the div container is, and how many columns and rows it has, and then I define how much space each div should take depending on there class (1 column, 2 columns...). I then put a border width the same color as the background to have the state where you can not see the pixel art. This way the colored square looks centered inside. I then put a border width of 0 when I want to show the visual properly (the illustration is first hidden when a user starts a quiz and appears little by little when he / she answers correctly).

### Pros 👍 and cons 👎
✔️ It works  
✔️ As long as the parent div has the right aspect ratio, it can scale properly  

❌ There's a lot of repetitive code (each div written manually).  
❌ Transforming an illustration in that format is a bit painful (it works only if the parent div has the right dimensions, and if the squares are placed correctly, if there's one div that is where it shouldn't or is the wrong dimension, it destroys the rest).  
❌ It's not possible to make the square grow bigger or smaller (for animation purpose...) otherwise the layout of the rest of the divs is broken.  

###### Research time ⏱️ ⏱️ ⏱️

### Is it good to use divs this way or not? 🤔
#### DIV Pros 👍 and cons 👎
✔️ Easy to use  
❌ Performance
#### SVG Pros 👍 and cons 👎 
✔️ Not much more complicated than divs  
✔️ More performant than divs  
✔️ More semantically correct (it is seen as an image and we are using it for illustration purposes) 
#### CANVAS Pros 👍 and cons 👎
❌ Less abstractions = more difficult to use  
❌ No objet-level interactions built-in  
❌ Does not automatically adjust to display pixel ratio  
✔️ More performant than divs and svg for complex rendering (might not be relevant for this case, since it's less than a 100 elements)
#### WebGL (2D) Pros 👍 and cons 👎
❌ Less abstractions = more difficult to use  
❌ Does not automatically adjust to display pixel ratio 
❌ No objet-level interactions built-in   
✔️ Highly performant  

[Ref => ](https://blog.logrocket.com/when-to-use-html5s-canvas-ce992b100ee8/)

Conclusion: Canvas and WebGl seem a bit overkill and make interaction and responsiveness more difficult. Therefore, I will keep using the Dom's elements. I will use svg since they are more appropriate semantically for my needs.
