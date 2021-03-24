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
✔️ Easy to use  
✔️ More semantically correct (it is seen as an image and we are using it for illustration purposes)  
❌ More or less same performance than divs (need to read more articles about it + do test)
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

Conclusion: Canvas and WebGl seem a bit overkill and make interaction and responsiveness more difficult. Therefore, I will keep using the DOM's elements.

## 2️ Second approach

### 3 possible ways (that I can think of 🤔) to make the svg 

#### Export the svg directly
❌ There would still be a lot of manual work left, since I need to differentiate them (classify per group) and lines of code that are automatically generated are not necessarily easy to read  
❌ It would need to be modified if I want to add other things (a div that can potentially contain a Japanese character)  
❌ There can be inaccuracy during the export (59.999 written instead of 60)  
✔️ Colors and dimensions are automatically made  

#### Make svg / div from an array of properties
❌ Need to write the objects (manual work)  
❌ Need to write the function that will convert the object to the final elements (that should be fine)  
❌ Need to experiment what works and what doesn't (which means repeating the 2 steps above potentially many times)  
❌ Need to see if it's really less code than writing it directly  
✔️ Can dynamise some aspects of the code (add the same class name to various elements)  

#### Make an svg / div by writing the code directly
❌ A lot of manual work  
❌ A lot of copy-paste for things that can be dynamised with generating it with a function (needs to see if it's actually a lot)  
✔️ Easier to add reference to dynamic values that we keep updating (I don't know if it's possible at all with the function generating svg / divs)  

### 2 possible ways (that I can think of 🤔) to control their style

#### Sass / CSS
✔️ It's made for it  
❌ Defining the colors in CSS would be a nightmare, since each square needs an individual one  
❌ If I define some things in JavaScript and some other in JS, I have no idea how to make those 2 communicate (JavaScript giving informations to CSS) I quickly researched this topic, I am not sure if it's possible at all  
#### JavaScript (with or without additional tool) 
✔️ Everything stays in one place (good for organisation and no potential future communication problem)  
❌ CSS classes are generally better for performance than inline CSS

##### Research time ⏱️ ⏱️ ⏱️

### Generate an svg from an object
###### (simplified version)

``` Javascript
const data = {
    height: 3,
    width: 3,
    0: {x: 0, y: 0, size: 1, fill: '#000'},
    1: {x: 1, y: 1, size: 1, fill: '#000'},
    2: {x: 2, y: 2, size: 1, fill: '#000'}
    };

<svg viewBox={`0 0 ${data.width} ${data.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x={data.0.x} y={data.0.y} width={data.0.size} fill={data.0.fill}/>
    <rect x={data.1.x} y={data.1.y} width={data.1.size} fill={data.1.fill}/>
    <rect x={data.2.x} y={data.2.y} width={data.2.size} fill={data.2.fill}/>
</svg>  
```
✔️ The svg is properly displayed  
✔️ It's possible to manipulate its width and height with CSS and scale everything at once  
❌ If we scale the squares, they are scaled from the top left of the svg

### Other possibilities (that I can think of 🤔)

#### Have an individual svg per square  
✔️ Give individual control to scale them and could scale them based on their center (by adding ```transform-origin: 50% 50%;```)  
❌ More code  
❌ Would need to find an other way to control their position (the squares were correctly displaying due to their x and y properties that is relative to their parent svg)  

#### Find an other way to control their position  
✔️ less code  
✔️ we need to do that too, with the other option anyway

The absolute positionning with the css transform allows to have the control I wanted over the positions, but have the disadvantage of showing a slight gap between the divs, not aligning their borders properly. I decided to make the gap bigger to transform it into a visual choice rather than a mistake.

I also thought about making the square a bit bigger so that they can overlap, and don't show the gap, but it was not working well as you could tell they were not aligned properly.

That made me realise an other need I have for the divs, if I want to make them bigger than their original size, the one that become bigger need to be rendered last (or have a higher z-index) to be on top of the others.

### Update

I looked at the documentation of GreenSocks for animation and it appears I don't actually need to have control over the position in JavaScript to animate them how I want. Since controling the position individually is a more buggy (especially when resizing, divs are a few pixels off) and awkward approach, I will go back to the initial position being controlled by css.

The position controlled by css now fixes the bug of having strange gaps between the square, but animating the elements with GreenSock puts it back. I guessed that the unwanted side effect also came form the fact that GreenSock needs to manipulate the position with JavaScript to obtained the desired effect, and found there's a way to cancel that by clearing the styling properties made in JavaScript. By using clearProps all, I can now get rid of it and its sides effect. I can't do that since the color of the square is also part of the styling made in JavaScript, so I found an other option, which is to specify which properties I want to remove. Thanks to that, I got rid of the unwanted side effect.
