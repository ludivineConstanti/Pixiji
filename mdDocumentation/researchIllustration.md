# Research illustration 🎨

The design part of the illustration process are not described here (since this is more focused on the coding part) but all illustrations were made by myself, based on research between pixel art and the almost square shape of kanjis (Japanese characters that were taken from the Chinese writing system).

## 1️ First approach 

I made a first try to see if it was possible to create those illustrations the way I wanted (see my previous github repo [here](https://github.com/ludivineConstanti/pixiji_test_visual/blob/main/html/index.html).  

This was before I started learning React, so I just made a lot of div manually. I knew already about the possibility of making it an svg, but making divs made me have more control (or at least I thought so at the time) over the code to control the individual elements.  

I used a grid system where I just define how big the div container is, and how many columns and rows it has, and then I define how much space each div should take depending on there class (1 column, 2 columns...). I then put a border width the same color as the background to have the state where you can not see the pixel art. This way the colored square looks centered inside. I then put a border width of 0 when I want to show the visual properly (the illustration is first hidden when a user starts a quiz and appears little by little when he / she answers correctly).

### Hidden
![1_hidden](https://user-images.githubusercontent.com/24965333/111910251-e9446800-8a60-11eb-8500-1861a90fe43a.png)

### Appearing
![2_in_process](https://user-images.githubusercontent.com/24965333/111910263-f6f9ed80-8a60-11eb-868f-11cff79d58a9.png)

### Revealed
![3_shown](https://user-images.githubusercontent.com/24965333/111910271-feb99200-8a60-11eb-91e9-9f7ed6790ab7.png)

### Pros 👍 and cons 👎
✔️ It works  
✔️ As long as the parent div has the right aspect ratio, it can scale properly  
❌ There's a lot of repetitive code (each div written manually).  
❌ Transforming an illustration in that format is a bit painful (it works only if the parent div has the right dimensions, and if the squares are placed correctly, if there's one div that is where it shouldn't or is the wrong dimension, it destroys the rest).  
❌ It's not possible to make the square grow bigger or smaller (for animation purpose...) otherwise the layout of the rest of the divs is broken.  
❌ I need to add unnecessary divs (with transparent background) to have the right spacing between divs

##### Research time ⏱️ ⏱️ ⏱️

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

## 2️ Second approach 

Needs 📝
* Each svg must have it's own color
* The final illustration needs to be responsive (scale + work on mobile)
* Svg need to belong to a group, so that various ones can become bigger at the same time (tested one by one and randomly for the first approach, doesn't work well)  
* The group needs to be linked to a specific name / number, so that there will be a way to trigger the animation for a specific group when the user answer something

Optional 📝
* Have bigger groups that allows more animations (pixels for a planet all grouped together so that the entire planet can be animated going left and right slowly)
* Have as much control as possible to make more animations later

### 2 possible ways (that I can think of 🤔) to make the svg 

#### Export the svg directly
❌ There would still be a lot of manual work left, since I need to differentiate them (classify per group) and lines of code that are automatically generated are not necessarily easy to read
❌ There can be inaccuracy during the export (59.999 written instead of 60)  
✔️ Colors and dimensions are automatically made  

#### Make svg from an array of properties
❌ A lot of manual work  
✔️ More control other the final result and the process  

### 2 possible ways (that I can think of 🤔) to control their style

#### Sass / CSS
✔️ It's made for it  
❌ Defining the colors in CSS would be a nightmare, since each square needs an individual one  
❌ If I define some things in JavaScript and some other in JS, I have no idea how to make those 2 communicate (JavaScript giving informations to CSS) I quickly researched this topic, I am not sure if it's possible at all  
#### JavaScript (with or without additional tool) 
✔️ Everything stays in one place (good for organisation and no potential future communication problem)  
❌ CSS classes are generally better for performance than inline 

##### Research time ⏱️ ⏱️ ⏱️

### Generate an svg from an object
###### (simplified version)
``` Javascript
const data = {
    0: {x: 0, y: 0, size: 1 fill'#000'}, 
    1: {x: 1, y: 1, size: 1 fill'#000'}, 
    2: {x: 2, y: 2, size: 1 fill'#000'}}  
<svg><rect /><rect /><rect /></svg>  
```
